import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/render.jsx'),
      formats: ['es'],
      fileName: 'render',
    },
    rollupOptions: {
      external: ['@applura/client'],
    }
  },
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
