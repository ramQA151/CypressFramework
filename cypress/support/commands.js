
Cypress.Command.add('Login',(email,password)=>{
    cy.visit('')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input.btn.btn-primary').click()

})