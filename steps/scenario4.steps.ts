import { Given, When, Then } from '@cucumber/cucumber';
import { homepg, cartpg } from "./world";

When('Navigate to the Men items', async function () {
   await homepg.Navigate_Men();
  });


When('Add the products ending with letter {string}', async function (Letter:string) {

    await homepg.Add_Products_Ending_Letter(Letter);
});


Then('Assert the Product ending with letter {string}', async function (endletter:string) {

    await cartpg.Assert_Product_EndingLetter(endletter);
});