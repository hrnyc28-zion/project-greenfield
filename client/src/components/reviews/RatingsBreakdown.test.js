import React from 'react';
import { render } from '@testing-library/react';
import RatingsBreakdown from './RatingsBreakdown.js';

it('renders learn react link', () => {
  const { getByTestId } = render(<RatingsBreakdown />);
  const component = getByTestId('ratingsBreakdown');
  expect(component).toBeInTheDocument();
});
