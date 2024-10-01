const { test, expect } = require('@playwright/test');
const Loginpage = require('../pages/LoginPage');


test('login tc1', async ({ page }) => {

    const loginPage = new Loginpage(page);
    await loginPage.navigateToLoginPage();
    // await page.goto("https://www.lambdatest.com/");
    const title = await page.title();
    expect(title).toBe('Log in');
    await loginPage.enteremailid();
});


// test('test', async ({ page }) => {
//     await page.goto('https://accounts.lambdatest.com/login');
//     await page.getByPlaceholder('Email*').click();
//     await page.getByPlaceholder('Email*').fill('dddd');
//     await page.getByPlaceholder('Password*').click();
//     await page.getByPlaceholder('Password*').fill('ddddd');
//   });