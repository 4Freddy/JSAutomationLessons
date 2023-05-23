const BasePage = require('./basePage');

class MainPage extends BasePage{

    get fullPage(){
        return $('html');
    }
    get getStartedButton(){
        return $('.navbar__items a[href="/docs/gettingstarted"]');
    }
    get videoiFrame(){
        return $('iframe[src]');
    }
    get videoPlayer(){
        return $('.html5-video-player');
    }
    get playBigButton(){
        return $('.ytp-large-play-button');
    }
    get playPauseButton(){
        return $('.ytp-play-button');
    }

    async goToGetStartedPage() {
        await this.getStartedButton.waitForDisplayed();
        await this.getStartedButton.click();
    }

    async playVideo(){
        await browser.switchToFrame(await this.videoiFrame);
        await this.videoPlayer.scrollIntoView({block: 'end'});
        await this.playBigButton.waitForClickable();
        await this.playBigButton.click();
    }

    async stopVideo(){
        await this.videoPlayer.moveTo();
        await this.playPauseButton.click();
    }

}

module.exports = new MainPage();