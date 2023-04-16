const BasePage = require("./basePage");

class MainPage extends BasePage{
    constructor(page){
    super(page);
    }

    get addToFavouriteButton(){
        return this.page.locator(".add-product-to-fav.icon-heart");
    }
    get removeFromFavouriteButton(){
        return this.page.locator(".add-product-to-fav.icon-heart-full");
    }

    async switchProductsFavourite(locator){
        for(let i = 0; i < 3; i++)
            this.clickOnPseudoElement(await locator.nth(i));
       
    }
   
}

module.exports = MainPage;