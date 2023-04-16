const AccountPage = require("./accountPage");
const BasePage = require("./basePage");
const ChangePasswordPage = require("./changePasswordPage");
const MobileAppBanner = require("./components/mobileAppBanner");
const TopNavigationBar = require("./components/topNavigationBar");
const MainPage = require("./mainPage");
const PaymentMethodsPage = require("./paymentMethodsPage");
const WelcomePage = require("./welcomePage");

class PageFactory {
    constructor(page){
        this.page = page;
         this.basePage = new BasePage(page);
         this.mainPage = new MainPage(page);
         this.welcomePage = new WelcomePage(page);
         this.mobileAppBanner = new MobileAppBanner(page);
         this.topNavigationBar = new TopNavigationBar(page);
         this.accountPage = new AccountPage(page);
         this.changePasswordPage = new ChangePasswordPage(page);
         this.paymentMethodsPage = new PaymentMethodsPage(page);
    }
}

module.exports = PageFactory;