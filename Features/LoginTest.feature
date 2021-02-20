
Feature: Test Scenario

    @Regression
    Scenario: Test 1
        Given user navigates to webpage
        And user verifies username input field
        And user verifies password input field
        And user verifies login button
        When user provides valid credentials, and clicks on Login
        Then user navigates to webpage

    @Regression
    Scenario: Test 2
        Given user navigates to webpage
        And user verifies all three values in the listgroup
        When user verifies second list item's value is set to "List Item 2"
        Then user verifies the second list item's badge value is "6"

    @Regression
    Scenario: Test 3
        Given user navigates to webpage
        Then user verifies  "Option 1" is the default selected value in the dropdown
        And user selects "Option 3" from the dropdown

    @Regression
    Scenario: Test 4
        Given user navigates to webpage
        And user verifies that the first button is enabled
        And user verifies that the second button is disabled

    @Regression
    Scenario: Test 5
        Given user navigates to webpage
        When user clicks on a button
        Then user verifies the success message is displayed
        And  user verified that the button is now disabled

    @Regression
    Scenario: Test 6
        Given user navigates to webpage
        And   verifies that the element in row "2" column "2" is "Ventosanzap"