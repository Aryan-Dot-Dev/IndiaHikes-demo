import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Consolidated Vite config for local dev and GitHub Pages deployment
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/IndiaHikes-demo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})