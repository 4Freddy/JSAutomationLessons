const BasePage = require("../basePage");

class SearchWindow extends BasePage{
    constructor(page){
        super(page);
    }
    get searchInput(){
        return this.page.locator('.DocSearch-Input');
    }

    get firstSearchResult(){
        return this.page.locator('#docsearch-item-0');
    }

    async searchByText(text){
        await this.searchInput.fill(text);
        await this.firstSearchResult.click();
    }
}

module.exports = SearchWindow;