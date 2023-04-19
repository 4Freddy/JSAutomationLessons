// @ts-check
const { test, expect } = require('@playwright/test');
const cookies = require('../../data/cookie');
const users = require("../../data/users");
const PageFactory = require('../../pageObjects/pageFactory');

test.describe('Tests for favourites products', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;

        test.beforeEach(async ({context, page}) =>{
            await context.addCookies([cookies.banner]);
            base = new PageFactory(page);
            await base.mainPage.navigate();
            await base.welcomePage.login(users.user23);
        });

        test('Should add first three products to favourites', async({page})=>{
            await expect(base.mainPage.addToFavouriteButton.first()).toBeVisible();
            await base.mainPage.switchProductsFavourite(await base.mainPage.addToFavouriteButton);
            await expect(await base.mainPage.removeFromFavouriteButton.first()).toBeVisible();
            await expect(await base.mainPage.removeFromFavouriteButton).toHaveCount(3);
         });
    
         test('Should remove first three products from favourites', async({page})=>{
            await expect(base.mainPage.removeFromFavouriteButton.first()).toBeVisible();
            await base.mainPage.switchProductsFavourite(await base.mainPage.removeFromFavouriteButton);
            await expect(await base.mainPage.removeFromFavouriteButton.first()).not.toBeVisible();
            await expect(await base.mainPage.removeFromFavouriteButton).toHaveCount(0);
         });
});