/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from
  // failing the test
  return false;
});

describe('My Test Suite', () => {
  beforeEach(() => {
    // Visit a specific URL
    cy.visit('https://hosted.where2getit.com/bmoharrisusbranches/index.html');
    cy.wait(4000);
    cy.get('#inputaddress').click().type('Santa Clara');
    cy.wait(2000);
    cy.get('#search_button').click();
  });

  it('Test Case 1: Total number of stores', () => {
    cy.get('.poi-item').should('be.visible');
    cy.get('.poi-item').should('have.length.greaterThan', 0).then((elements) => {
      const count = elements.length;
      cy.log(`Number of stores present are: ${count}`);
    });
  });

  it('Test Case 2: Print store names', () => {
    cy.wait(6000);
    cy.get('.desktopPhone.viewBubble').invoke('text').then((text) => {
      cy.log(`Total stores are: ${text}`);
    });
  });

  it('Test Case 3: Verify More Details Page Title', () => {
    cy.visit('https://usbranches.bmo.com/ca/cupertino/bmo126/');
    cy.title().then((title) => {
      cy.log(`Web page title: ${title}`);
    });
  });

  it('Test Case 4: Verify Get Directions Page Title', () => {
    cy.visit('https://www.google.com/maps?q=BMO+US+Bank+11111+N.+Wolfe+Rd.+Cupertino,+CA+95014');
    cy.title().then((title) => {
      cy.log(`Web page title: ${title}`);
    });
  });

  it('Test Case 5: Verify ATM Options', () => {
    cy.get(".ATMTab.inactive").click();
    cy.get('.poi-item').should('be.visible');
    cy.get('.poi-item').should('have.length.greaterThan', 0).then((elements) => {
      const count = elements.length;
      cy.log(`Number of stores present are: ${count}`);
    });
  });

  it('Test Case 6: Validate all links on shop', () => {
    cy.get('.service.fullservice.fullserviceBMOHarrisBranches').first().should('be.visible');
    cy.get('.service.wheelchair').first().should('be.visible');
    cy.get('.service.theATM').eq(2).should('be.visible');
    cy.get('.service.safetydeposit').first().should('be.visible');
  });

  it('Test Case 7: Validate all Filters', () => {
    cy.get('#toggleIMG').last().should('be.visible').click();
    cy.get('div.filter-grid div li').should('be.visible').invoke('text').then((text) => {
      cy.log(`Total stores are: ${text}`);
    });
  });
});
