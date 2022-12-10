import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import ssr from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages(), ssr({
    prerender: true
  })]
})
