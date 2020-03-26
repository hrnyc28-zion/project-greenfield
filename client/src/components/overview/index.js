import React from 'react';
import ProductInfo from './productInfo';
import ImageGallery from './imageGallery';

// const { selected, currentProduct, styles } = sampleStore;

const Overview = ({ sampleStore: { selected, currentProduct, styles } }) => (
  <div data-testid="productOverview">
    <ImageGallery selected={selected} />
    <ProductInfo
      selected={selected}
      currentProduct={currentProduct}
      currentStyles={styles}
    />
  </div>
);

export default Overview;
