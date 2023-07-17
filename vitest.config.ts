import { fileURLToPath } from 'node:url';
import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
    test: {
      dir: 'tests',
      globals: true,
      environment: 'happy-dom',
      coverage: {
        reportsDirectory: 'coverage'
      },
      environmentOptions: {
        nuxt: {
          rootDir: fileURLToPath(new URL('./', import.meta.url)),
          domEnvironment: 'happy-dom',
        }
      }
    }
})