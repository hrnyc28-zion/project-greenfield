import React from 'react';
import RatingStars from '../../RatingStars';

const RatingsBreakdown = (metaData) => {
  let aggregate = 0;
  let numReviews = 0;
  const ratingsBreakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (let i = 1; i < 6; i++) {
    ratingsBreakdown[i] = metaData.rating;
    numReviews += metaData.rating;
    aggregate += i * metaData.rating;
  }

  ratingsBreakdown.overallRating = aggregate / numReviews;

  return (
    <div data-testid="ratingsBreakdown">
      <table className="reviews">
        <tbody>
          <tr>
            <td>
              Overall Rating:{' '}
              {Math.round(ratingsBreakdown.overallRating * 10) / 10}
            </td>
            <td>
              <RatingStars rating={2} />
            </td>
          </tr>
          <tr>
            <td>
              <RatingStars rating={5} />: {ratingsBreakdown['5']}
            </td>
          </tr>
          <tr>
            <RatingStars rating={4} />: {ratingsBreakdown['4']}
          </tr>
          <tr>
            <RatingStars rating={3} />: {ratingsBreakdown['3']}
          </tr>
          <tr>
            <RatingStars rating={2} />: {ratingsBreakdown['2']}
          </tr>
          <tr>
            <RatingStars rating={1} />: {ratingsBreakdown['1']}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingsBreakdown;
