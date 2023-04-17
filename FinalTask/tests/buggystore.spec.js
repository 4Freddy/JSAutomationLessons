// @ts-check
const { test, expect } = require('@playwright/test');
const users = require("../data/users");
const PageFactory = require('../pageObjects/pageFactory');

const mainUrl = 'http://legacy.buggy.ca/';

//todo list:
//1.add envs for urls
//2.set timeout from config
//5.close banner from cookies 
//6.add api tests
//7.??add allure report



test.describe('Tests for Buggy store web site', async () =>{

    let base;

    test.beforeEach(async ({page}) =>{
        base = new PageFactory(page);
        await base.mainPage.navigate(mainUrl);
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

     test('Should change current store', async({page})=>{
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

     test('Should change a password', async({page})=>{
        await base.welcomePage.login();
        await base.topNavigationBar.accountDropdown.click();
        await base.topNavigationBar.myAccountButton.click();
        await base.accountPage.changePasswordButton.click();
        await base.changePasswordPage.changePassword(users.user1.password);
        await expect(await base.notificationBar.succesMessage.textContent()).toContain('Password has been changed.');
     });

     test('Should find product by name', async({page})=>{
        await base.welcomePage.login(users.user24);
        await base.topNavigationBar.findProductByText('Apple');
        await expect(await base.searchResultPage.getProductByName('Apple')).toBeVisible();  
     });

     test('Should open order history', async({page})=>{
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

test.describe('Tests for payment methods', async () =>{
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

test.describe('Tests for favourites products', async () =>{
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

test.describe('Tests for order', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;

        test.beforeEach(async ({page}) =>{
            base = new PageFactory(page);
            await base.mainPage.navigate(mainUrl);
            await base.mobileAppBanner.closeBannerButton.click();
            await base.welcomePage.login(users.user20);
        });

        test('Should create an order', async({page})=>{
            await base.mainPage.addToCartButton(1,0).click();
            await base.mainPage.addToCartButton(2,0).click();
            await base.topNavigationBar.shoppingCartButton.click();
            await base.topNavigationBar.checkoutNowButton.click();
            await base.checkoutPage.fillDeliveryForm();
            await base.checkoutPage.nextButton.click();
            await base.checkoutPage.palceOrderButton.click();
            await expect(page).toHaveURL(/.*success/);
        });
   
        test('Should modife order comment', async({page})=>{
            await base.topNavigationBar.accountDropdown.click();
            await base.topNavigationBar.orderHistoryButton.click();
            await base.orderHistoryPage.viewOrderButton(0).click();
            await base.orderHistoryPage.editCommentButton.click();
            await base.modifyOrderPage.commentField.fill('test text comment');
            await base.modifyOrderPage.saveButton.click();
            await expect(await base.notificationBar.succesMessage.textContent()).toContain('Order Comment Updated');
        });
   
        test('Should cancel an order', async({page})=>{
            await base.topNavigationBar.accountDropdown.click();
            await base.topNavigationBar.orderHistoryButton.click();
            await base.orderHistoryPage.viewOrderButton(0).click();
            await base.orderHistoryPage.cancelOrderButton.click();
            await base.modifyOrderPage.cancelOrderButton.click();
            await expect(await base.notificationBar.succesMessage.textContent()).toContain('was canceled');
        });
   
        test('Should add tips for finished order', async({page})=>{
            await base.topNavigationBar.accountDropdown.click();
            await base.topNavigationBar.orderHistoryButton.click();
            await base.orderHistoryPage.viewOrderButton(0).click();
            await base.orderHistoryPage.adjustTipButton.click();
            await base.modifyOrderPage.setTipValue(3).click();
            await base.modifyOrderPage.saveButton.click();
            await expect(await base.notificationBar.succesMessage.textContent()).toContain('Tip added!');
        });
});


