module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  ignorePatterns: ['node_modules', '.nuxt', 'dist', 'output'],
}
