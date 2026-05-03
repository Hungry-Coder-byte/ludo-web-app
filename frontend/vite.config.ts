import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfig from './tsconfig.json';
import path from 'path';

export default defineConfig({
  react: {
    useTSConfigPath: true,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
});