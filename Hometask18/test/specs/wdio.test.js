const { Key } =require('webdriverio');

describe('WebdriverIO website tests', () => {

    it('Should redirect to Getting Started page by "Docs" link', async()=>{
        await browser.url(`https://webdriver.io/`);
        await $('.navbar__items a[href="/docs/gettingstarted"]').click();
        await expect($('//h1[text()]')).toHaveTextContaining('Getting Started');
    });

    it('Should swith website theme to dark and back to light by "Theme" button', async() => {
        await browser.url(`https://webdriver.io/`);
        await $('.toggleButton_gllP').click();
        await expect($('html')).toHaveAttributeContaining('data-theme', 'dark');
        await $('.toggleButton_gllP').click();
        await expect($('html')).toHaveAttributeContaining('data-theme', 'light');
    });

    it('Should open "Expect" page for first search result of "expect"', async()=>{
        await browser.url(`https://webdriver.io/`);
        await $('.DocSearch-Button').click();
        await $('.DocSearch-Input').setValue('expect');
        await browser.pause(500);
        await browser.keys([Key.Enter]);
        await expect(browser).toHaveUrlContaining('expect-webdriverio');
    });

    it('Should play/pause video on main page', async() => {
        await browser.url(`https://webdriver.io/`);
        const videoIframe = await $('iframe[src]');
        browser.switchToFrame(videoIframe);
        const player = await $('.html5-video-player');
        await player.scrollIntoView({block: 'end'});
        const playButton = await $('.ytp-large-play-button');
        await playButton.waitForClickable();
        await playButton.click();
        await browser.pause(5000);
        const stopButton = await $('.ytp-play-button');
        await player.moveTo();
        await expect(player).toHaveElementClass('playing-mode');
        await stopButton.click();
        await expect(player).not.toHaveElementClass('playing-mode');
    });
})

