import React from 'react';

const ReviewTile = (reviewObj) => {
  return (
    <tr>
      <p>{reviewObj.summary}</p>
      <p>{reviewObj.body}</p>
      <p>{reviewObj.reviewer_name}</p>
      <p>{reviewObj.date}</p>
    </tr>
  );
};

export default ReviewTile;
