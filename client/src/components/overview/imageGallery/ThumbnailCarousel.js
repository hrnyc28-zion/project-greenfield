import React from 'react';

const ThumbnailCarousel = ({ photos, thumbnailIndex, selectThumbnail }) => {
  return (
    <div>
      <ul>
        {photos.map((photo, index) => (
          <li>
            <span
              onClick={() => selectThumbnail(index)}
              onKeyDown={() => selectThumbnail(index)}
              role="button"
              tabIndex={0}
            >
              <img src={photo.url} alt="" style={{ maxWidth: '50px' }} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThumbnailCarousel;
