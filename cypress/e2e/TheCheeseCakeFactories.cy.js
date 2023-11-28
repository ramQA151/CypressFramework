/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('My Test Suite', () => {
    beforeEach(() => {
      cy.visit('https://www.thecheesecakefactory.com/locations');
      cy.wait(6000);
    });
  
    it('Test Case 1: Print options present on header', () => {
      cy.get('.navbar__logo').last().should('be.visible');
      cy.log("Logo is present on home screen");
      cy.get('a.link-sm').each(($element, index, $list) => {
        const textContent = $element.text();
        cy.log(textContent);
      });
    });
  
    it.only('Test Case 2: Search location', () => {
        // Use cy.frameLoaded() for conditional wait
        cy.frameLoaded("#w2gi_wrapper")  ;
        
        // Use cy.iframe to interact with the iframe
        cy.iframe("#w2gi_wrapper").find("#search_input").type('8888888888');
      });
    });
 
  