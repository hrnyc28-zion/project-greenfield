import React from 'react';
import ReviewTile from './ReviewTile.js';

const ReviewList = ({ reviewList }) => {
  return (
    <div>
      <h2>
        {reviewList.results.length} reviews, sorted by{' '}
        <select>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevance">Relevance</option>
        </select>
      </h2>
      <table className="reviews">
        <tbody>
          {reviewList.results.map((review) => (
            <ReviewTile key={review.review_id} {...review} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
