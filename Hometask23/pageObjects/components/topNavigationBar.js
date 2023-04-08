const BasePage = require("../basePage");

class TopNavigationBar extends BasePage{
    constructor(page){
        super(page);
    }

    get switchThemeButton(){
        return this.page.locator('.toggleButton_gllP');
    }

    get searchButton(){
        return this.page.locator('.DocSearch-Button');
    }

    get languageDropdown(){
        return this.page.locator('.navbar__item.dropdown');
    }

    get dotNetLanguage(){
        return this.page.locator('a[data-language-prefix="/dotnet/"]');
    }

    async switchTheme(){
        await this.switchThemeButton.click();
    }

    async openSearch(){
        await this.searchButton.click();
    }

    async swithToDotNetLanguage(){
        await this.languageDropdown.hover();
        await this.dotNetLanguage.click();
    }
}

module.exports = TopNavigationBar;