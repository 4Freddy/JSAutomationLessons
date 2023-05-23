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

    addToCartButton(id, row){
        return this.page.locator(`.product-num-${id} button`).nth(row);
    }

    async switchProductsFavourite(locator){
        for(let i = 0; i < 3; i++)
            this.clickOnPseudoElement(await locator.nth(i));
       
    }
   
}

module.exports = MainPage;