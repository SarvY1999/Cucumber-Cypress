export default class Flight{
    
    selectFlightType(){
        cy.get(`input[value='oneway']`).check().should('be.checked');
    }

    selectPassengers(no){
        cy.get(`select[name="passCount"]`).select(no);
    }

    selectDeparting(location){
        cy.get(`select[name="fromPort"]`).select(location);
    }
};