const BasePage = require("./basePage");

class OrderHistoryPage extends BasePage{
    constructor(page){
    super(page);
    }

    viewOrderButton(id){
        return this.page.locator("a[href*='order_id']").nth(id);
    }

    get editCommentButton(){
        return this.page.locator('#mod_comment_order button');
    }

    get cancelOrderButton(){
        return this.page.locator('#mod_cancel_order button');
    }

    get adjustTipButton(){
        return this.page.locator('#mod_tip_order button');
    }
   
}

module.exports = OrderHistoryPage;