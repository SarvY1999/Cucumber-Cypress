export default class Telecom {
    static selectBgCheck(status){
        status === "Done" ? cy.get("#done").check({force:true}) : cy.get("#pending").check();
    };

    static setUserDetails(fname, lname, email, address, mobno){
        cy.get('#fname').type(fname);
        cy.get('#lname').type(lname);
        cy.get('#email').type(email);
        cy.get('textarea#message').type(address);
        cy.get('#telephoneno').type(mobno);
        cy.get("input[value='Submit']").click();
        cy.wait(3000);
    }

    static verifyCustID(){
        cy.get('td>b').contains('Customer ID').should('be.visible');
        cy.get('td>h3').then(($h3)=>{
            let text = $h3.text();
            cy.log('Cust Id',text);
        })
    }
}