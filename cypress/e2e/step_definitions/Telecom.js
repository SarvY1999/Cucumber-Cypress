/// <reference types = "Cypress" /> 
import {Given, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Telecom from '../Pages/Telecom';

/*
    Given Navigate to the Telecom website and Click on Add Customer
    Then Select the Background check as "<bgCheck>"
    And Enter "<First Name>" "<Last Name>" "<Email>" "<Address>" "<Mobile No>" click on Submit
    And Verify if CustomerID is Generated or not
*/
Given('Navigate to the Telecom website and Click on Add Customer', ()=> {
    cy.visit('https://demo.guru99.com/telecom/index.html');
    cy.get('div>h3>a').contains('Add Customer').click();
    cy.get('.align-center').should('be.visible').wait(3000);
    cy.get('.align-center').should('contain.text', 'Add Customer');
});

Then('Select the Background check as {string}', (status)=> {
    Telecom.selectBgCheck(status);
});

And('Enter {string} {string} {string} {string} {string} click on Submit', (fname, lname, email, address, mobno)=>{
    Telecom.setUserDetails(fname, lname, email, address, mobno);
});

And('Verify if CustomerID is Generated or not', ()=> {
    Telecom.verifyCustID();
})
