Feature: Scenario 4

Background: 
  Given I am logged into the application with username "shaiz" and password "vivov11pro"

Scenario: Add men products whose name ends with M

When Navigate to the Men items
When Add the products ending with letter "M"
When Navigate to the cart
Then Assert the Product ending with letter "M"