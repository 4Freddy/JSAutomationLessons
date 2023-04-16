// @ts-check
const { test, expect } = require('@playwright/test');
const users = require("../data/users");
const PageFactory = require('../pageObjects/pageFactory');

const mainUrl = 'http://legacy.buggy.ca/';

//todo list:
//1.add envs for urls

//3.??separate tests by files
//4.disable parallel run
//5.close banner from cookies 



test.describe('Tests for Buggy store web site', async () =>{

    let base;

    test.beforeEach(async ({page}) =>{
        base = new PageFactory(page);
        await base.mainPage.navigate(mainUrl);
        await base.mobileAppBanner.closeBannerButton.click();
    });

    test.skip('Should close mobile app banner', async({page})=>{  
        await expect(base.mobileAppBanner.banner).not.toBeVisible();
    });

    test.skip('Should login on website', async ({ page }) => {
        await base.welcomePage.login();
        await expect(base.topNavigationBar.accountDropdown).toBeVisible();
      });
      
    test.skip('Should logout from website', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.logout();
        await expect(base.topNavigationBar.loginButton).toBeVisible();
    });

     test.skip('Should change current store', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.changeStore('24');
        await expect(base.topNavigationBar.storeDropdown).toHaveAttribute('title', 'Walmart');
        await base.topNavigationBar.changeStore('169');
        await expect(base.topNavigationBar.storeDropdown).toHaveAttribute('title', 'Buggy');
     });

     test.skip('Should a validation message when create account with existing email', async({page})=>{
        await base.welcomePage.openRegistrationForm();
        await base.welcomePage.fillRegistrationForm();
        await base.welcomePage.signUpButton.click();
        await expect(base.welcomePage.validationMessage).toBeVisible();
     });

     test.skip('Should change a password', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.accountDropdown.click();
        await base.topNavigationBar.myAccountButton.click();
        await base.accountPage.changePasswordButton.click();
        await base.changePasswordPage.changePassword(users.user1.password);
        await expect(await base.changePasswordPage.succesMessage.textContent()).toContain('Password has been changed.');
     });

     test.skip('Should find product by name', async({page})=>{
        await base.welcomePage.login(users.user24);
        await base.topNavigationBar.findProductByText('Apple');
        await expect(await base.searchResultPage.getProductByName('Apple')).toBeVisible();  
     });


     test.skip('Should create an order', async({page})=>{

     });

     test.skip('Should modife order comment', async({page})=>{

     });

     test.skip('Should cancel an order', async({page})=>{

     });

     test.skip('Should open order history', async({page})=>{

     });

     test.skip('Should reorder existing order', async({page})=>{

     });

     test.skip('Should switch language', async({page})=>{

     });
});

test.describe.skip('Tests for payment methods', async () =>{
test.describe.configure({mode: 'serial'});
    let base;

    test.beforeEach(async ({page}) =>{
        base = new PageFactory(page);
        await base.mainPage.navigate(mainUrl);
        await base.mobileAppBanner.closeBannerButton.click();
        await base.welcomePage.login(users.user25);
        await base.topNavigationBar.accountDropdown.click();
        await base.topNavigationBar.myAccountButton.click();
        await base.accountPage.paymentMethodsButton.click();
    });

    test('Should add a new payment method', async({page})=>{

        await base.paymentMethodsPage.addNewCardButton.click();
        const cardsCountBeforeAddition = await base.paymentMethodsPage.cards.count();
        await base.paymentMethodsPage.fillNewCardForm();
        await base.paymentMethodsPage.saveCardButton.click();
        await expect(base.paymentMethodsPage.saveCardButton).not.toBeVisible();
        const cardsCounAfterAddition = await base.paymentMethodsPage.cards.count();
        await expect(cardsCounAfterAddition).toBe(cardsCountBeforeAddition+1);
     });

     test('Should change default payment method', async({page})=>{
        await base.paymentMethodsPage.makeDefaultButtonById(276).click();
        await expect(base.paymentMethodsPage.makeDefaultButtonById(276)).toBeHidden();
        await base.paymentMethodsPage.makeDefaultButtonById(274).click();
        await expect(base.paymentMethodsPage.makeDefaultButtonById(274)).toBeHidden();
     });

     test('Should remove payment method', async({page})=>{
        await expect(base.paymentMethodsPage.cards.first()).toBeVisible();
        const cardsCountBeforeDeleting = await base.paymentMethodsPage.cards.count();
        await page.on('dialog', dialog => dialog.accept());
        await base.paymentMethodsPage.removeLastCardButton.click();  
        const cardsCounAfterDeleting = await base.paymentMethodsPage.cards.count();
        await expect(cardsCountBeforeDeleting).toBe(cardsCounAfterDeleting+1);
     });
});

test.describe.skip('Tests for favourites products', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;

        test.beforeEach(async ({page}) =>{
            base = new PageFactory(page);
            await base.mainPage.navigate(mainUrl);
            await base.mobileAppBanner.closeBannerButton.click();
            await base.welcomePage.login(users.user23);
        });

        test('Should add products to favourites', async({page})=>{
            await expect(base.mainPage.addToFavouriteButton.first()).toBeVisible({timeout: 20000});
            await base.mainPage.switchProductsFavourite(await base.mainPage.addToFavouriteButton);
            await expect(await base.mainPage.removeFromFavouriteButton.first()).toBeVisible({timeout: 20000});
            await expect(await base.mainPage.removeFromFavouriteButton).toHaveCount(3);
         });
    
         test('Should remove products from favourites', async({page})=>{
            await expect(base.mainPage.removeFromFavouriteButton.first()).toBeVisible({timeout: 20000});
            await base.mainPage.switchProductsFavourite(await base.mainPage.removeFromFavouriteButton);
            await expect(await base.mainPage.removeFromFavouriteButton.first()).not.toBeVisible({timeout: 20000});
            await expect(await base.mainPage.removeFromFavouriteButton).toHaveCount(0);
         });
});

test.describe('Tests for cart', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;

        test.beforeEach(async ({page}) =>{
            base = new PageFactory(page);
            await base.mainPage.navigate(mainUrl);
            await base.mobileAppBanner.closeBannerButton.click();
            await base.welcomePage.login(users.user24);
        });

        test('Should add product to cart', async({page})=>{
            await base.mainPage.addToCartButton(1,0).click();
            await base.topNavigationBar.shoppingCartButton.click();
            await expect(await base.topNavigationBar.productsInCart).toBeVisible({timeout: 20000});
        });
   
        test('Should remove product from cart', async({page})=>{
            await base.topNavigationBar.shoppingCartButton.click();
            await page.on('dialog', dialog => dialog.accept());
            await base.topNavigationBar.shoppingCartClearButton.click();
            await expect(await base.topNavigationBar.productsInCart).not.toBeVisible({timeout: 20000});
        });
});
