const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pages/LoginPage');

let browser, page, loginPage;

Given('I am on the SauceDemo login page', async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I login with valid credentials {string} and {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('I should see the products page', async () => {
  await loginPage.assertProductsPage();
  await browser.close();
});

When('I login with invalid credentials {string} and {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('I should see an error message {string}', async (message) => {
  await loginPage.assertErrorMessage(message);
  await browser.close();
});
