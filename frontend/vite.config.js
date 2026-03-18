import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { 
    proxy: { '/api': 'http://localhost:5000' },
    port: 5175
  },
  build: { 
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          three: ['three', 'postprocessing']
        }
      }
    }
  },
  preview: {
    port: 5175
  }
})
