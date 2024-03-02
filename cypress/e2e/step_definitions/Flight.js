import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Flight from "../Pages/Flight"

const flight = new Flight();

Given('Navigate and go to Flights Section', () => {
    cy.visit('https://demo.guru99.com/test/newtours/index.php');
    cy.get('td>a').contains('Flights').click();
})

Then('Select Flight Type as One Way', () => {
    flight.selectFlightType();
});

Then('Select passengers as {string}', (no) => {
    flight.selectPassengers(no);
});

Then('Select Departing Location {string}', (location) => {
    flight.selectDeparting(location);
})

// Adding this line to trigeer build run on push
// tesing one more time