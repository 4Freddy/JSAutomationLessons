const BasePage = require("../basePage");

class TopNavigationBar extends BasePage{
    constructor(page){
        super(page);
    }

    get accountDropdown(){
        return this.page.locator('#top-user-account-dropdown');
    }

    get logoutButton(){
        return this.page.locator(".dropdown-menu a[href*='logout']");
    }

    get loginButton(){
        return this.page.locator('#top-user-account .login-button');
    }

    async logout(){
        await this.accountDropdown.click();
        await this.logoutButton.click();
    }

   
}

module.exports = TopNavigationBar;