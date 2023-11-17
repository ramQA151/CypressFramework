 ///<reference types ="cypress"/>
export class registerPage{


webLocators={

    firstName: '#input-firstname',
    lastName: '#input-lastname',
    Email:  '#input-email',
    telephone: '#input-telephone',
    password:'#input-password',
    pwdConform: '#input-confirm',
    Checkbox:  "input[type='checkbox']",
    continue: "input[type='submit']"
}

openURL()
{
    cy.visit(Cypress.env('URl'))
}
enterFirstName(FName){
    cy.get(this.webLocators.firstName).type(FName)
}

enterLastName(LName){
    cy.get(this.webLocators.lastName).type(LName)
}

enterEmail(Email){
    cy.get(this.webLocators.enterEmail).type(Email)
}

enterTelephone(Telephone){
    cy.get(this.webLocators.telephone).type(Telephone)
}

enterTelephone(Password){
    cy.get(this.webLocators.password).type(Password)
}

enterPassword(pwdConform){
    cy.get(this.webLocators.pwdConform).type(pwdConform)
}

selectCheckbox (){
    cy.get(this.webLocators.Checkbox).check()
}
clickOnContinue(){
    cy.get(this.webLocators.continue).click()
}











}