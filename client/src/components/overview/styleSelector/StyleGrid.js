import React from 'react';
import { connect } from 'react-redux';
import { selectStyle } from '../../../redux/actions/selected';
import StyleEntry from './StyleEntry';

const StyleGrid = ({ styles, selectedStyleId }) => {
  return (
    <div
      data-testid="styleGrid"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {styles.map((style) => (
        <StyleEntry
          style={style}
          isSelected={selectedStyleId === style.style_id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  styles: state.currentStyles,
  selectedStyleId: state.selected.style.style_id
});

export default connect(mapStateToProps)(StyleGrid);
