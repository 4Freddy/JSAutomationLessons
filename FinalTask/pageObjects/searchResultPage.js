const BasePage = require("./basePage");

class SearchResultPage extends BasePage{
    constructor(page){
    super(page);
    }

    getProductByName(name) {
        return this.page.locator(`div[title*="${name}"]`);
    }
}

module.exports = SearchResultPage;