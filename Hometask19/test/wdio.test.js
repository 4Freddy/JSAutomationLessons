const mainPage = require('../pageobjects/mainPage');
const gettingStartedPage = require('../pageobjects/gettingStartedPage');
const topNavigationBar = require('../pageobjects/components/topNavigationBar');
const searchWindow = require('../pageobjects/components/searchWindow');

describe('WebdriverIO website tests', () => {

    it('Should redirect to Getting Started page by "Docs" link', async()=>{
        await mainPage.navigate(`https://webdriver.io/`);
        await mainPage.goToGetStartedPage();
        await expect(gettingStartedPage.getTitleText()).toHaveTextContaining('Getting Started');
    });

    it('Should swith website theme to dark and back to light by "Theme" button', async() => {
        await mainPage.navigate(`https://webdriver.io/`);
        await topNavigationBar.switchTheme();
        await expect(mainPage.fullPage).toHaveAttributeContaining('data-theme', 'dark');
        await topNavigationBar.switchTheme();
        await expect(mainPage.fullPage).toHaveAttributeContaining('data-theme', 'light');
    });

    it('Should open "Expect" page for first search result of "expect"', async()=>{
        await mainPage.navigate(`https://webdriver.io/`);
        await topNavigationBar.openSearch();
        await searchWindow.searchByText('expect');
        await expect(browser).toHaveUrlContaining('expect-webdriverio');
    });

    it('Should play/pause video on main page', async() => {
        await mainPage.navigate(`https://webdriver.io/`);
        await mainPage.playVideo();
        await browser.pause(5000);
        await expect(mainPage.videoPlayer).toHaveElementClass('playing-mode');
        await mainPage.stopVideo();
        await expect(mainPage.videoPlayer).not.toHaveElementClass('playing-mode');
    });
})

