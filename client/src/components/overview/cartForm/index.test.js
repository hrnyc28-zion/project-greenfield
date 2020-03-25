import React from 'react';
import { render } from '@testing-library/react';
import CartForm from './index';

it('renders learn react link', () => {
  const { getByTestId } = render(<CartForm />);
  const component = getByTestId('cartForm');
  expect(component).toBeInTheDocument();
});
