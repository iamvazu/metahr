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
        entryFileNames: `meta-logic-[hash].js`,
        chunkFileNames: `meta-logic-[hash].js`,
        assetFileNames: (assetInfo) => {
          return '[name]-[hash].[ext]';
        }
      }
    }
  },
  preview: {
    allowedHosts: true
  }
})
