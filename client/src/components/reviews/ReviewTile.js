import React from 'react';

const ReviewTile = (reviewObj) => {
  return (
<<<<<<< HEAD
    <td>
=======
    <td data-testid="reviewTile">
>>>>>>> 4ddfd797ffa9c664eff9c718343923e2dd04fc4e
      <p>{reviewObj.summary}</p>
      <p>{reviewObj.body}</p>
      <p>{reviewObj.reviewer_name}</p>
      <p>{reviewObj.date}</p>
    </td>
  );
};

export default ReviewTile;
