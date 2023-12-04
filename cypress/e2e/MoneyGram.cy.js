/// <reference types="cypress" />
import 'cypress-iframe';
import 'cypress-shadow-dom';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('My Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://hosted.where2getit.com/moneygram/en_nomap.htm');
    cy.get('#search_country').should('be.visible')
    cy.get('#search_country').select('United States of America');
    cy.get('#inputaddress').should('be.visible')
    cy.get('#inputaddress').clear().type('Santa Clara');
    cy.get('#locator_submit').click();
  });

  it('Test Case 1: Search Location', () => {
    cy.get('#search_country').select('United States of America');
    cy.get('#inputaddress').should('be.visible')
    cy.get('#inputaddress').clear().type('Santa Clara');
    cy.get('#locator_submit').click();
  });

  it('Test Case 2: Print total number of stores', () => {
    cy.get('.div_row').its('length').as('numberOfElements').should('be.greaterThan', 0); 
    cy.get('.link2.hoverlink').eq(2).click();
    cy.get('#box21').invoke('text').as('box21Text')
    cy.get('.link3.hoverlink').eq(2).click();
    cy.get('#box31').invoke('text').as('box31Text')

    cy.get('@numberOfElements').then((elementCount) => {
      cy.log("Number of elements with class 'div_row': ${elementCount}").should('be.greaterThan', 0);
    });

    cy.get('@box21Text').then((text) => {
      cy.log(`Text content of #box21: ${text}`)
    });

    cy.get('@box31Text').then((text) => {
      cy.log("Text content of #box31: ${text}")
    });
  });

  it('Test Case 3: Send Email', () => {
    cy.get('div.sendto.hide_on_mobile').invoke('css', 'display', 'block');
    cy.get('a.lightwindow.email.hideUKIE_IN').should('be.visible').first().click({ force: true });

    cy.iframe('#lightwindow_iframe').should('be.visible').as('iframe');
    cy.get('@iframe').find("input[name='useremail']").should('be.visible')
    cy.get('@iframe').find(".applysearchfilters").should('be.visible').click();
  });
});
