Feature: Welcome Page

  Scenario: Displaying the welcome page on entry
    Given I am a new user entering the system
    When the application starts
    Then I should see a welcome page with a description of the application
    And I should see a clear call to action to continue

  Scenario: Navigating to the main page
    Given I am on the welcome page
    When I click the Get Started button
    Then I should be taken to the main application page
