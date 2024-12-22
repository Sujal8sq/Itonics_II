/// <reference types="cypress"/>

const username = Cypress.env('UserName');
const password = Cypress.env('Password');

describe("Assignment:", () => {
    beforeEach(() => {
        //Navigate to book cart site
        cy.visit("/");
    });

    it("Navigate to url & click on the 1st video & assert the URL of the video detail page is correct", () => {
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