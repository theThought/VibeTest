Feature: Welcome Page

  As a user I want to understand the purpose of the application so that I can realise all its benefits
  As a user I want to decide when to start the application so that I have time to read the welcome page at my own pace
  As a user I want a clear call to action that enables me to move to the main part of the application

  Scenario: Displaying the welcome page on entry
    Given I am a new user entering the system
    When the application starts
    Then I should see a welcome page with a description of the application
    And I should see a clear call to action to continue

  Scenario: Accessibility compliance
    Given the welcome page is displayed
    Then the page should conform to WCAG 2.3 Level AA accessibility standards

  Scenario: Developer can edit welcome page HTML
    Given I am a developer
    When I edit the welcome page HTML
    Then my changes should be reflected when the application starts
