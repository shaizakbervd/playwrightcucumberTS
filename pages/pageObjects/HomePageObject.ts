export class HomePageObject{

    PageURL = "https://automationteststore.com";
    signIn = "//a[contains(text(), 'register')]";
    Homebtn = "//a[@class='active menu_home']";
    Dove = "//img[@alt='Dove']/parent::a";
    Dove_Products = "//div[@class='thumbnails grid row list-inline']/div";
    cart = "//*[@id='main_menu_top']/li[3]/a";
    SkinCare = "//ul[@class='nav-pills categorymenu']/child::li/child::a[contains(text(), 'Skincare')]";
    Skincare_Products = "//div[@class='thumbnails grid row list-inline']/div[@class='col-md-3 col-sm-6 col-xs-12']";
    Men_Tab = "//*[@id='categorymenu']/nav/ul/li[6]/a";
    add_cart = "//a[@class='cart']";
    Apparel = "[href='https://automationteststore.com/index.php?rt=product/category&path=68']";
    Tshirt = "ul.thumbnails > :nth-child(2) > :nth-child(1) > img";
    Tshirt_Sort = "select[id='sort']";
    Sort_DropdownTshirts = "select[id='sort']";
    products = "div[class='col-md-3 col-sm-6 col-xs-12']";
    shoes = "ul.thumbnails > :nth-child(1) > :nth-child(1) > img"

}