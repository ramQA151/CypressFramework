/// <reference types="cypress" />
import 'cypress-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('My Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://www.skechers.com/store-locator.html?', { failOnStatusCode: false });
  });

  it('Test Case 1: Print options present on header', () => {
    cy.get('.nav.navbar-nav.c-navigation-global__navbar').each(($element) => {
      const textContent = $element.text();
      cy.log(textContent);
    });
  });

  it('Test Case 2: Search location', () => {
    cy.wait(3000);
    // Use cy.iframe to interact with the iframe
    cy.iframe('#locatoriframe', { timeout: 20000 }) 
      .should('be.visible') // Ensure the iframe is visible
      .find('#search_input', { timeout: 5000 }) 
      .should('be.visible') 
      .type('Santa Clara');

    cy.get('#buttonSearchTest', { timeout: 10000 }).should('be.visible');
  });
});
