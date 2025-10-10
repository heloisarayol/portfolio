import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@subdomains': path.resolve(__dirname, './src/subdomains'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks':path.resolve(__dirname, './src/hooks'),
      '@core':path.resolve(__dirname, './src/core')
    },
  }
})
