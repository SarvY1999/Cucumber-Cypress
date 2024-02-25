export default class Login{
    navigate(){
        cy.visit('https://demo.guru99.com/test/newtours/index.php');
    }

    login(){
        cy.get("input[name='userName']").click().type('Admin');
        cy.get("input[name='password']").click().type('Admin');
        cy.get("input[name='submit']").click();
    }
    
    verifyLogin(){
        cy.get('tbody>tr>td>h3').should('have.text', 'Login Successfully');
    }
}