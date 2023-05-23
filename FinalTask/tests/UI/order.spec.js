// @ts-check
const { test, expect } = require('@playwright/test');
const cookies = require('../../data/cookie');
const users = require("../../data/users");
const PageFactory = require('../../pageObjects/pageFactory');

test.describe('Tests for order', async () =>{
    test.describe.configure({mode: 'serial'});
        let base;

        test.beforeEach(async ({context, page}) =>{
            await context.addCookies([cookies.banner]);
            base = new PageFactory(page);
            await base.mainPage.navigate();
            await base.welcomePage.login(users.user20);
        });

        test('Should create an order with two products', async({page})=>{
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
   
        test('Should add 3$ tips for finished order', async({page})=>{
            await base.topNavigationBar.accountDropdown.click();
            await base.topNavigationBar.orderHistoryButton.click();
            await base.orderHistoryPage.viewOrderButton(0).click();
            await base.orderHistoryPage.adjustTipButton.click();
            await base.modifyOrderPage.setTipValue(3).click();
            await base.modifyOrderPage.saveButton.click();
            await expect(await base.notificationBar.succesMessage.textContent()).toContain('Tip added!');
        });
});