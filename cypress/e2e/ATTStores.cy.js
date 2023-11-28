/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
  describe('My Test Suite', () => {
    beforeEach(() => {
      // Visit a specific URL
      cy.visit('https://www.att.com/stores/new-jersey/westfield');
      // cy.viewport(1200, 1900);
      cy.wait(4000);
      cy.get('#search_input').click().clear().type('Santa Clara');
      cy.wait(2000);
      cy.get('#search_button').click();
    });
  
    it('Test Case 1: Total number of stores', () => {
      cy.get('.poi_box').should('be.visible');
      cy.wait(4000);
      cy.get('.fsrAbandonButton.fsrInvite__closeWrapper').click()
      cy.wait(2000);
      cy.get('.poi-item').should('have.length.greaterThan', 0).then((elements) => {
        const count = elements.length;
        cy.log(`Number of stores present are: ${count}`);
      });
    });
  }); 
  
  
  

  