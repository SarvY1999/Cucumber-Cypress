import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import Login from '../Pages/login';


Given('Navigate to the URL', ()=> {
    const login = new Login()
    login.navigate();
});

When('Enter Username and password and click on Submit', ()=> {
    const login = new Login();
    login.login();
});

Then('User should be able to see Login Successfully on page', ()=> {
    const login = new Login();
    login.verifyLogin();
})