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

    // Creating IStream from buffer
    CComPtr<IStream> pStream;
    HRESULT hr = CreateStreamOnHGlobal(NULL, TRUE, &pStream);
    if (FAILED(hr)) return NULL;

    ULONG bytesWritten;
    hr = pStream->Write(imageData, static_cast<ULONG>(imageSize), &bytesWritten);
    if (FAILED(hr) || bytesWritten != imageSize) return NULL;

    LARGE_INTEGER li = {0};
    hr = pStream->Seek(li, STREAM_SEEK_SET, NULL);
    if (FAILED(hr)) return NULL;

    // Loading image from stream
    std::unique_ptr<Gdiplus::Bitmap> pBitmap(Gdiplus::Bitmap::FromStream(pStream));
    if (!pBitmap || pBitmap->GetLastStatus() != Gdiplus::Ok) return NULL;

    UINT width = pBitmap->GetWidth();
    UINT height = pBitmap->GetHeight();

    // Resizing.
    if (forceResize || width > (UINT)maxWidth || height > (UINT)maxHeight) {
        double scale = (std::min)((double)maxWidth / width, (double)maxHeight / height);
        UINT newWidth = static_cast<UINT>(width * scale);
        UINT newHeight = static_cast<UINT>(height * scale);

        auto pResized = std::make_unique<Gdiplus::Bitmap>(maxWidth, maxHeight, PixelFormat32bppARGB);
        Gdiplus::Graphics g(pResized.get());
        g.SetInterpolationMode(Gdiplus::InterpolationModeHighQualityBicubic);
        g.Clear(Gdiplus::Color(0,0,0,0));

        Gdiplus::Rect destRect((maxWidth - newWidth)/2, (maxHeight - newHeight)/2, newWidth, newHeight);
        g.DrawImage(pBitmap.get(), destRect);

        pBitmap.swap(pResized);
    }

    // Creating HBITMAP with alpha channel
    BITMAPINFO bmi = {0};
    bmi.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    bmi.bmiHeader.biWidth = (LONG)pBitmap->GetWidth();
    bmi.bmiHeader.biHeight = -(LONG)pBitmap->GetHeight(); // отрицательная → top-down
    bmi.bmiHeader.biPlanes = 1;
    bmi.bmiHeader.biBitCount = 32;
    bmi.bmiHeader.biCompression = BI_RGB;

    void* pvBits = nullptr;
    HBITMAP hBitmap = CreateDIBSection(NULL, &bmi, DIB_RGB_COLORS, &pvBits, NULL, 0);
    if (!hBitmap) return NULL;

    // Copying pixel data
    Gdiplus::BitmapData bmpData;
    Gdiplus::Rect rect(0, 0, pBitmap->GetWidth(), pBitmap->GetHeight());

    if (pBitmap->LockBits(&rect, Gdiplus::ImageLockModeRead, PixelFormat32bppARGB, &bmpData) == Gdiplus::Ok) {
        for (UINT y = 0; y < pBitmap->GetHeight(); y++) {
            memcpy(
                (BYTE*)pvBits + y * pBitmap->GetWidth() * 4,
                (BYTE*)bmpData.Scan0 + y * bmpData.Stride,
                pBitmap->GetWidth() * 4
            );
        }
        pBitmap->UnlockBits(&bmpData);
    }

    return hBitmap;
}

HBITMAP BufferToHBITMAP(const Napi::Buffer<unsigned char>& imageBuffer, int maxSize, bool forceResize = FALSE) {
    return BufferToHBITMAP(imageBuffer, maxSize, maxSize, forceResize);
}

Napi::Value SetIconicThumbnail(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    // Expected: hwnd, imageBuffer, maxWidth, maxHeight, flags
    if (info.Length() < 5 ||
        !info[0].IsNumber() ||
        !info[1].IsBuffer() ||
        !info[2].IsNumber() ||
        !info[3].IsNumber() ||
        !info[4].IsNumber())
    {
        Napi::TypeError::New(env,
            "Invalid arguments. Expected: setIconicThumbnail(hwnd: number, imageBuffer: Buffer, maxWidth: number, maxHeight: number, flags: number)"
        ).ThrowAsJavaScriptException();
        return env.Undefined();
    }

    HWND hwnd = reinterpret_cast<HWND>(
        static_cast<uintptr_t>(info[0].As<Napi::Number>().Int64Value())
    );

    Napi::Buffer<unsigned char> imageBuffer = info[1].As<Napi::Buffer<unsigned char>>();
    int maxWidth  = info[2].As<Napi::Number>().Int32Value();
    int maxHeight = info[3].As<Napi::Number>().Int32Value();
    UINT dwSITFlags = static_cast<UINT>(info[4].As<Napi::Number>().Int32Value());

    HRESULT hr = S_OK;

    BOOL fForceIconic = TRUE;
    BOOL fHasIconicBitmap = TRUE;

    hr = DwmSetWindowAttribute(hwnd,
                               DWMWA_FORCE_ICONIC_REPRESENTATION,
                               &fForceIconic,
                               sizeof(fForceIconic));
    if (FAILED(hr)) {
        Napi::Error::New(env, "Failed to set DWMWA_FORCE_ICONIC_REPRESENTATION").ThrowAsJavaScriptException();
        return Napi::Number::New(env, hr);
    }

    hr = DwmSetWindowAttribute(hwnd,
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

    HBITMAP hBitmap = BufferToHBITMAP(imageBuffer, maxWidth, maxHeight, TRUE);
    if (hBitmap == NULL) {
        ShutdownGDIPlus();
        Napi::Error::New(env, "Failed to convert image buffer to HBITMAP").ThrowAsJavaScriptException();
        return Napi::Number::New(env, -1);
    }

    hr = DwmSetIconicThumbnail(hwnd, hBitmap, dwSITFlags);

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

Napi::Value ForceIconicFlags(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();


    if (info.Length() < 1 || !info[0].IsNumber()) {
        Napi::TypeError::New(env, "Invalid arguments. Expected: clearIconicThumbnail(hwnd: number)").ThrowAsJavaScriptException();
        return env.Undefined();
    }


    HWND hwnd = reinterpret_cast<HWND>(static_cast<uintptr_t>(info[0].As<Napi::Number>().Int64Value()));

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


    return Napi::Number::New(env, hr); // Return S_OK if successful
}


Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "setIconicThumbnail"), Napi::Function::New(env, SetIconicThumbnail));
    exports.Set(Napi::String::New(env, "clearIconicThumbnail"), Napi::Function::New(env, ClearIconicThumbnail));
    exports.Set(Napi::String::New(env, "forceIconicFlags"), Napi::Function::New(env, ForceIconicFlags));
    return exports;
}

NODE_API_MODULE(set_iconic_thumbnail, Init)
