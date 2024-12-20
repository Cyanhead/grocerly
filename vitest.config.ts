import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: 'src/tests/setup.ts',
    exclude: ['**/node_modules/**', '**/templates/**'],
  },
});
