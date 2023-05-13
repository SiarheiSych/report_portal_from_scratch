Feature: Test

Scenario: Scenario name
    Given I am on the login page
    And I login with user credantions
    When I should navigate to dashboard
    Then Dashboard page is open and title is equal <title>

Examples:

| title                                  |
| Dashboard has been shared by superadmin|

Scenario: Scenario name
    Given I am on the login page
    And I login with user credantions
    When I should navigate to dashboard
    Then Should have correct number of widgets <widgets>

Examples:
|widgets |
|12      |    