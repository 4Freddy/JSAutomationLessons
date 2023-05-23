const BasePage = require("../basePage");

class NotificationBar extends BasePage{
    constructor(page){
        super(page);
    }
    
    get succesMessage(){
        return this.page.locator(".session-notify");
    }
   
}

module.exports = NotificationBar;