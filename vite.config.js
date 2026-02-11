import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/crunch-navigation/', // must match repo name for GitHub Pages
  plugins: [react()],
});
