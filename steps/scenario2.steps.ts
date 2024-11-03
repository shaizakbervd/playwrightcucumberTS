import { Given, When, Then } from '@cucumber/cucumber';
import { loginpg, homepg, cartpg, page } from "./world";


When('Navigate to the Apparel Section and tshirts section', async function () {
    await homepg.Navigate_ApparelSection();
    await homepg.Navigate_Tshirts();
  });

When('Select the Sorting filter with value {string}', async function (option_value:String) {

    await homepg.selectSortOption(option_value);

});

When('Add the products to the cart of counts {string}', async function (count:String) {

    await homepg.Add_ProductOnCount(Number(count), 1);

});


When('Navigate to Shoes Section', async function () {
    await homepg.Navigate_ApparelSection();
    await homepg.Navigate_Shoes();
});


When('Add the products to the cart of count {string}', async function (count:String) {
    await homepg.Add_ProductOnCount(Number(count),2);

});


When('Navigate to the Cart', function () {

    homepg.Navigate_Cart()
});


Then('Assert the added products {string}', async function (number_prod:String) {

    cartpg.Assert_Added_Products(Number(number_prod));
});