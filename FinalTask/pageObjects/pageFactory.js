const BasePage = require("./basePage");
const MobileAppBanner = require("./components/mobileAppBanner");
const TopNavigationBar = require("./components/topNavigationBar");
const MainPage = require("./mainPage");
const WelcomePage = require("./welcomePage");

class PageFactory {
    constructor(page){
        this.page = page;
         this.basePage = new BasePage(page);
         this.mainPage = new MainPage(page);
         this.welcomePage = new WelcomePage(page);
         this.mobileAppBanner = new MobileAppBanner(page);
         this.topNavigationBar = new TopNavigationBar(page);
    }
}

module.exports = PageFactory;