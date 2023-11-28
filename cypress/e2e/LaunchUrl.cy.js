/// <reference types="cypress" />

describe('My Test Suite', () => {
    beforeEach(() => {
      // Visit a specific URL
      cy.visit('https://hosted.where2getit.com/swig/index.html');
      cy.get('#search_input').click().type('Santa Clara');
      cy.wait(4000);
      cy.get('.button-search').click();
    });
  
    it('Test Case 1: should do something', () => {
      cy.get('.poi_box').its('length').then((count) => {
        // Log the count to the Cypress command log
        cy.log(`Number of stores present are: ${count}`);
      });
    });
  
    it('Test Case 2: should perform another action', () => {
      cy.wait(4000);
      cy.get('.sb-location-name').invoke('text').then((text) => {
        // Log the text content of the element to the Cypress command log
        cy.log(`Total stores are: ${text}`);
      });
    });
  
    it('Test Case 3: should check something else', () => {
      cy.window().then((win) => {
        win.location.href = 'https://locations.meetsoci.com/swig/ut/santa-clara/304824';
  
        cy.title().then((title) => {
          cy.log(`Web page title: ${title}`);
          cy.go('back');
        });
      });
    });
  
    it('Get Directions', () => {
      cy.window().then((win) => {
        win.location.href = 'http://maps.apple.com?q=3510 Pioneer Parkway,Santa Clara,UT84765';
  
        cy.title().then((title) => {
          cy.log(`Web page title: ${title}`);
          cy.go('back');
        });
      });
    });
    
    afterEach(() => {
      // Teardown code or actions to run after each test case
    });
  });
  