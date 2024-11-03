import fs from 'fs';
import type { Frame, FrameLocator, Locator, Page, test } from '@playwright/test';
import { BrowserContext, expect } from '@playwright/test';
import path from 'path';
import Env from './enviornment';
const waitForElement = Env.waitForElement;

export class WebActions {
    readonly page: Page;
    prod_text:any;
    text:any;
    textValue:any;
    textValueAttr:any;

    constructor(page: Page) {
        this.page = page;
    }

    async Find_OutofStock_Products(element:Locator, outofstock:string):Promise<Boolean>
    {
        const prod = await element.locator(outofstock).count();
        if(prod>0)
        {
            return true;
        }
        else{
            return false;
        }
    }

    async Add_Products_Cart_BasedOnNumber(locator:string, count:Number, tag:string, clickable:string, flag:Number)
    {
        if (flag==1)
        {
            await this.page.goto("https://automationteststore.com/index.php?rt=product/category&path=68_70&sort=p.price-ASC&limit=20");

        }
        else{
            await this.page.goto("https://automationteststore.com/index.php?rt=product/category&path=68_69&sort=p.price-DESC&limit=20");
        }
       
        const product = this.page.locator(locator);
        const count_prod = await product.count();
        console.log(count_prod);
        var counter=0;
        console.log("count got it");

        for(var i=0; i<count_prod; i++)
        {
            product.nth(i).waitFor();
            const current_prod = product.nth(i);
            const decision= await this.Find_OutofStock_Products(current_prod, tag);

            if(decision!=true)
            {
                if(counter==count)
                {
                    break;
                }
                else{
                    current_prod.locator(clickable).waitFor();
                    current_prod.locator(clickable).click();
                    counter=counter+1;
                    this.page.locator(".cart").waitFor();
                    await this.page.locator(".cart").click();
                    await this.page.locator(".maintext").waitFor();
                    await this.page.goBack();
                    await this.page.goBack();
                    await this.page.reload();
                }
                
            }
        }
        if(counter==count)
        {
            console.log("desired products clicked");
        }
        else{
            console.log("only able to click: "+counter);
        }
        counter=0;
    }

    async Get_Count_Elements(locator:string):Promise<Number>
    {
        await this.page.goto("https://automationteststore.com/index.php?rt=checkout/cart");
        const prods = this.page.locator(locator);
        const count_products = await prods.count();
        return count_products-1;
    }

    async Add_Products_with_Ending_Letter(locator:string,letter:string, cart:string, addcart:string)
    {
        var endletters:string[] = [];
        const product = this.page.locator(locator);
        const count = await product.count();

        for(var i=0; i<count; i++)
        {
            this.prod_text = await product.nth(i).locator(".prdocutname").textContent();
            const words = this.prod_text.split(' ');
            const lastWord = words[words.length - 1];

            const lastletter = lastWord[lastWord.length -1];

            if(lastletter==letter.toLowerCase())
            {
                await product.nth(i).locator(cart).click();
                await this.clickElement(addcart);

                await this.page.goBack();
                await this.page.goBack();
            }

        }

    }

    async Delete_Elements(locator:string)
    {
        const element_listed = this.page.locator(locator);
        const count_element_listed = await element_listed.count();

        var counter = 1;

        while(counter<count_element_listed+1)
        {
            element_listed.nth(0).click();
            counter=counter+1;
            await this.waitForPageNavigation("load");
        }

    }

    async Find_Desired_Elements(productLocator:string, elementtofind:string[])
    {
        var counter=0;
        var productcounter=0;
        var totalcount = elementtofind.length;

        const products = this.page.locator(productLocator);
        const count_products = await products.count();

        for(var i=0; i<count_products; i++)
        {
            const current_product = products.nth(i);

            for(const classname of elementtofind)
            {
                const desiredproductscount = await current_product.locator(classname).count();
                if(desiredproductscount>0)
                {
                    counter=counter+1;
                }
            }

            if(counter==totalcount)
            {
                productcounter=productcounter+1;
            }
            counter=0;
        }
        console.log(productcounter);
    }

    async AddSaleItems(productLocator:string, outofstock:string, sale:string, addcart:string)
    {
        const products = this.page.locator(productLocator);
        const count_products = await products.count();

        for(var i=0; i<count_products; i++)
        {
            const current_product = products.nth(i);

            const saleproduct = await current_product.locator(sale).count();
            const outofstockproduct = await current_product.locator(outofstock).count();

            if((saleproduct>0) && (outofstockproduct==0))
            {
                
                const product_cart = current_product.locator(addcart);
                await product_cart.click();
            }

        }
        
    }



