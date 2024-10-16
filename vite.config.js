import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // eslint-disable-next-line no-undef
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
})