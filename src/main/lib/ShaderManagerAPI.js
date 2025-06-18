const path = require('path');
const fs = require('fs');
const { app } = require('electron');

class ShaderManager {
  constructor() {
    this.sourcePath = path.join(app.getAppPath(), 'app/_next/static/shaders');
    this.targetPath = path.join(path.dirname(app.getAppPath()), 'shaders');
    this.shaders = new Map();
    this.initialized = false;
  }

  initialize() {
    if (this.initialized) return;

    try {
      this.extractShaders();
      this.preloadShaders();
      this.initialized = true;
    } catch (error) {
      console.error('ShaderManager initialization failed:', error);
      throw error;
    }
  }

  isReady() {
    return this.initialized;
  }

  getShader(name) {
    if (!this.initialized) {
      console.error('[ShaderManager] Attempted access before initialization');
      throw new Error('ShaderManager not initialized');
    }

    if (!this.shaders.has(name)) {
      console.group('[ShaderManager] Available Shaders:');
      this.shaders.forEach((content, shaderName) => {
        console.log(`- ${shaderName} (${content.length} chars)`);
      });
      console.groupEnd();

      console.error(`[ShaderManager] Shader "${name}" not found`);
      throw new Error(`Shader "${name}" not found`);
    }

    const content = this.shaders.get(name);
    console.group('[ShaderManager] Shader Info:');
    console.log(`Name: ${name}`);
    console.log(`Size: ${content.length} characters`);
    console.groupEnd();

    return content;
  }

  extractShaders() {
    if (!fs.existsSync(this.targetPath)) {
      fs.mkdirSync(this.targetPath, { recursive: true });
    }

    if (!fs.existsSync(this.sourcePath)) {
      throw new Error(`Source shader directory not found: ${this.sourcePath}`);
    }

    const files = fs.readdirSync(this.sourcePath);
    files.forEach(file => {
      const source = path.join(this.sourcePath, file);
      const target = path.join(this.targetPath, file);
      
      if (!fs.existsSync(target)) {
        fs.copyFileSync(source, target);
      }
    });
  }

  preloadShaders() {
    if (!fs.existsSync(this.targetPath)) {
      throw new Error(`Target shader directory not found: ${this.targetPath}`);
    }

    const files = fs.readdirSync(this.targetPath)
      .filter(file => {
        const fullPath = path.join(this.targetPath, file);
        return !fs.statSync(fullPath).isDirectory() && 
               ['.glsl', '.frag', '.vert', '.shader'].includes(path.extname(file).toLowerCase());
      });

    files.forEach(file => {
      try {
        const content = fs.readFileSync(path.join(this.targetPath, file), 'utf-8');
        this.shaders.set(file, content);
      } catch (error) {
        console.error(`Failed to load shader ${file}:`, error);
      }
    });
  }
}

const shaderManager = new ShaderManager();

try {
  shaderManager.initialize();
} catch (error) {
  console.error('Failed to initialize ShaderManager:', error);
}

module.exports = { shaderManager };