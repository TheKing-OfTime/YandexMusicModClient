#include "set_iconic_thumbnail.h"
#include <gdiplus.h>
#include <dwmapi.h>
#include <atlbase.h>

#pragma comment(lib, "gdiplus.lib")
#pragma comment(lib, "dwmapi.lib")

// GDI+ token for startup/shutdown
static ULONG_PTR g_gdiplusToken = 0;
static int g_gdiplusRefCount = 0;


bool InitGDIPlus() {
    if (g_gdiplusRefCount == 0) {
        Gdiplus::GdiplusStartupInput gdiplusStartupInput;
        Gdiplus::Status status = Gdiplus::GdiplusStartup(&g_gdiplusToken, &gdiplusStartupInput, NULL);
        if (status != Gdiplus::Ok) {
            return false; // GDI+ startup failed
        }
    }
    g_gdiplusRefCount++;
    return true;
}

void ShutdownGDIPlus() {
    g_gdiplusRefCount--;
    if (g_gdiplusRefCount == 0 && g_gdiplusToken != 0) {
        Gdiplus::GdiplusShutdown(g_gdiplusToken);
        g_gdiplusToken = 0;
    }
}

HBITMAP BufferToHBITMAP(const Napi::Buffer<unsigned char>& imageBuffer, int maxWidth, int maxHeight, bool forceResize = FALSE) {
    const unsigned char* imageData = imageBuffer.Data();
    size_t imageSize = imageBuffer.Length();

    // Используем CComPtr для управления IStream
    CComPtr<IStream> pStream;
    HRESULT hr = CreateStreamOnHGlobal(NULL, TRUE, &pStream);
    if (FAILED(hr)) {
        return NULL;
    }

    ULONG bytesWritten;
    hr = pStream->Write(imageData, static_cast<ULONG>(imageSize), &bytesWritten);
    if (FAILED(hr) || bytesWritten != imageSize) {
        return NULL;
    }

    LARGE_INTEGER li = {0};
    hr = pStream->Seek(li, STREAM_SEEK_SET, NULL);
    if (FAILED(hr)) {
        return NULL;
    }

    Gdiplus::Bitmap* pBitmap = Gdiplus::Bitmap::FromStream(pStream);
    if (!pBitmap || pBitmap->GetLastStatus() != Gdiplus::Ok) {
        if (pBitmap) delete pBitmap;
        return NULL;
    }

    UINT width = pBitmap->GetWidth();
    UINT height = pBitmap->GetHeight();
    if (forceResize || width > (UINT)maxWidth || height > (UINT)maxHeight) {
        double scale = (std::min)((double)maxWidth / width, (double)maxHeight / height);
        UINT newWidth = static_cast<UINT>(width * scale);
        UINT newHeight = static_cast<UINT>(height * scale);
        if (newWidth == 0) newWidth = 1;
        if (newHeight == 0) newHeight = 1;

        Gdiplus::Bitmap* pResized = new Gdiplus::Bitmap(maxWidth, maxHeight, pBitmap->GetPixelFormat());
        Gdiplus::Graphics graphics(pResized);
        graphics.SetInterpolationMode(Gdiplus::InterpolationModeHighQualityBicubic);
        graphics.Clear(Gdiplus::Color(0, 0, 0, 0));

        int offsetX = (maxWidth - newWidth) / 2;
        int offsetY = (maxHeight - newHeight) / 2;
        graphics.DrawImage(pBitmap, offsetX, offsetY, newWidth, newHeight);

        delete pBitmap;
        pBitmap = pResized;
    }

    if (pBitmap->GetWidth() == 0 || pBitmap->GetHeight() == 0) {
        delete pBitmap;
        return NULL;
    }

    HBITMAP hBitmap = NULL;
    Gdiplus::Status gdiStatus = pBitmap->GetHBITMAP(Gdiplus::Color(0, 0, 0, 0), &hBitmap);
    delete pBitmap;
    if (gdiStatus != Gdiplus::Ok || hBitmap == NULL) {
        return NULL;
    }
    return hBitmap;
}

