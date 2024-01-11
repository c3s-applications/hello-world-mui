import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/c3s-apps/hello-world-mui/",
  plugins: [react()],
})
