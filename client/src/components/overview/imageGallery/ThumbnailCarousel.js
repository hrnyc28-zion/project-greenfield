import React from 'react';

const ThumbnailCarousel = ({ photos, thumbnailIndex, selectThumbnail }) => {
  return (
    <div id="thumbnailCarousel">
      {photos.map((photo, index) => (
        // <div className="row">
        <div
          className="thumbnailContainer"
          onClick={() => selectThumbnail(index)}
          onKeyDown={() => selectThumbnail(index)}
          role="button"
          tabIndex={0}
        >
          <img src={photo.thumbnail_url} alt="" />
        </div>
        // </div>
      ))}
    </div>
  );

  // return (
  //   <div id="thumbnailCarousel" className="ovContainer">
  //     {photos.map((photo, index) => (
  //       <div className="row">
  //         <div
  //           className="thumbnailContainer"
  //           onClick={() => selectThumbnail(index)}
  //           onKeyDown={() => selectThumbnail(index)}
  //           role="button"
  //           tabIndex={0}
  //         >
  //           <img src={photo.url} alt="" />
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default ThumbnailCarousel;
