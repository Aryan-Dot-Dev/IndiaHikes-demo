import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite config handles local dev and GitHub Pages deployment paths
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'serve' ? '' : '/IndiaHikes-demo/',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))