// @ts-check
const { test, expect } = require('@playwright/test');
const cookies = require('../../data/cookie');
const users = require("../../data/users");
const PageFactory = require('../../pageObjects/pageFactory');

test.describe('Tests for payment methods', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;
    
        test.beforeEach(async ({context, page}) =>{
            await context.addCookies([cookies.banner]);
            base = new PageFactory(page);
            await base.mainPage.navigate();
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