    async AddStockItems(productLocator:string, outofstock:string, addcart:string)
    {
        const products = this.page.locator(productLocator);
        const count_products = await products.count();

        for(var i=0; i<count_products; i++)
        {
            const current_product = products.nth(i);

            const outofstockproduct = current_product.locator(outofstock);
            const outofstockproductcount = await outofstockproduct.count();

            if(outofstockproductcount<1)
            {
                
                const product_cart = current_product.locator(addcart);
                await product_cart.click();
            }

        }
    }
    

    async navigateToURL(url: string) {
        this.page.goto(url);
    }

    async waitForElementAttached(locator: string)  {
        await this.page.waitForSelector(locator);
    }

    async waitForPageNavigation(event: string)  {
        switch (event.toLowerCase()) {
            case 'networkidle':
                await this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: waitForElement });
                break;
            case 'load':
                await this.page.waitForNavigation({ waitUntil: 'load', timeout: waitForElement });
                break;
            case 'domcontentloaded':
                await this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: waitForElement });
        }
    }

    async delay(time: number)  {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

    async clickElement(locator: string)  {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }

    // async clickElementJS(locator: string)  {
    //     await this.waitForElementAttached(locator);
    //     await this.page.$eval(locator, (element: HTMLElement) => element.click());
    // }

    // async boundingBoxClickElement(locator: string)  {
    //     await this.delay(1000);
    //     const elementHandle = await this.page.$(locator);
    //     const box = await elementHandle.boundingBox();
    //     await this.page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    // }

    async enterElementText(locator: string, text: string)  {
        await this.waitForElementAttached(locator);
        await this.page.fill(locator, text);
    }

    async dragAndDrop(dragElementLocator: string, dropElementLocator: string)  {
        await this.waitForElementAttached(dragElementLocator);
        await this.waitForElementAttached(dropElementLocator);
        await this.page.dragAndDrop(dragElementLocator, dropElementLocator);
    }

    // async selectOptionFromDropdown(locator: string, option: string)  {
    //     await this.waitForElementAttached(locator);
    //     const selectDropDownLocator = await this.page.$(locator);
    //     selectDropDownLocator.type(option);
    // }

    async Select_DropdownFromOptions(locator:string, option: string)
    {
        await this.page.locator(locator).selectOption(option);
    }

    async keyPress(locator: string, key: string)  {
        this.page.press(locator, key);
    }

    async Get_Text(locator:string):Promise<string>
    {
        this.text = this.page.locator(locator).textContent();
        
        return this.text;
    }


    async verifyElementText(locator: string, text: string)  {
        await this.waitForElementAttached(locator);
        this.textValue = await this.page.textContent(locator);
        expect(this.textValue.trim()).toBe(text);
    }


    async verifyNewWindowUrl(context: BrowserContext, locator: string, urlText: string)  {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await this.page.click(locator)
        ])
        await newWindow.waitForLoadState("load");
        expect(newWindow.url()).toContain(urlText);
        await newWindow.close();
    }

    async verifyElementContainsText(locator: string, text: string)  {
        await this.waitForElementAttached(locator);
        await expect(this.page.locator(locator)).toContainText(text);
    }

    // async verifyJSElementValue(locator: string, text: string)  {
    //     await this.waitForElementAttached(locator);
    //     const textValue = await this.page.$eval(locator, (element: HTMLInputElement) => element.value);
    //     expect(textValue.trim()).toBe(text);
    // }

    async verifyElementAttribute(locator: string, attribute: string, value: string)  {
        await this.waitForElementAttached(locator);
        this.textValueAttr = await this.page.getAttribute(locator, attribute);
        expect(this.textValueAttr.trim()).toBe(value);
    }

    async verifyElementIsDisplayed(locator: string, errorMessage: string)  {
        await this.page.waitForSelector(locator, { state: 'visible', timeout: waitForElement })
            .catch(() => { throw new Error(errorMessage); });
    }

    async expectToBeTrue(status: boolean, errorMessage: string)  {
        expect(status, '${errorMessage}').toBe(true);
    }

    async expectToBeValue(expectedValue: string, actualValue: string, errorMessage: string)  {
        expect(expectedValue.trim(), errorMessage).toBe(actualValue);
    }

    async enterFrameElementText(frameLocator: string, locator: string, text: string)  {
        const frame= this.page.frame({name: frameLocator});
        if (frame !=null){
            // await this.waitForElementAttached(locator);
            await frame.fill(locator, text);
    } 
    else throw new Error("No such frame");
    }
}
