import React from 'react';

const ProductBreakdown = ({ sizeRating, comfortRating }) => {
  return (
    <div data-testid="productBreakdown">
      <table>
        <tbody>
          <tr>
            <td>Size</td>
          </tr>
          <tr>
            <td>Comfort</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductBreakdown;
