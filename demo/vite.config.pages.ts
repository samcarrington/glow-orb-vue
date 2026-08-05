import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/glow-orb-vue/',
  plugins: [vue()],
  resolve: {
    alias: {
      'glow-orb-vue': fileURLToPath(
        new URL('../src/index.ts', import.meta.url)
      ),
    },
  },
  build: {
    outDir: fileURLToPath(new URL('../dist-demo', import.meta.url)),
    emptyOutDir: true,
  },
});
