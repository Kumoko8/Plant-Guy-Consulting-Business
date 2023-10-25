import { defineConfig } from 'vite'
import { handleContactFormSubmission } from './api/contact'; // Import your route handler

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      // Define your API routes here
      (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          handleContactFormSubmission(req, res);

        } else {
          next();
        }
      },
    ],
    port: 3000,
    open: true,
  },
})
   





