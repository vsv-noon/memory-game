import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/styles/functions" as *;
          @use "/src/styles/variables" as *;
        `,
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
