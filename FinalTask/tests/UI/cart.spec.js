// @ts-check
const { test, expect } = require('@playwright/test');
const cookies = require('../../data/cookie');
const users = require("../../data/users");
const PageFactory = require('../../pageObjects/pageFactory');

test.describe('Tests for cart', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;

        test.beforeEach(async ({context, page}) =>{
            await context.addCookies([cookies.banner]);
            base = new PageFactory(page);
            await base.mainPage.navigate();
            await base.welcomePage.login(users.user24);
        });

        test('Should add first product to cart', async({page})=>{
            await base.mainPage.addToCartButton(1,0).click();
            await base.topNavigationBar.shoppingCartButton.click();
            await expect(await base.topNavigationBar.productsInCart).toBeVisible();
        });
   
        test('Should remove product from cart', async({page})=>{
            await base.topNavigationBar.shoppingCartButton.click();
            await page.on('dialog', dialog => dialog.accept());
            await base.topNavigationBar.shoppingCartClearButton.click();
            await expect(await base.topNavigationBar.productsInCart).not.toBeVisible();
        });
});