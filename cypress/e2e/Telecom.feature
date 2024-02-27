Feature: Test Telecom

    As an user i should be able to Add Customer
    Scenario Outline: Add Customers

    Given Navigate to the Telecom website and Click on Add Customer
    Then Select the Background check as "<bgCheck>"
    And Enter "<FirstName>" "<LastName>" "<Email>" "<Address>" "<MobileNo>" click on Submit
    And Verify if CustomerID is Generated or not

    Examples:
        | bgCheck | FirstName | LastName| Email          | Address | MobileNo   |
        | Done    | Test First Name    | Test last Name   | test@gmail.com | Pune    | 9875698401 |

    
    
