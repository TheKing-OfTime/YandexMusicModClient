#pragma once

#include <windows.h>
#include <napi.h>

// Initializes GDI+ once per process (safe to call multiple times)
bool InitGDIPlus();

// Sets the iconic thumbnail for a window using an image buffer (PNG, JPEG, etc.)
Napi::Value SetIconicThumbnail(const Napi::CallbackInfo& info);

// Clears the iconic thumbnail and resets attributes to display live preview
Napi::Value ClearIconicThumbnail(const Napi::CallbackInfo& info);

// Optional: clean shutdown for GDI+ (if you want to expose cleanup later)
void ShutdownGDIPlus();