// write unit test for Foo component using jest
import { render } from '@testing-library/react';
import React from 'react';
import Foo from './index';

describe('Foo', () => {
  it('should render', () => {
    const { container } = render(<Foo />);
    expect(container).toBeInTheDocument();
  });

  it('should render title', () => {
    const { getByText } = render(<Foo title="bar" />);
    expect(getByText('bar')).toBeInTheDocument();
  });
});
