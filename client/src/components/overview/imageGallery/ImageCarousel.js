import React from 'react';
import { connect } from 'react-redux';

const ImageCarousel = ({ photos }) => {
  return (
    // <div id="imageCarousel" className="carousel slide" data-ride="carousel">

    <div id="imageCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {photos.map(({ url }, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img className="d-block w-100" src={url} alt="First slide" />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.selected.style.photos
});

export default connect(mapStateToProps)(ImageCarousel);
