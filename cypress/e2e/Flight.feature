Feature: Select Flight

    As a user I want to fill Flight details
    Scenario: Fill Flight details successfully

    Given Navigate and go to Flights Section
    Then Select Flight Type as One Way
    Then Select passengers as "3"
    Then Select Departing Location "London"