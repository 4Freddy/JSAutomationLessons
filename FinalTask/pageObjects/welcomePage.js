const BasePage = require("./basePage");

class WelcomePage extends BasePage{
    constructor(page){
    super(page);
    }
   
    get openLoginFormButton(){
        return this.page.locator('.btn-primary.login-button');
    }

    get emailField(){
        return this.page.locator('#form_user_login_email');
    }

    get passwordField(){
        return this.page.locator('#form_user_login_pw');
    }

    get loginButton(){
        return this.page.locator('#form_user_login .btn-primary');
    }

    async Login(){
        await this.openLoginFormButton.click();
        await this.emailField.fill('4freddy@mail.ru');
        await this.passwordField.fill('password2');
        await this.loginButton.click();
    }
}

module.exports = WelcomePage;