/// <reference types="cypress" />

export {}; // this file needs to be a module

context("Comment form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/films/1/");
  });

  it("should add a comment", () => {
    cy.get('[data-cy="comment-form"]').within(() => {
      cy.get('[data-cy="comment-name"]')
        .click()
        .type("test name")
        .should("have.value", "test name");
      cy.get('[data-cy="comment-text"]')
        .parent()
        .click()
        .type("This is test comment");

      cy.get('[data-cy="star-rating"]').click();

      cy.get('[data-cy="comment-submit"]').click();
    });

    cy.wait(1000)
      .get('[data-cy="comments-list"]')
      .should("contain", "name: test namestar rating: 3This is test comment");
    cy.get('[data-cy="comment-name"]').should("have.value", "");

    cy.get('[data-cy="comment-text"]').parent().should("have.value", "");
  });
});
