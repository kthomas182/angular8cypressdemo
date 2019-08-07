/// <reference types="cypress" />

describe("Login", () => {
  it("should login user", () => {
    cy.visit("/login");
    cy.get('#username').type(Cypress.config('username'));
    cy.get('#password').type(Cypress.config('password'));
    cy.get('.btn-primary').click();

    cy.get('.card-header').should('contain', 'You\'re logged in with Angular 8 & JWT!!');
  });
});
