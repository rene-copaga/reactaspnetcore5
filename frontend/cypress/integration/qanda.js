describe('Ask question', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('When signed in and ask a valid question, the question should successfully save', () => {
    cy.contains('Q & A');
    cy.contains('Unanswered Questions');
    cy.contains('Sign In').click();
    cy.url().should('include', 'auth0');
    cy.findByLabelText('Email address')
      .type('r.copaga@gmail.com')
      .should('have.value', 'r.copaga@gmail.com');
    cy.findByLabelText('Password')
      .type('Control123!')
      .should('have.value', 'Control123!');
    cy.get('form').first().submit();
    cy.contains('Unanswered Questions');
    cy.contains('Ask a question', { timeout: 40000 }).click();
    cy.contains('Ask a question');

    var title = 'title test';
    var content = 'Lots and lots and lots and lots and lots of content test';
    cy.findByLabelText('Title').type(title).should('have.value', title);
    cy.findByLabelText('Content').type(content).should('have.value', content);
    cy.contains('Submit Your Question').click();
    cy.contains('Your question was successfully submitted', { timeout: 30000 });
    cy.contains('Sign Out').click();
    cy.contains('You successfully signed out');
  });
});
