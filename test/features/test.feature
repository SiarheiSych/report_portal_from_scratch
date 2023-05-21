Feature: Test

Scenario: FIrst simple scenario
    Given I am on the login page
    And I login with user credantions
    When I should navigate to dashboard
    Then Dashboard page is open and title is equal <title>

Examples:

| title                                  |
| Dashboard has been shared by superadmin|

Scenario: Check dash board page
    Given I am on the login page
    And I login with user credantions
    When I should navigate to dashboard
    And Should have correct number of widgets <widgets>
    And Should have correct sum of total and details <count>
    Then Should have to contain <array>

Examples:
|widgets |count|array                |
|12      |100  |PASSED,FAILED,SKIPPED|


Scenario: Check Launches page 
    Given I am on the login page
    And I login with user credantions
    When I should navigate to launches
    And Count of launches <firstCount>
    When Switch to latest launches
    And Count of launches <secondCount>
    Then Open hamburger icon and click on buttons <buttonText>
    
Examples:
|firstCount |secondCount|buttonText|
|5          |1          |Analysis  |