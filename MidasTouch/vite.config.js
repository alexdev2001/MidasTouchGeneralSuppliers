import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'firebase/app': 'firebase/app/dist/index.esm.js',
      'firebase/analytics': 'firebase/analytics/dist/index.esm.js',
      'firebase/firestore': 'firebase/firestore/dist/index.esm.js',
    },
  },
});
