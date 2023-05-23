const { getUrlByEnv } = require('../helpers/urls')

class BasePage {
    constructor(page){
        this.page = page;
    }

    get baseUrl(){
        return 'http://legacy.buggy.ca/';
    }

    async navigate(){
        let url = await getUrlByEnv();
        url = url ? url : this.baseUrl;
        await this.page.goto(url);
    }
    async clickOnPseudoElement(locator){
        const box = await locator.boundingBox();
        await this.page.mouse.click(box.x + box.width/2, box.y + box.height/2);
    }
}

module.exports = BasePage;