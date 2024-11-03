import { Given, When, Then } from '@cucumber/cucumber';
import { loginpg, homepg, cartpg } from "../steps/world";

Given('I am logged into the application with username {string} and password {string}', async function (username: string, password: string) {
    await homepg.SignIn();
    await loginpg.Enter_id(username);
    await loginpg.Enter_Password(password);
    await loginpg.LoginBtn();
});

When('Navigate to the Dove items', async function () {
    await homepg.Navigate_Dove_Items();
});

When('Add the Dove items to the cart', async function () {
    await homepg.Add_Dove_Products();
});

When('Navigate to the cart', async function () {
    await homepg.Navigate_Cart();
});

Then('Assert the Price {string} and Quantity {string}', async function (price: string, quantity: string) {
    await cartpg.Assert_Qty_Price_Dove(price, quantity);
});
