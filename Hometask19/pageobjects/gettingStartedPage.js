const BasePage = require('./basePage');

class GettingStartedPage extends BasePage{

    async getTitleText() {
        return $('//h1[text()]');
    }

}

module.exports = new GettingStartedPage();