import {expect, Page} from "@playwright/test";
import { WebActions } from "../utils/WebActions";
import { CartPageObject } from "./pageObjects/CartPageObject";


let webActions: WebActions;

export default class cartPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);

    }

    cartPageObject = new CartPageObject();

    public async Assert_Qty_Price_Dove(price:string, qty:string)
    {
        webActions.verifyElementText(this.cartPageObject.DoveItem_price, price);
        webActions.verifyElementAttribute(this.cartPageObject.DoveItem_Qty, "value", qty)
    }

    public async Assert_Added_Products(count:number)
    {
        const displayed_prods = await webActions.Get_Count_Elements(this.cartPageObject.items_listed);
        expect(count).toBe(displayed_prods);
    }

    public async Delete_Items()
    {
        await webActions.Delete_Elements(this.cartPageObject.Delete);
    }

    public async Assert_Product_EndingLetter(letter:string)
    {
       const words = await webActions.Get_Text(this.cartPageObject.EndingLetterProduct);
       const new_words = words.split(' ');
       const lastWord = new_words[new_words.length - 1];

       const lastletter = lastWord[lastWord.length -1];
       expect(letter.toLowerCase()).toBe(lastletter);
    }

    
    
}
