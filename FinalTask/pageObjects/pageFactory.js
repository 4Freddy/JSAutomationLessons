const AccountPage = require("./accountPage");
const BasePage = require("./basePage");
const ChangePasswordPage = require("./changePasswordPage");
const MobileAppBanner = require("./components/mobileAppBanner");
const TopNavigationBar = require("./components/topNavigationBar");
const MainPage = require("./mainPage");
const PaymentMethodsPage = require("./paymentMethodsPage");
const WelcomePage = require("./welcomePage");
const SearchResultPage = require("./searchResultPage");
const CheckoutPage = require("./checkoutPage");
const OrderHistoryPage = require("./orderHistoryPage");
const NotificationBar = require("./components/notificationBar");
const ModifyOrderPage = require("./modifyOrderPage");

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
         this.searchResultPage = new SearchResultPage(page);
         this.checkoutPage = new CheckoutPage(page);
         this.orderHistoryPage = new OrderHistoryPage(page);
         this.notificationBar = new NotificationBar(page);
         this.modifyOrderPage = new ModifyOrderPage(page);
    }
}

module.exports = PageFactory;