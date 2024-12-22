/// <reference types="cypress"/>

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

describe("Assignment:", () => {
    beforeEach(() => {
        //Navigate to book cart site
        cy.visit("/");
    });

    it("Assert if the username and passed username are equal", () => {
        //Complete the login process
        cy.xpath('//span[contains(text(),"Login")]').click();
        cy.get('#mat-mdc-form-field-label-0').type(username);
        cy.get('#mat-input-1').type(password);
        cy.xpath('(//span[contains(text(),"Login")])[2]').click();

        //Assert the username displayed and input username matches or not
        cy.xpath(`//span[contains(text(),"${username}")]`).invoke('text').then((text) => {
            let verifyUserName = text.trim();
            cy.log(`This is result ${verifyUserName}`);
            expect(`${verifyUserName}`).to.equal(username);
        })
    })
})
