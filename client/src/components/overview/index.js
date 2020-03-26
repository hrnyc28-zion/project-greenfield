import React from 'react';
import ProductInfo from './productInfo';
import sampleStore from '../../sampleData/sampleStore';

const { selected, currentProduct, styles } = sampleStore;

const Overview = () => (
  <div data-testid="productOverview">
    Overview component
    <ProductInfo
      selected={selected}
      currentProduct={currentProduct}
      currentStyles={styles}
    />
  </div>
);

export default Overview;
