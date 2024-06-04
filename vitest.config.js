import { defineVitestConfig } from '@nuxt/test-utils/config'

// You can opt in to a Nuxt environment by adding .nuxt. to the test file's name (for example, my-file.nuxt.test.ts or my-file.nuxt.spec.ts) or by adding @vitest-environment nuxt as a comment directly in the test file.

export default defineVitestConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['**/*.{js,ts,vue}'], // Include source files
      exclude: ['node_modules', 'tests'], // Exclude irrelevant folders
    },
  }
})