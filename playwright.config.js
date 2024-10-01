// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: 'allure-playwright',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
    {
      name: 'chrome',
      use: {
        baseURL: 'https://accounts.lambdatest.com',
         channel: 'chrome' },
    },
  ],
});
