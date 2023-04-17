const BasePage = require("./basePage");

class ModifyOrderPage extends BasePage{
    constructor(page){
    super(page);
    }

    get commentField(){
        return this.page.locator("textarea[name='comment']");
    }

    get saveButton(){
        return this.page.locator('.green-button');
    }

    get cancelOrderButton(){
        return this.page.locator('form .red-button');
    }

    setTipValue(value){
        return this.page.locator(`input[value="${value}"]`);
    }
   
}

module.exports = ModifyOrderPage;