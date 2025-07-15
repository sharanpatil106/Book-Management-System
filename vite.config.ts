import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Book-Management-System/', // Only needed for GitHub Pages
  plugins: [react()],
})
