import React from 'react';
import '../styles/RatingStars.css';

const RatingStars = ({ rating }) => {
  const ratingPercentage = `${Math.floor(
    (Number(rating) / 5) * 100
  ).toString()}%`;
  console.log(ratingPercentage);
  const styles = {
    width: ratingPercentage
  };

  return (
    <div data-classid="ratingStars">
      <section className="ratingStars">
        <div className="stars-outer">
          <div className="stars-inner" style={styles} />
        </div>
      </section>
    </div>
  );
};

export default RatingStars;
