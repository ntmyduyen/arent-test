describe('Access App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('render correctly', () => {
    cy.scrollTo("bottom", { ensureScrollable: false }).window().its('scrollY').should('not.equal', 0);
  })

  it('should scroll to top when click button', () => {
    cy.scrollTo("bottom", { ensureScrollable: false })
      .get('[data-testid=btn-scroll-to-top]')
      .click()
  })
})