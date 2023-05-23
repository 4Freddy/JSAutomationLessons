const BasePage = require("./basePage");

class MainPage extends BasePage{
    constructor(page){
    super(page);
    }
    get fullPage(){
        return this.page.locator('html');
    }
    get getStartedButton(){
        return this.page.locator('.getStarted_Sjon');
    }
    async goToGetStartedPage() {
        await this.getStartedButton.click();
    }
}

module.exports = MainPage;