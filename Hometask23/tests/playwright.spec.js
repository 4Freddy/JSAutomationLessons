// @ts-check
const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const TopNavigationBar = require('../pageObjects/components/topNavigationBar');
const SearchWindow = require('../pageObjects/components/searchWindow');

test.describe('Tests for playwright web site', async function(){

    let mainPage;
    let topNavigationBar;
    let searchWindow;

    test.beforeEach(async ({page}) =>{
        mainPage = new MainPage(page);
        topNavigationBar = new TopNavigationBar(page);
        searchWindow = new SearchWindow(page);
    });

    test('Should redirect to Install page', async({page})=>{
        await mainPage.navigate('https://playwright.dev/');
        await mainPage.goToGetStartedPage();
        await expect(page).toHaveURL(/.*intro/)
    });

    test('Should swith website theme to dark and back to light by "Theme" button', async ({ page }) => {
        await mainPage.navigate('https://playwright.dev/');
        await topNavigationBar.switchTheme();
        await expect(mainPage.fullPage).toHaveAttribute('data-theme', 'dark');
        await topNavigationBar.switchTheme();
        await expect(mainPage.fullPage).toHaveAttribute('data-theme', 'light');
      });
      
    test('Should open "Api testing" page for first search result of "api"', async({page})=>{
        await mainPage.navigate('https://playwright.dev/');
        await topNavigationBar.openSearch();
        await searchWindow.searchByText('api');
        await expect(page).toHaveURL(/.*api-testing/);
    });

    test('Should be ".NET" on navigation bar after selecting', async({page})=>{
        await mainPage.navigate('https://playwright.dev/');
        await topNavigationBar.swithToDotNetLanguage();
        await expect(page).toHaveURL(/.*dotnet/);
    });
      

})

