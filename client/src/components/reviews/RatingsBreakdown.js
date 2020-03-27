import React from 'react';

const RatingsBreakdown = ({ ratingsBreakdown }) => {
  return (
    <div data-testid="ratingsBreakdown">
      <table className="reviews">
        <tbody>
          <tr>
            <td>Overall Rating: {ratingsBreakdown.overallRating}</td>
          </tr>
          <tr>
            <td>
              {`\u2605 \u2605 \u2605 \u2605 \u2605: ${ratingsBreakdown['5']}`}
            </td>
          </tr>
          <tr>
            <td>{`\u2605 \u2605 \u2605 \u2605 \u2606: ${ratingsBreakdown['4']}`}</td>
          </tr>
          <tr>
            <td>{`\u2605 \u2605 \u2605 \u2606 \u2606: ${ratingsBreakdown['3']}`}</td>
          </tr>
          <tr>
            <td>{`\u2605 \u2605 \u2606 \u2606 \u2606: ${ratingsBreakdown['2']}`}</td>
          </tr>
          <tr>
            <td>{`\u2605 \u2606 \u2606 \u2606 \u2606: ${ratingsBreakdown['1']}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingsBreakdown;
