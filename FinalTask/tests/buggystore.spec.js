// @ts-check
const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageObjects/pageFactory');


test.describe('Tests for Buggy store web site', async function(){

    let mainUrl = 'http://legacy.buggy.ca/';
    let base;

    test.beforeEach(async ({page}) =>{
        base = new PageFactory(page);

        await base.mainPage.navigate(mainUrl);
    });

    test('Should close mobile app banner', async({page})=>{
        await base.mobileAppBanner.closeBanner();
        await expect(base.mobileAppBanner.banner).not.toBeVisible();
    });

    test('Should login on website', async ({ page }) => {
        await base.mobileAppBanner.closeBanner();
        await base.welcomePage.Login();
        await expect(base.topNavigationBar.accountDropdown).toBeVisible();
      });
      
    test('Should logout from website', async({page})=>{
        await base.mobileAppBanner.closeBanner();
        await base.welcomePage.Login();
        await base.topNavigationBar.logout();
        await expect(base.topNavigationBar.loginButton).toBeVisible();
    });

     test('Should change current store', async({page})=>{
        await base.mobileAppBanner.closeBanner();
        await base.welcomePage.Login();
        await base.topNavigationBar.changeStore('24');
        await expect(base.topNavigationBar.storeDropdown).toHaveAttribute('title', 'Walmart');
        await base.topNavigationBar.changeStore('169');
        await expect(base.topNavigationBar.storeDropdown).toHaveAttribute('title', 'Buggy');
     });
      

})

