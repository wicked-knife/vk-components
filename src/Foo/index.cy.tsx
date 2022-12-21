import React from 'react';
import Foo from './index';

it('uses custom text for the button label', () => {
  cy.mount(<Foo title="bar"></Foo>);
  cy.get('h4').should('contains.text', 'bar');
});
