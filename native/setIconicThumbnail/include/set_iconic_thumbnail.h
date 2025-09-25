#pragma once

#include <windows.h>
#include <napi.h>

// GDI+ initialization (safe to call multiple times)
bool InitGDIPlus();

// Shutdown GDI+
void ShutdownGDIPlus();

// Set window iconic thumbnail from image buffer (PNG, JPEG, etc.)
Napi::Value SetIconicThumbnail(const Napi::CallbackInfo& info);

// Clear iconic thumbnail and revert to live preview
Napi::Value ClearIconicThumbnail(const Napi::CallbackInfo& info);

// Used as probe. For force triggering WM_DWMSENDICONICTHUMBNAIL
Napi::Value ForceIconicFlags(const Napi::CallbackInfo& info);

// Used as response to WM_DWMSENDICONICLIVEPREVIEW.
Napi::Value SetIconicLivePreviewBitmap(const Napi::CallbackInfo& info);
