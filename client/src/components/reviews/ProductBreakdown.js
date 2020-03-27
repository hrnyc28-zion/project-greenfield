import React from 'react';

const ProductBreakdown = ({ productBreakdown }) => {
  return (
    <div data-testid="productBreakdown">
      <table className="reviews">
        <tbody>
          <tr>
            <td>Size: {productBreakdown.sizeRating}</td>
          </tr>
          <tr>
            <td>Comfort: {productBreakdown.comfortRating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductBreakdown;
