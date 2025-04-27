import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/E-Commerse',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // smaller files
      },
    },
  },
  plugins: [react()],
})
