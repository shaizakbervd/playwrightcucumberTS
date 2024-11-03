Feature: Scenario 1

Background: 
  Given I am logged into the application with username "shaiz" and password "vivov11pro"

Scenario: Select Dove items and add newest item to the cart

When Navigate to the Dove items
When Add the Dove items to the cart
When Navigate to the cart
Then Assert the Price "$7.20" and Quantity "1"