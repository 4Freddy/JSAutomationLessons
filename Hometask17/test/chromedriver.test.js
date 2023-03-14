const {Builder, By, Key} = require('selenium-webdriver');
const {expect} = require('chai');

describe('Chromedriver website test', function(){
    let driver;
    before(async() => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts( {implicit: 10000} );
    });

    after(async()=>{
        await driver.quit();
    });

    it('Main title text on home page should be "ChromeDriver"', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        const title = await driver.findElement(By.css('.Rn3Z1b.C9DxTc'));
        expect(await title.getText()).to.equal('ChromeDriver');
    });

    it('Main title text on extansions page should be "Chrome Extensions"', async() =>{
        await driver.get('https://chromedriver.chromium.org/home');
        const extansionPageLink = await driver.findElement(By.css("a.aJHbb.dk90Ob.jgXgSe.HlqNPb[data-url='/extensions']"));
        await extansionPageLink.click();
        const title = await driver.findElement(By.css('span.Rn3Z1b'));
        driver.executeScript("arguments[0]. setAttribute('style', 'border:2px solid red; background:yellow')", title);
        expect(await title.getText()).to.equal('Chrome Extensions');
    });

    it('First link of "driver" search results should contain "driver" word', async()=>{
        await driver.get('https://chromedriver.chromium.org/_/search');
        const serachField = await driver.findElement(By.css('input'));
        await driver.actions().move({origin: serachField}).press().sendKeys('driver').keyDown(Key.ENTER).perform();
        await driver.actions().clear();
        const searchResultFirstLink = await driver.findElement(By.css('a[data-position="1"]'));
        expect(await searchResultFirstLink.getText()).to.contain('driver');
    });

    it('Mobile emulation link should redirect to page with "/mobile-emulation" in url', async()=>{
        await driver.get('https://chromedriver.chromium.org/home');
        const additionalDropdown = await driver.findElement(By.css('a.aJHbb.dk90Ob.jgXgSe.HlqNPb[aria-haspopup="true"]:not([data-url])'));
        await driver.actions().move({origin: additionalDropdown}).perform();
        await driver.actions().clear();
        const mobEmulationLink = await driver.findElement(By.css('div.oGuwee a.aJHbb.hDrhEe.HlqNPb[data-url="/mobile-emulation"]'));
        await mobEmulationLink.click();
        expect(await driver.getCurrentUrl()).to.contain('/mobile-emulation'); 
    });

})