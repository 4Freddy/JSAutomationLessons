const BasePage = require("./basePage");

class AccountPage extends BasePage{
    constructor(page){
    super(page);
    }

    get changePasswordButton(){
        return this.page.locator("a[href*='change-password']");
    }

    get paymentMethodsButton(){
        return this.page.locator("a[href*='cards']");
    }
}

module.exports = AccountPage;