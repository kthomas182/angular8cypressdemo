/// <reference types="cypress" />

describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/login");
    cy.get('.btn');
  });
});