HBITMAP BufferToHBITMAP(const Napi::Buffer<unsigned char>& imageBuffer, int maxSize, bool forceResize = FALSE) {
    return BufferToHBITMAP(imageBuffer, maxSize, maxSize, forceResize);
}

Napi::Value SetIconicThumbnail(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsBuffer()) {
        Napi::TypeError::New(env, "Invalid arguments. Expected: setIconicThumbnail(hwnd: number, imageBuffer: Buffer)").ThrowAsJavaScriptException();
        return env.Undefined();
    }

    HWND hwnd = reinterpret_cast<HWND>(static_cast<uintptr_t>(info[0].As<Napi::Number>().Int64Value()));

    Napi::Buffer<unsigned char> imageBuffer = info[1].As<Napi::Buffer<unsigned char>>();

    HRESULT hr = S_OK;

    BOOL fForceIconic = TRUE;
    BOOL fHasIconicBitmap = TRUE;

    hr = DwmSetWindowAttribute(
        hwnd,
        DWMWA_FORCE_ICONIC_REPRESENTATION,
        &fForceIconic,
        sizeof(fForceIconic));

    if (FAILED(hr)) {
        Napi::Error::New(env, "Failed to set DWMWA_FORCE_ICONIC_REPRESENTATION").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }

    hr = DwmSetWindowAttribute(
        hwnd,
        DWMWA_HAS_ICONIC_BITMAP,
        &fHasIconicBitmap,
        sizeof(fHasIconicBitmap));

    if (FAILED(hr)) {
        Napi::Error::New(env, "Failed to set DWMWA_HAS_ICONIC_BITMAP").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }


    // Initialize GDI+
    if (!InitGDIPlus()) {
        Napi::Error::New(env, "Failed to initialize GDI+").ThrowAsJavaScriptException();
        return env.Undefined();
    }


    HBITMAP hBitmap = BufferToHBITMAP(imageBuffer, 100);
    if (hBitmap == NULL) {
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to convert image buffer to HBITMAP").ThrowAsJavaScriptException();
        return Napi::Number::New(env, -1);
    }

    // dwSITFlags can be 0 or DWM_SIT_DISPLAYFRAME (0x00000001)
    hr = DwmSetIconicThumbnail(hwnd, hBitmap, 0);


    ShutdownGDIPlus();

    return Napi::Number::New(env, hr);
}


Napi::Value ClearIconicThumbnail(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();


    if (info.Length() < 1 || !info[0].IsNumber()) {
        Napi::TypeError::New(env, "Invalid arguments. Expected: clearIconicThumbnail(hwnd: number)").ThrowAsJavaScriptException();
        return env.Undefined();
    }


    HWND hwnd = reinterpret_cast<HWND>(static_cast<uintptr_t>(info[0].As<Napi::Number>().Int64Value()));

    HRESULT hr = S_OK;

    // Set DWM Window Attributes to revert to live preview behavior
    BOOL fForceIconic = FALSE;
    BOOL fHasIconicBitmap = FALSE;

    hr = DwmSetWindowAttribute(
        hwnd,
        DWMWA_FORCE_ICONIC_REPRESENTATION,
        &fForceIconic,
        sizeof(fForceIconic));

    if (FAILED(hr)) {
        Napi::Error::New(env, "Failed to reset DWMWA_FORCE_ICONIC_REPRESENTATION").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }

    hr = DwmSetWindowAttribute(
        hwnd,
        DWMWA_HAS_ICONIC_BITMAP,
        &fHasIconicBitmap,
        sizeof(fHasIconicBitmap));

    if (FAILED(hr)) {
        Napi::Error::New(env, "Failed to reset DWMWA_HAS_ICONIC_BITMAP").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }


    return Napi::Number::New(env, hr); // Return S_OK if successful
}


Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "setIconicThumbnail"), Napi::Function::New(env, SetIconicThumbnail));
    exports.Set(Napi::String::New(env, "clearIconicThumbnail"), Napi::Function::New(env, ClearIconicThumbnail));
    return exports;
}

NODE_API_MODULE(set_iconic_thumbnail, Init)
