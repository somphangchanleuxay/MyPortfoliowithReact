import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MyPortfoliowithReact/', // Replace 'repository-name' with your actual repository name
  plugins: [react()]
});