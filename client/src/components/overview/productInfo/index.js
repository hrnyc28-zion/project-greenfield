import React from 'react';
import ProductRating from './ProductRating';
import ProductDetails from './ProductDetails';
import SocialCard from './SocialCard';

const ProductInfo = ({ currentProduct }) => (
  <div data-testid="productInfo">
    <section>
      <ProductRating rating={currentProduct.rating} />
    </section>
    <section>
      <ProductDetails />
    </section>
    <section>
      <SocialCard />
    </section>
  </div>
);

export default ProductInfo;
