import { Page } from "@playwright/test"
import loginPage from "./loginPage.page";
import homePage from "./homePage.page";
import cartPage from "./cartPage.page";

export class POManager{

    page: any;
    loginpage: loginPage;
    homepage: homePage;
    cartpage: cartPage;


    constructor(page:any)
    {
        this.page=page;
        this.loginpage = new loginPage(page);
        this.homepage = new homePage(page);
        this.cartpage = new cartPage(page);
    }

    GetLoginPage()
    {
        return this.loginpage;
    }

    GetHomePage()
    {
        return this.homepage;
    }

    GetCartPage()
    {
        return this.cartpage;
    }

}
module.exports={POManager}