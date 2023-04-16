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

    get myAccountButton(){
        return this.page.locator(".dropdown-menu a[href*='account']");
    }

    get loginButton(){
        return this.page.locator('#top-user-account .login-button');
    }

    get storeDropdown(){
        return this.page.locator('#header #store-name');
    }

    getStoreById(id) {
        return this.page.locator(`.store-blocks-divider a[href*="S${id}"] div`);
    }

    async logout(){
        await this.accountDropdown.click();
        await this.logoutButton.click();
    }

    async changeStore(id){
        await this.storeDropdown.click();
        await this.getStoreById(id).click();
    }

   
}

module.exports = TopNavigationBar;