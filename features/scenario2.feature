Feature: Scenario 2

Background: 
  Given I am logged into the application with username "shaiz" and password "vivov11pro"

Scenario: Navigate to apparels section sorting tshirts and adding top3 lowest value products then add highest valued shoe product

When Navigate to the Apparel Section and tshirts section
When Select the Sorting filter with value "p.price-ASC"
When Add the products to the cart of counts "3"
When Navigate to Shoes Section
When Select the Sorting filter with value "p.price-DESC"
When Add the products to the cart of count "1"
When Navigate to the Cart
Then Assert the added products "3"