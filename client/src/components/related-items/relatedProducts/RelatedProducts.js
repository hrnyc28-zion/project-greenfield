import React from 'react';
import { connect } from 'react-redux';
import RelatedProductsEntry from './RelatedProductEntry';
import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="related-container" data-testid="related-products">
      <p className="related-title">Related Products</p>
      <div className="related-card-container clearfix">
        <div style={{ width: relatedProducts.products.length * 270 }}>
          {relatedProducts.products.map((product) => {
            return (
              <RelatedProductsEntry
                key={product.id}
                productId={product.id}
                category={product.category}
                name={product.name}
                price={product.default_price}
                features={product.features}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProduct: state.currentProduct
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(RelatedProducts);
