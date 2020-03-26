import React from 'react';
import { render } from '@testing-library/react';
import ImageGallery from './index';

it('renders the CartForm', () => {
  const { getByTestId } = render(<ImageGallery />);
  const component = getByTestId('imageGallery');
  expect(component).toBeInTheDocument();
});
