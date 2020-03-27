import React from 'react';
import StyleEntry from './StyleEntry';

const StyleGrid = ({ styles }) => (
  <div
    data-testid="styleGrid"
    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
  >
    {styles.map((style) => (
      <StyleEntry style={style} />
    ))}
  </div>
);

export default StyleGrid;
