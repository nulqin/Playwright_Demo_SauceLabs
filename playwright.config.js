const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com/v1/',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
  },
});
