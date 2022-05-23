
/// <reference types="cypress" />
import { When, And, Then, Given, } from 'cypress-cucumber-preprocessor/steps';
beforeEach(() => {
    cy.visit('https://dev-identifi.vercel.app/login')
});
//Scenario: Verify user can log in by entering valid email
When (`user enters email address`, () => {
    cy.get('#email').type('vanessa@abyssmail.com');
});
And (`user clicks "SIGN IN" button`, () => {
    cy.get('button[type="submit"]').click()
});
And (`user enter password`, () => {
    cy.get('#password').type("Leyte123")
});
And (`user clicks sign button`, () => {
    cy.get('[data-test="signin.button"]').click()
});
Then (`user should login successfully`, () => {
    cy.get('.chakra-text.css-1xmmf0j').contains('Daily Review').should('exist')
});
//login with unregistered email
When (`user inputs invalid email`, () => {
    cy.get('#email').type('unregisteredemail@gmail.com');
});
Then (`Message "Email address not found." appears`, () => {
    cy.get('#chakra-toast-manager-top').should('exist')
});
//Can't login using incorrect password
Given (`user enters email address`, () => {
    cy.get('#email').type('vanessa@abyssmail.com');
});
And (`user clicks "SIGN IN" button`, () => {
    cy.get('button[type="submit"]').click()
});
When (`user inputs incorrect password`, () => {
    cy.get('#password').type('incorrectpassword');
});
And (`user clicks "SIGN IN" button`, () => {
    cy.get('button[type="submit"]').click();
});   
Then (`Invalid email or password displayed`, () => {
    cy.get('#chakra-toast-manager-top').contains('Invalid email or password').should('exist');
}); 


//User can't login w/out entering an email address
Given (`user is in login page`, () => {
    cy.visit('https://dev-identifi.vercel.app/login');
});
When (`user clicks "SIGN IN" button`, () => {
    cy.get('button[type="submit"]').click();
}); 
Then (`Message "Email is required.." appears`, () => {
    cy.get('#chakra-toast-manager-top').should('exist') 
});

//Can't login w/out entering an OTP code
Given (`user is in login-code page`, () => {
    cy.visit('https://dev-identifi.vercel.app/login');

}); 
When (`user clicks "SIGN IN" button`, () => {
    cy.get('button[type="submit"]').click();

}); 
Then (`Message "Code is required." appears`, () => {
    cy.get('#chakra-toast-manager-top').should('exist') 
});


//User logs out sucessfully
Given (`user is in dashboard page`, () => {
        cy.get('#email').type('vanessa@abyssmail.com');
        cy.get('button[type="submit"]').click()
        cy.get('#password').type("Leyte123")
        cy.get('[data-test="signin.button"]').click()
        cy.get('.chakra-text.css-1xmmf0j').contains('Daily Review').should('exist')
        cy.visit('https://dev-identifi.vercel.app/dashboard');
}); 
And (`user clicks user name`, () => {
        cy.get('#menu-button-user-menu').click();


}); 
When (`user choose logs out`, () => {
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)').click();


}); 
Then (`user should be logs out successfully`, () => {
    cy.url().should('eq', `https://dev-identifi.vercel.app/login`);
}); 