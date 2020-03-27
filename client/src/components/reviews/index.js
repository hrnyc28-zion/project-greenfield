import React from 'react';
import ReviewList from './ReviewList';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';

class ReviewWidget extends React.Component {
  constructor({ sampleStore }) {
    super(sampleStore);
    this.state = {};
  }

  render() {
    return (
      <div data-testid="reviews">
        Reviews Components
        <section>
          <ReviewList reviewList={this.sampleStore.reviewData} />
        </section>
        <section>
          <RatingsBreakdown reviewData={this.sampleStore.reviewData} />
        </section>
        <section>
          <ProductBreakdown productBreakdown={this.sampleStore.reviewData} />
        </section>
      </div>
    );
  }
}

export default ReviewWidget;
