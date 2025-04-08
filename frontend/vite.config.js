import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // important to expose local server
    allowedHosts: [
      '3883-150-129-149-191.ngrok-free.app', // <- your ngrok URL
    ]
  },
  plugins: [react(), tailwindcss()],
})
