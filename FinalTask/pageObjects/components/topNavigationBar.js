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

    get orderHistoryButton(){
        return this.page.locator(".dropdown-menu a[href*='history']");
    }

    get loginButton(){
        return this.page.locator('#top-user-account .login-button');
    }

    get storeDropdown(){
        return this.page.locator('#header #store-name');
    }

    get searchInput(){
        return this.page.locator('#instant-search');
    }

    getStoreById(id) {
        return this.page.locator(`.store-blocks-divider a[href*="S${id}"] div`);
    }

    get shoppingCartButton(){
        return this.page.locator('#shopping-cart');
    }

    get shoppingCartClearButton(){
        return this.page.locator('.empty-shopping-cart');
    }

    get productsInCart(){
        return this.page.locator('.cart-product');
    }

    get checkoutNowButton(){
        return this.page.locator('#checkout-now-button');
    }

    get translateMenuButton(){
        return this.page.locator('img.translate-button');
    }

    get closeTranslateMenuButton(){
        return this.page.locator('#language-switcher .icon-close-thin');
    }

    get switchLangButton(){
        return this.page.locator('#language_form a');
    }

    async switchLanguage(){
        await this.translateMenuButton.click();
        await this.closeTranslateMenuButton.click();
        await this.translateMenuButton.click();
        await this.switchLangButton.click(); 
    }

    async logout(){
        await this.accountDropdown.click();
        await this.logoutButton.click();
    }

    async changeStore(id){
        await this.storeDropdown.click();
        await this.getStoreById(id).click();
    }

    async findProductByText(text){
        await this.searchInput.click();
        await this.searchInput.fill(text);
        await this.page.keyboard.press('Enter');
    }

   
}

module.exports = TopNavigationBar;