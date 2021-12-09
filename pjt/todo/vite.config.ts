import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VitePWA 가져오기
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs', 
  },    
  plugins: [
    react(), 
    VitePWA({
      manifest: {
        name: '할일 App (PWA)',
        short_name: '할일',
        description: '할일 프로그레시브 웹앱',
        start_url: '.',
        display: "standalone",
        orientation: "portrait",
        theme_color: "#3f51b2",
        background_color: "#efeff4",
        icons: [
          {
            src: 'icon-192x192.png', 
            sizes: '192x192',
            type: 'image/png', },
          {
            src: 'icon-512x512.png', 
            sizes: '512x512',
            type: 'image/png', 
          },
          {
            src: 'icon-512x512-mask.png', 
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      }
    })
  ],
});
