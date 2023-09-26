import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})





//convert png to svg for rotating logo
//connect Enter button to portfolio page
//insert About sections (component)
//projects component
//Contact component
//links
//resume
//images (imagekit io)