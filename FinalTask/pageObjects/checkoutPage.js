const BasePage = require("./basePage");

class CheckoutPage extends BasePage{
    constructor(page){
    super(page);
    }

    get selectAddressButton(){
        return this.page.locator(".mr20.ops");
    }
    get deliveryDateDropdown(){
        return this.page.locator(".choose-delivery-default");
    }
    deliveryDate(id){
        return this.page.locator(".delivery-date-item").nth(id);
    }
    get deliveryTimeDropdown(){
        return this.page.locator(".choose-time-block");
    }
    deliveryTime(id){
        return this.page.locator(".time_item").nth(id);
    }
    get nextButton(){
        return this.page.locator("#proceed_to_payment.bottom-button");
    }
    get palceOrderButton(){
        return this.page.locator(".payment-do-btn");
    }

    async fillDeliveryForm(){
        await this.selectAddressButton.click();
        await this.deliveryDateDropdown.click();
        await this.deliveryDate(1).click();
        await this.deliveryTimeDropdown.click();
        await this.deliveryTime(1).click();
    }
   
   
}

module.exports = CheckoutPage;