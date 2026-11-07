Feature: BOE Chairperson login

  Scenario: Successful BOE login
    Given User launches application
    When User enters valid credentials
    Then Dashboard is displayed
