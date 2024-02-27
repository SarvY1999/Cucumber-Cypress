Feature: Test Telecom

    As an user i should be able to Add Customer
    Scenario: Add Customers

    Given Navigate to the Telecom website and Click on Add Customer
    Then Select the Background check as "<bgCheck>"
    And Enter "<First Name>" "<Last Name>" "<Email>" "<Address>" "<Mobile No>"
    Then Add all the Required Details and click on Submit
    And Verify if CustomerID is Generated or not

    Examples:
        | bgCheck | First Name | Last Name | Email          | Address | Mobile No |
        | done    | Test1      | Test 2    | test@gmail.com | Pune    | 9875698401

    
    
