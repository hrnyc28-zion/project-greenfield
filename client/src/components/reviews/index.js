import React from 'react';
import ReviewList from './ReviewList';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';

const ReviewWidget = ({ reviewData, ratingsBreakdown, productBreakdown }) => (
  <div data-testid="reviews">
    Reviews Components
    <section>
      <ReviewList reviewList={reviewData} />
    </section>
    <section>
      <RatingsBreakdown ratingsBreakdown={ratingsBreakdown} />
    </section>
    <section>
      <ProductBreakdown productBreakdown={productBreakdown} />
    </section>
  </div>
);

export default ReviewWidget;
