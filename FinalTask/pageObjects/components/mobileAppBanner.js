const BasePage = require("../basePage");

class MobileAppBanner extends BasePage{
    constructor(page){
        super(page);
    }

    get banner(){
        return this.page.locator('div.app-banner-wrap');
    }

    get closeBannerButton(){
        return this.page.locator('.close-wrap .bclose');
    }
   
}

module.exports = MobileAppBanner;