import React from 'react';
import { render } from '@testing-library/react';
import ReviewTile from './ReviewTile.js';

it('renders learn react link', () => {
  const { getByTestId } = render(<ReviewTile />);
  const component = getByTestId('reviewTile');
  expect(component).toBeInTheDocument();
});
