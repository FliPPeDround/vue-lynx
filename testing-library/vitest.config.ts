import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(__dirname, 'setup.ts')],
    include: ['src/**/*.test.ts'],
    alias: {
      'vue-lynx/entry-background': path.resolve(
        __dirname,
        '../runtime/src/entry-background.ts',
      ),
      'vue-lynx': path.resolve(
        __dirname,
        '../runtime/src/index.ts',
      ),
      'vue-lynx/main-thread': path.resolve(
        __dirname,
        '../main-thread/src/entry-main.ts',
      ),
    },
  },
});
