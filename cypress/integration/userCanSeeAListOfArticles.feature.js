describe('User can view content of an article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.viewport('iphone-x');
    cy.visit('/');
  });
  it('is expected to display a hero section', () => {
    cy.get('[data-testid=hero-article]')
      .first()
      .within(() => {
        cy.get('[data-testid=title]').should(
          'contain',
          'Earth is a frisbee being thrown by God'
        );
        cy.get('[data-testid=category]').should('contain', 'Aliens');
      });
  });
  it('is expected to display a list of 6 articles', () => {
    cy.get('[data-testid=article]').should('have.length', 6);
  });
  it('is expected to display title, date, and author of article', () => {
    cy.get('[data-testid=article]')
      .first()
      .within(() => {
        cy.get('[data-testid=title]').should(
          'contain',
          'Canada SWAT team molest the Queen'
        );
        cy.get('[data-testid=date]').should('contain', '2021-05-25');
        cy.get('[data-testid=author]').should('contain', 'By Mr. Fake');
      });
  });
});
