import React from 'react';
import ProductInfo from './productInfo';
import ImageGallery from './imageGallery';
import ProductDescription from './productDescription';
import StyleSelector from './styleSelector';
import CartForm from './cartForm';

// const { selected, currentProduct, styles } = sampleStore;

const Overview = ({ sampleStore: { selected, currentProduct } }) => (
  <div data-testid="productOverview">
    <div className="row">
      <div className="col-md-8">
        <ImageGallery selected={selected} />
      </div>
      <div className="col-md-4">
        <ProductInfo currentProduct={currentProduct} />
        <StyleSelector />
        <CartForm selectedStyle={selected.style} />
      </div>
    </div>

    <ProductDescription currentProduct={currentProduct} />
  </div>
);

export default Overview;
