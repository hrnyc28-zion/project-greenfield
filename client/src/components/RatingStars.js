import React from 'react';

// total number of stars
const shadeStars = (rating) => {
  const starTotal = 5;

  const starPercentage = (rating / starTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  document.querySelector(`.stars-inner`).style.width = starPercentageRounded;
};

const ReviewStars = ({ rating }) => {
  shadeStars(rating);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div class="stars-outer">
              <div class="stars-inner"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReviewStars;
