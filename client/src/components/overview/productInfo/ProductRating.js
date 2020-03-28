/* eslint-disable jsx-a11y/accessible-emoji */ // TODO: remove this hint
/* eslint-disable jsx-a11y/anchor-is-valid */ // TODO: remove this hint
import React from 'react';
import RatingStars from '../../RatingStars';

const ProductRating = ({ rating = 4.5 }) => (
  <div data-testid="productRating">
    <RatingStars rating={rating} /> <a href="">Read all reviews</a>
  </div>
);

export default ProductRating;
