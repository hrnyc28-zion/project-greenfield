import React from 'react';

const RatingsBreakdown = ({ ratings, recommendPercentage }) => {
  return (
    <div data-testid="ratingsBreakdown">
      <table>
        <tbody>
          <tr>
            <td>Overall Rating</td>
          </tr>
          <tr>
            <td>recommendPercentage% of reviewers recommended this product</td>
          </tr>
          <tr>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>4 stars</td>
          </tr>
          <tr>
            <td>3 stars</td>
          </tr>
          <tr>
            <td>2 stars</td>
          </tr>
          <tr>
            <td>1 stars</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingsBreakdown;
