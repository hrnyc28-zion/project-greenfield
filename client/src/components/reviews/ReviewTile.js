import React from 'react';

const ReviewTile = (reviewObj) => {
  return (
    <td>
      <p>{reviewObj.summary}</p>
      <p>{reviewObj.body}</p>
      <p>{reviewObj.reviewer_name}</p>
      <p>{reviewObj.date}</p>
    </td>
  );
};

export default ReviewTile;
