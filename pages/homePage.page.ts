import {expect, Page} from "@playwright/test";
import { WebActions } from "../utils/WebActions";
import { HomePageObject } from "./pageObjects/HomePageObject";


let webActions: WebActions;

export default class homePage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);

    }

    homePageObject = new HomePageObject();

    public async goTo(){
        await webActions.navigateToURL(this.homePageObject.PageURL);
    }

    public async SignIn() {
    
      await webActions.clickElement(this.homePageObject.signIn)
    }

    public async Navigate_Dove_Items()
    {
      await webActions.clickElement(this.homePageObject.Homebtn);
      await webActions.clickElement(this.homePageObject.Dove)
    }

    public async Navigate_SkinCare()
    {
      await webActions.clickElement(this.homePageObject.SkinCare);
    }

    public async Navigate_Men()
    {
      await webActions.clickElement(this.homePageObject.Men_Tab);
    }

    public async Add_Products_Ending_Letter(letter:string)
    {
      await webActions.Add_Products_with_Ending_Letter(this.homePageObject.Skincare_Products,letter, ".productcart", this.homePageObject.add_cart);

    }

    public async Count_Skincare_SaleItems()
    {
      console.log("Skin care items on sale : ");
      await webActions.Find_Desired_Elements(this.homePageObject.Skincare_Products, ['.sale']);

      console.log("Skin care items on sale and outofstock : ");
      await webActions.Find_Desired_Elements(this.homePageObject.Skincare_Products, ['.sale', '.nostock']);
    }

    public async Add_Saleitem_SkinCare()
    {
      await webActions.AddSaleItems(this.homePageObject.Skincare_Products, ".nostock", ".sale", ".productcart");

    }

    public async Add_Dove_Products()
    {
      await webActions.AddStockItems(this.homePageObject.Dove_Products, '.nostock', '.productcart');
    }

    public async Navigate_Cart()
    {
      await webActions.clickElement(this.homePageObject.cart);
    }

    public async Navigate_ApparelSection()
    {
      await webActions.clickElement(this.homePageObject.Apparel);
    }

    public async Navigate_Tshirts()
    {
      await webActions.clickElement(this.homePageObject.Tshirt);
    }

    async selectSortOption(option:any) {
      await webActions.Select_DropdownFromOptions(this.homePageObject.Sort_DropdownTshirts, option);
    }

    async Add_ProductOnCount(count:Number, flag:Number)
    {
      await webActions.Add_Products_Cart_BasedOnNumber(this.homePageObject.products, count, ".nostock", ".productcart", flag)
    }

    async Navigate_Shoes()
    {
      await webActions.clickElement(this.homePageObject.shoes);
    }

   

    // public async categ_1(){

    //     await webActions.clickElement(this.homePageObject.Fish_btn);
    // }

    // public async prod_1(){
    //     await webActions.clickElement(this.homePageObject.prod_1);
    
    // }

    // public async check_text(text){
    //     const locator = this.page.locator(this.homePageObject.larg_fish);
    //     await expect(locator).toContainText(text);
    // }

    

    // public async add_to_cart(){
    //     await webActions.clickElement(this.homePageObject.add_to_cart);
    // }

    
    //   async clickLoginOrRegisterLink() {
    //     await this.page.getByRole('link', { name: 'Login or register' }).click();
    //   }
    
    //   async clickHomeLink() {
    //     await this.page.getByRole('link', { name: 'Home', exact: true }).click();
    //   }
    
    //   async clickProductLink(productName) {
    //     await this.page.getByRole('link', { name: productName }).click();
    //   }

    //   async enterLoginName(loginName) {
    //     const loginNameInput = await this.page.locator('#loginFrm_loginname');
    //     await loginNameInput.click();
    //     await loginNameInput.fill(loginName);
    //   }
    
    //   async enterPassword(password) {
    //     const passwordInput = await this.page.locator('#loginFrm_password');
    //     await passwordInput.click();
    //     await passwordInput.fill(password);
    //   }
    
    //   async clickLoginButton() {
    //     await this.page.getByRole('button', { name: ' Login' }).click();
    //   }

    //   async clickWelcomeBackLink(userName) {
    //     await this.page.getByRole('link', { name: `Welcome back ${userName}` }).click();
    //   }
    
    //   async getHeaderText() {
    //     const headerContainer = await this.page.locator('//*[@id="header_container"]');
    //     return await headerContainer.textContent();
    //   }
    
    //   async clickCartLink() {
    //     await this.page.getByRole('link', { name: ' Cart' }).click();
    //   }
    

    //   async getTotalsTableText() {
    //     const totalsTable = await this.page.locator('//*[@id="totals_table"]');
    //     return await totalsTable.textContent();
    //   }
    
    
    
    
    //   async clickAddToCartLink() {
    //     await this.page.getByRole('link', { name: ' Add to Cart' }).click();
    //   }

    //   async selectSizeOption(option) {
    //     await this.page.getByRole('option', { name: option }).click();
    //   }

    //   async clickCategoryLink(categoryName) {
    //     await this.page.getByRole('link', { name: categoryName }).click();
    //   }
      
    //   async clearProductQuantity() {
    //     await this.page.locator('#product_quantity').clear();
    //   }
    
    //   async fillProductQuantity(quantity) {
    //     await this.page.locator('#product_quantity').fill(quantity);
    //   }
    
    //   async pressEnterKey() {
    //     await this.page.locator('#product_quantity').press('Enter');
    //   }

    //   async getSalesItemCount() {
    //     const salesItems = await this.page.locator('.thumbnail > .sale').count();
    //     return salesItems;
    //   }
    
    //   async getOutOfStockItemCount() {
    //     const outOfStockItems = await this.page.locator('.thumbnail > .pricetag > .nostock').count();
    //     return outOfStockItems;
    //   }

    //   async getCartItemCount() {
    //     const cartItemCount = await this.page.locator('.dropdown-toggle > .label').textContent();
    //     return cartItemCount;
    //   }
    
    //   async getTotalPrice() {
    //     const totalPrice = await this.page.locator(':nth-child(3) > :nth-child(2) > .bold').textContent();
    //     return totalPrice;
    //   }
    
    
}
