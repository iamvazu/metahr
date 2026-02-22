import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        entryFileNames: `meta-logic.js`,
        chunkFileNames: `meta-logic.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'meta-styles.css';
          return '[name].[ext]';
        }
      }
    }
  },
  preview: {
    allowedHosts: true
  }
})
