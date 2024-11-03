export class CartPageObject{

    DoveItem_price = "//td[@class='align_right']";
    DoveItem_Qty = "//input[@id='cart_quantity76']";
    items_listed = "//div[@class='container-fluid cart-info product-list']/table[@class='table table-striped table-bordered']/tbody/tr";
    Delete = "//td[@class='align_center']/a[contains(@href, 'checkout/cart')]";
    EndingLetterProduct = "//td[@class='align_left']/a";
}