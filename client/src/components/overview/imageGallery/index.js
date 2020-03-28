import React from 'react';
import { connect } from 'react-redux';

const ImageGallery = ({ style, thumbnailIndex }) => {
  const { url } = style.photos[thumbnailIndex];
  return (
    <div data-testid="imageGallery">
      <img src={url} alt="" style={{ maxWidth: '500px' }} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  style: state.selected.style,
  thumbnailIndex: state.selected.thumbnailIndex
});

export default connect(mapStateToProps)(ImageGallery);
// export default ImageGallery;
