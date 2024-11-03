import { expect, Page } from "@playwright/test";
import Env from "../utils/enviornment";
import { WebActions } from "../utils/WebActions";
import { LoginPageObjects } from "./pageObjects/loginPageObjects";

let webActions: WebActions;

export default class loginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    loginPageObjects = new LoginPageObjects();

   

    public async Enter_id(username:any) {
        await webActions.enterElementText(this.loginPageObjects.UserName,username);
    }

    public async Enter_Password(pwd:any) {
        await webActions.enterElementText(this.loginPageObjects.Password, pwd);
    }


    public async LoginBtn(){
        await webActions.clickElement(this.loginPageObjects.Loginbtn);
    }
    
}

