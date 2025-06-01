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
