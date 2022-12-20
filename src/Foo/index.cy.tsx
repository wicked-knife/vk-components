it('uses custom text for the button label', () => {
  cy.get('h4').should('contains.text', 'bar');
});
