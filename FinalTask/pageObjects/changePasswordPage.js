const BasePage = require("./basePage");

class ChangePasswordPage extends BasePage{
    constructor(page){
    super(page);
    }

    get newPasswordField(){
        return this.page.locator("#pass");
    }

    get confirmNewPasswordField(){
        return this.page.locator("#confrim_pass");
    }

    get changeButton(){
        return this.page.locator("button[name='update']");
    }

    async changePassword(password){
        await this.newPasswordField.fill(password);
        await this.confirmNewPasswordField.fill(password);
        await this.changeButton.click();
    }
}

module.exports = ChangePasswordPage;