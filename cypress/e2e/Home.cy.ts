describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#usuario').type('emilys')
    cy.get('#senha').type('emilyspass')

    cy.get('#login').click()

    cy.contains('Bem vindo, Emily!')
  })
})