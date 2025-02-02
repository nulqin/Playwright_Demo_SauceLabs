const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../pages/LoginPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');

setDefaultTimeout(50000);

let browser, page, loginPage, cartPage, checkoutPage;

Given('I am logged in as {string} with password {string} and have {string} in my cart', async (username, password, itemName) => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    await loginPage.navigate();
    await loginPage.login(username, password);
    const itemIndex = itemName === "Sauce Labs Backpack" ? 1 : 2;
    await cartPage.addItemToCart(itemIndex);
    await cartPage.openCart();
    await cartPage.assertItemInCart(itemName);
});

When('I proceed to checkout', async () => {
    await cartPage.proceedToCheckout();
});

When('I enter checkout information {string}, {string}, and {string}', async (firstName, lastName, zipCode) => {
    await checkoutPage.enterCheckoutInformation(firstName, lastName, zipCode);
});

When('I continue to the overview', async () => {
    await checkoutPage.continueToOverview();
});

When('I finish the checkout', async () => {
    await checkoutPage.finishCheckout();
});

Then('I should see the order confirmation message {string}', async (message) => {
    await checkoutPage.assertOrderConfirmation(message);
    await browser.close();
});