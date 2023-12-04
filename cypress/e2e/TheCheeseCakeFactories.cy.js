/// <reference types="cypress" />
import 'cypress-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('My Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://www.thecheesecakefactory.com/locations');
    cy.iframe('#locationFinderBrandifyIframe')
      .should('be.visible') 
      .find('#search_input') 
      .should('be.visible') 
      .clear()
      .type('Santa Clara')
      .type('{enter}');
    cy.wait(5000);
  });

  it('Test Case 1: Print options present on header to console', () => {
    cy.get('.navbar__logo').last().should('be.visible');
    cy.log("Logo is present on the home screen");
    cy.get('a.link-sm').each(($element, index, $list) => {
      const textContent = $element.text();
      cy.log(textContent);
    });
  });

  it('Test Case 2: Search location within iframe', () => {
    cy.iframe('#locationFinderBrandifyIframe', { timeout: 20000 })
      .should('be.visible') 
      .find('#search_input') 
      .should('be.visible') 
      .clear()
      .type('Santa Clara')
      .type('{enter}');
  });

  it('Test Case 3: Print Total store count', () => {
    cy.iframe('#locationFinderBrandifyIframe', { timeout: 20000 })
      .should('be.visible')
      .find('.card-front-inner')
      .should('be.visible')
      .should('have.length.greaterThan', 0)
      .then((elements) => {
        const count = elements.length;
        cy.log(`Number of stores present are: ${count}`);
      });
  });

  it('Test Case 4: Check make a reservation page title', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.thecheesecakefactory.com/reservations/schedule/santa-clara-ca/';

      cy.title().then((title) => {
        cy.log("Web page title: ${title}");
        cy.go('back');
      });
    });
  });

  it('Test Case 5: Check rewards page title', () => {
    cy.window().then((win) => {
      win.location.href = 'http://www.thecheesecakefactory.com/rewards';

      cy.title().then((title) => {
        cy.log("Web page title: ${title}");
        cy.go('back');
      });
    });
  });

  it('Test Case 6: Check Order pickup page title', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.thecheesecakefactory.com/locations/santa-clara-ca/menu/';

      cy.title().then((title) => {
        cy.log("Web page title: ${title}");
        cy.go('back');
      });
    });
  });

  it('Test Case 7: Order Delivery page title', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.doordash.com/store/the-cheesecake-factory-santa-clara-170/?amp;utm_medium=website&amp;utm_source=partner-link&utm_campaign=32415';

      cy.title().then((title) => {
        cy.log("Web page title: ${title}");
        cy.wait(5000);
        cy.go('back');
      });
    });
  });

  it('Test Case 8: Verify get directions page title', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.google.com/maps?q=the+cheesecake+factory,3041+stevens+creek+boulevard,santa+clara,CA+95050';
      
      cy.title().then((title) => {
        cy.log(`Web page title: ${title}`);
        cy.wait(5000);
        cy.go('back');
      });
    });
  });

  
});
