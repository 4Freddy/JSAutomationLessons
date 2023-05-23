const BasePage = require('../basePage');

class TopNavigationBar extends BasePage{  
    get switchThemeButton(){
        return $('.toggleButton_gllP');
    }

    get searchButton(){
        return $('.DocSearch-Button');
    }

    async switchTheme(){
        await this.switchThemeButton.waitForClickable();
        await this.switchThemeButton.click();
    }

    async openSearch(){
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

}

module.exports = new TopNavigationBar();