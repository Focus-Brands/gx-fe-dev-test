import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Keep Vite's generated dependency cache out of node_modules. Some managed
  // macOS environments allow package reads but block generated writes there.
  cacheDir: '.cache/vite',
  plugins: [react(), tailwindcss()],
});
