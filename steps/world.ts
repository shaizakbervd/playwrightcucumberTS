import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, firefox, webkit, Page } from 'playwright';
import { POManager } from '../pages/POManager';
import loginPage from '../pages/loginPage.page';
import homePage from '../pages/homePage.page';
import cartPage from '../pages/cartPage.page';

let page: Page;
let browser: Browser;
let pomanager: POManager;
let loginpg: loginPage;
let homepg: homePage;
let cartpg: cartPage;

setDefaultTimeout(60000);

// Function to launch browser based on environment variable
async function launchBrowser() {
    const browserType = process.env.BROWSER || 'chromium'; // Default to Chromium if no env is set

    if (browserType === 'firefox') {
        browser = await firefox.launch({ headless: false });
    } else if (browserType === 'webkit') {
        browser = await webkit.launch({ headless: false });
    } else {
        browser = await chromium.launch({ headless: false });
    }
    
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://automationteststore.com");

    // Initialize page objects
    pomanager = new POManager(page);
    loginpg = pomanager.GetLoginPage();
    homepg = pomanager.GetHomePage();
    cartpg = pomanager.GetCartPage();
}

Before(async () => {
    await launchBrowser();
});

After(async () => {
    await homepg.Navigate_Cart();
    await cartpg.Delete_Items();
    await browser.close();
    //await process.exit();
});

export { loginpg, homepg, cartpg, page };
