import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 important for custom domain (like tbvinfra.com)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
