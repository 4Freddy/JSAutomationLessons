const BasePage = require('../basePage');
const { Key } = require('webdriverio');

class SearchWindow extends BasePage{ 

    get searchInput(){
        return $('.DocSearch-Input');
    }

    async searchByText(text){
        await this.searchInput.setValue(text);
        await browser.pause(500);
        await browser.keys([Key.Enter]);
    }
}

module.exports = new SearchWindow();