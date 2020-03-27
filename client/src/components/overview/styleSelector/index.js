import React from 'react';
import StyleGrid from './StyleGrid';

const StyleSelector = ({ name, currentStyles }) => (
  <div data-testid="styleSelector">
    <div>
      <span>
        <strong>STYLE {'>'} </strong>
      </span>
      {name}
    </div>
    <StyleGrid styles={currentStyles} />
  </div>
);

export default StyleSelector;
