const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pages/LoginPage');
const CartPage = require('../../pages/CartPage');

setDefaultTimeout(50000);

let browser, page, loginPage, cartPage;

Given('I am logged in as {string} with password {string}', async (username, password) => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigate();
    await loginPage.login(username, password);
});

When('I add the item {string} to the cart', async (itemName) => {
    const itemIndex = itemName === "Sauce Labs Backpack" ? 1 : 2;
    await cartPage.addItemToCart(itemIndex);
});

Then('I should see {string} in the cart', async (itemName) => {
    await cartPage.openCart();
    await cartPage.assertItemInCart(itemName);
    await browser.close();
});

Given('I have {string} in my cart', async (itemName) => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    const itemIndex = itemName === "Sauce Labs Backpack" ? 1 : 2;
    await cartPage.addItemToCart(itemIndex);
    await cartPage.openCart();
    await cartPage.assertItemInCart(itemName);
});

When('I remove the item {string} from the cart', async (itemName) => {
    const itemIndex = itemName === "Sauce Labs Backpack" ? 1 : 2;
    await cartPage.removeItemFromCart(itemIndex);
});

Then('I should not see {string} in the cart', async (itemName) => {
    await cartPage.assertItemNotInCart(itemName);
    await browser.close();
});