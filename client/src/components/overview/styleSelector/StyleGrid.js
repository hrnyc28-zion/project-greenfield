import React from 'react';
import { connect } from 'react-redux';
import { setStyle } from '../../../redux/actions/selected';
import StyleEntry from './StyleEntry';

const StyleGrid = ({ styles, selectedStyleId, setStyle }) => {
  return (
    <div
      data-testid="styleGrid"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {styles.map((style) => (
        <StyleEntry
          thumbnailUrl={style.photos[0].thumbnail_url}
          isSelected={selectedStyleId === style.style_id}
          handleClick={() => setStyle(style)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  styles: state.currentStyles,
  selectedStyleId: state.selected.style.style_id
});

const mapDispatchToProps = (dispatch) => ({
  setStyle: (id) => dispatch(setStyle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StyleGrid);
