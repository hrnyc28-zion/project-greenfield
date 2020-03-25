import React from 'react';
import { render } from '@testing-library/react';
import StyleCard from './StyleCard';

it('renders the StyleCard', () => {
  const { getByTestId } = render(<StyleCard />);
  const component = getByTestId('styleCard');
  expect(component).toBeInTheDocument();
});
