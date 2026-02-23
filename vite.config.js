import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "//React_Tailwind_E-Commerece_Dashboard/",
  plugins: [react(),tailwindcss()],
     
})
