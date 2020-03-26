import React from 'react';
import ReviewTile from './ReviewTile.js';

const ReviewList = ({ reviewList }) => {
  return (
<<<<<<< HEAD
    <div>
      <h2>
        {reviewList.results.length} reviews, sorted by{' '}
=======
    <div data-testid="reviewList">
      <h2>
        {reviewList.reviewData.length} reviews, sorted by{' '}
>>>>>>> 4ddfd797ffa9c664eff9c718343923e2dd04fc4e
        <select>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevance">Relevance</option>
        </select>
      </h2>
      <table className="reviews">
        <tbody>
<<<<<<< HEAD
          {reviewList.results.map((review) => (
=======
          {reviewList.reviewData.map((review) => (
>>>>>>> 4ddfd797ffa9c664eff9c718343923e2dd04fc4e
            <tr>
              <ReviewTile key={review.review_id} {...review} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
