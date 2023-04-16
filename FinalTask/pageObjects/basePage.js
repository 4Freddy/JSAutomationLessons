class BasePage {
    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }
    async clickOnPseudoElement(locator){
        const box = await locator.boundingBox();
        await this.page.mouse.click(box.x + box.width/2, box.y + box.height/2);
    }
}

module.exports = BasePage;