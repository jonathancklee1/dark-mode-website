import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
})
