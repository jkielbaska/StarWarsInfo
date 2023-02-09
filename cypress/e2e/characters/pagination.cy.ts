/// <reference types="cypress" />
export {}; // this file needs to be a module

context("Aliasing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/characters/");
  });

  it("should paginate", () => {
    cy.get('[data-cy="character-list"]')
      .first()
      .should("contain", "Luke Skywalker");
    cy.get('[data-cy="character-list"]')
      .last()
      .should("contain", "Obi-Wan Kenobi");
    cy.get('[data-cy="next-page"]').click();
    cy.get('[data-cy="character-list"]')
      .first()
      .should("contain", "Anakin Skywalker");
    cy.get('[data-cy="character-list"]').last().should("contain", "Palpatine");
    cy.get('[data-cy="previous-page"]').click();
    cy.get('[data-cy="character-list"]')
      .first()
      .should("contain", "Luke Skywalker");
    cy.get('[data-cy="character-list"]')
      .last()
      .should("contain", "Obi-Wan Kenobi");
  });
});
