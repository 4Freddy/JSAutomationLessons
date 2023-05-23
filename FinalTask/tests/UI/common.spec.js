// @ts-check
const { test, expect } = require('@playwright/test');
const users = require("../../data/users");
const PageFactory = require('../../pageObjects/pageFactory');

//todo list:
//6.add api tests


test.describe('Commot test for Buggy store web site', async () =>{

    let base;

    test.beforeEach(async ({page}) =>{
        base = new PageFactory(page);
        await base.mainPage.navigate();
        await base.mobileAppBanner.closeBannerButton.click();
    });

    test('Should close mobile app banner', async({page})=>{  
        await expect(base.mobileAppBanner.banner).not.toBeVisible();
    });

    test('Should login on website', async ({ page }) => {
        await base.welcomePage.login();
        await expect(base.topNavigationBar.accountDropdown).toBeVisible();
      });
      
    test('Should logout from website', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.logout();
        await expect(base.topNavigationBar.loginButton).toBeVisible();
    });

     test('Should change current store from Buggy to Walmart and back', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.changeStore('24');
        await expect(base.topNavigationBar.storeDropdown).toHaveAttribute('title', 'Walmart');
        await base.topNavigationBar.changeStore('169');
        await expect(base.topNavigationBar.storeDropdown).toHaveAttribute('title', 'Buggy');
     });

     test('Should a validation message when create account with existing email', async({page})=>{
        await base.welcomePage.openRegistrationForm();
        await base.welcomePage.fillRegistrationForm();
        await base.welcomePage.signUpButton.click();
        await expect(base.welcomePage.validationMessage).toBeVisible();
     });

     test('Should change password for current account', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.accountDropdown.click();
        await base.topNavigationBar.myAccountButton.click();
        await base.accountPage.changePasswordButton.click();
        await base.changePasswordPage.changePassword(users.user1.password);
        await expect(await base.notificationBar.succesMessage.textContent()).toContain('Password has been changed.');
     });

     test('Should find product "Apple" by name', async({page})=>{
        await base.welcomePage.login(users.user24);
        await base.topNavigationBar.findProductByText('Apple');
        await expect(await base.searchResultPage.getProductByName('Apple')).toBeVisible();  
     });

     test('Should open order history for current user', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.accountDropdown.click();
        await base.topNavigationBar.orderHistoryButton.click();
        await expect(page).toHaveURL(/.*history/);
    });


     test('Should switch language', async({page})=>{
        await base.welcomePage.login(users.user19);
        await base.topNavigationBar.switchLanguage();
        await expect(page).toHaveURL(/.*fr/);
        await base.topNavigationBar.switchLanguage();
        await expect(page).not.toHaveURL(/.*fr/);
     });
});










