import React from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setThumbnail } from '../../../redux/actions/selected';

const ImageCarousel = ({
  photos,
  selectedThumbnailIndex,
  setThumbnailIndex
}) => {
  return (
    <Carousel
      activeIndex={selectedThumbnailIndex}
      onSelect={(index) => {
        setThumbnailIndex(index);
      }}
      fade
      interval={null}
      indicators={false}
    >
      {photos.map(({ url }) => (
        <Carousel.Item key={url}>
          <img
            className="w-100"
            src={url}
            alt="First slide"
            style={{ objectFit: 'contain' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const mapStateToProps = (state) => ({
  photos: state.selected.style.photos,
  selectedThumbnailIndex: state.selected.thumbnailIndex
});

const mapDispatchToProps = { setThumbnailIndex: setThumbnail };

export default connect(mapStateToProps, mapDispatchToProps)(ImageCarousel);
