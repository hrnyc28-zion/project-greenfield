/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import ProductInfo from './index';
import sampleStore from '../../../sampleData/sampleStore';

it('renders <ProductInfo />', () => {
  const { getByTestId } = render(<ProductInfo {...sampleStore} />);
  const component = getByTestId('productInfo');
  expect(component).toBeInTheDocument();
});
