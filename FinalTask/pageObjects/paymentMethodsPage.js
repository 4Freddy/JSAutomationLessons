const creditCards = require("../data/creditCards");
const BasePage = require("./basePage");

class PaymentMethodsPage extends BasePage{
    constructor(page){
    super(page);
    }

    get addNewCardButton(){
        return this.page.locator("#new-cc");
    }

    get cardNumber(){
        return this.page.locator("#new-cc-number");
    }
    get month(){
        return this.page.locator("#new-cc-exp_month");
    }
    get year(){
        return this.page.locator("#new-cc-exp_year");
    }
    get cvv(){
        return this.page.locator("#new-cc-cvc");
    }
    get billingName(){
        return this.page.locator("#new-cc-name");
    }
    get billingStreet(){
        return this.page.locator("#new-cc-billing_address");
    }
    get billingApt(){
        return this.page.locator("#new-cc-billing_apt");
    }
    get billingPostalCode(){
        return this.page.locator("#new-cc-billing_zip");
    }
    get saveCardButton(){
        return this.page.locator(".save-new-card");
    }
    get cards(){
        return this.page.locator(".my-card-block");
    }

    get removeLastCardButton(){
        return this.page.locator('button[data-id*="3"].remove-cc');
    }

    makeDefaultButtonById(id) {
        return this.page.locator(`button[data-id="${id}"].make-cc-default`);
    }

    async fillNewCardForm(){
        await this.cardNumber.fill(creditCards.card1.number);
        await this.month.selectOption(creditCards.card1.month);
        await this.year.selectOption(creditCards.card1.year);
        await this.cvv.fill(creditCards.card1.cvv);
        await this.billingName.fill(creditCards.card1.billingName);
        await this.billingStreet.fill(creditCards.card1.billingSteet);
        await this.billingApt.fill(creditCards.card1.billingApt);
        await this.billingPostalCode.fill(creditCards.card1.billingPostalCode);
    }
}

module.exports = PaymentMethodsPage;