const users = require("../data/users");
const BasePage = require("./basePage");

class WelcomePage extends BasePage{
    constructor(page){
    super(page);
    }
   
    get topLoginButton(){
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

    get joinButton(){
        return this.page.locator('.btn-primary-outline.join-button');
    }

    get postalCodeField(){
        return this.page.locator('#form_user_join_postal');
    }

    get startShoppingButton(){
        return this.page.locator('#form_user_join .btn');
    }

    get firstNameRegistrationField(){
        return this.page.locator('#form_user_join_postal_first_name');
    }

    get lastNameRegistrationField(){
        return this.page.locator('#form_user_join_postal_last_name');
    }

    get emailRegistrationField(){
        return this.page.locator('#form_user_join_postal_email');
    }

    get passwordRegistrationField(){
        return this.page.locator('#form_user_join_postal_password');
    }

    get policyCheckbox(){
        return this.page.locator('input[type=checkbox]');
    }

    get signUpButton(){
        return this.page.locator('#join_postal_form .btn-primary');
    }

    get validationMessage(){
        return this.page.locator('#form_join_postal_error');
    }

    

    async login(user = users.user1){                              
        await this.topLoginButton.click();
        await this.emailField.fill(user.email);
        await this.passwordField.fill(user.password);
        await this.loginButton.click();
    }

    async openRegistrationForm(){
        await this.joinButton.click();
        await this.postalCodeField.fill('M5J 2T6');
        await this.startShoppingButton.click();
    }

    async fillRegistrationForm(user = users.user1){
        await this.firstNameRegistrationField.fill('firstname');
        await this.lastNameRegistrationField.fill('lastname');
        await this.emailRegistrationField.fill(user.email);
        await this.passwordRegistrationField.fill(user.password);
        await this.policyCheckbox.click();
    }

}

module.exports = WelcomePage;