import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      '5832-103-240-79-246.ngrok-free.app',
    ]
  },
  plugins: [react(), tailwindcss()],
})
