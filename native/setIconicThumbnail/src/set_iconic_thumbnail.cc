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

Napi::Value SetIconicThumbnail(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsBuffer()) {
        Napi::TypeError::New(env, "Invalid arguments. Expected: setIconicThumbnail(hwnd: number, imageBuffer: Buffer)").ThrowAsJavaScriptException();
        return env.Undefined();
    }

    HWND hwnd = reinterpret_cast<HWND>(static_cast<uintptr_t>(info[0].As<Napi::Number>().Int64Value()));

    Napi::Buffer<unsigned char> imageBuffer = info[1].As<Napi::Buffer<unsigned char>>();
    const unsigned char* imageData = imageBuffer.Data();
    size_t imageSize = imageBuffer.Length();

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

    // Use CComPtr for smart pointer management of IStream
    CComPtr<IStream> pStream;
    hr = CreateStreamOnHGlobal(NULL, TRUE, &pStream);
    if (FAILED(hr)) {
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to create stream for image data").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }

    // Write image data to the stream
    ULONG bytesWritten;
    hr = pStream->Write(imageData, static_cast<ULONG>(imageSize), &bytesWritten);
    if (FAILED(hr) || bytesWritten != imageSize) {
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to write image data to stream").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }

    // Reset stream position to the beginning
    LARGE_INTEGER li = {0};
    hr = pStream->Seek(li, STREAM_SEEK_SET, NULL);
    if (FAILED(hr)) {
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to seek stream to beginning").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }

    // Load the image from the stream into a GDI+ Image object
    Gdiplus::Bitmap* pBitmap = Gdiplus::Bitmap::FromStream(pStream);
    if (!pBitmap || pBitmap->GetLastStatus() != Gdiplus::Ok) {
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to load image from buffer. Ensure it's a valid PNG/JPEG.").ThrowAsJavaScriptException();
        return Napi::Number::New(env, pBitmap ? pBitmap->GetLastStatus() : -1); // Return GDI+ status or generic error
    }

    // Check if the bitmap is valid
    if (pBitmap->GetWidth() == 0 || pBitmap->GetHeight() == 0) {
        delete pBitmap;
        ShutdownGDIPlus();
        Napi::Error::New(env, "Loaded image has zero width or height.").ThrowAsJavaScriptException();
        return Napi::Number::New(env, E_INVALIDARG); // Generic invalid argument error
    }

    HBITMAP hBitmap = NULL;
    // For 32-bit depth, we typically use Gdiplus::Color(0,0,0,0) (transparent) or a solid color.
    // DWM documentation explicitly states 32-bit color depth.
    Gdiplus::Status gdiStatus = pBitmap->GetHBITMAP(Gdiplus::Color(0, 0, 0, 0), &hBitmap);
    if (gdiStatus != Gdiplus::Ok || hBitmap == NULL) {
        delete pBitmap;
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to convert GDI+ Bitmap to HBITMAP").ThrowAsJavaScriptException();
        return Napi::Number::New(env, gdiStatus);
    }

    // dwSITFlags can be 0 or DWM_SIT_DISPLAYFRAME (0x00000001)
    hr = DwmSetIconicThumbnail(hwnd, hBitmap, 1);


    delete pBitmap;
    if (hBitmap) {
        DeleteObject(hBitmap);
    }

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