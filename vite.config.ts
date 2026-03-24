import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/novawebsite/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
