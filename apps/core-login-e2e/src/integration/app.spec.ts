import { getGreeting } from '../support/app.po';

describe('core-login', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to core-login!');
  });
});
