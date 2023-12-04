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
    cy.wait(8000);
    cy.get('#search_input').click().clear().type('Santa Clara');
    cy.wait(2000);
    cy.get('#search_button').click();
  });

  

  it('Test Case 1: Total number of stores', () => {
    cy.get('.poi_box').should('be.visible');
    cy.wait(4000);
    //cy.get('.fsrAbandonButton.fsrInvite__closeWrapper').click()
    cy.wait(2000);
    cy.get('.poi-item').should('have.length.greaterThan', 0).then((elements) => {
      const count = elements.length;
      cy.log(`Number of stores present are: ${count}`);
    });
  });

  it('Test Case 2: Check for scheduled Appointments', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.att.com/storeappointment/';

      cy.title().then((title) => {
        cy.log(`Web page title: ${title}`);
        cy.go('back');
      });
    });
  });

  it('Test Case 3: Check store info & hours', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.att.com/stores/california/santa-clara/2153?source=I-00s1000B000000L&wtExtndSource=locator-city';

      cy.title().then((title) => {
        cy.log(`Web page title: ${title}`);
        cy.go('back');
      });
    });
  });

  it('Test Case 4: Check get direction page title', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.google.com/maps?q=AT%26T+Store,+2794+el+camino+real,+Santa+Clara,+CA,+95051';

      cy.title().then((title) => {
        cy.log(`Web page title: ${title}`);
        cy.go('back');
      });
    });
  });

  it('Test Case 5: Check Shop now page title', () => {
    cy.window().then((win) => {
      win.location.href = 'https://www.att.com/buy/phones/?source=I-00s1000B000000L&wtExtndSource=locator';

      cy.title().then((title) => {
        cy.log('Web page title: ${title}');
        cy.go('back');
      });
    });
  });
});
