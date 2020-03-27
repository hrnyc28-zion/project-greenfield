import React from 'react';

const StyleEntry = ({ style }) => (
  <div
    data-testid="styleEntry"
    style={{
      height: '60px',
      width: '60px',
      border: '1px solid gray',
      borderRadius: '100%',
      margin: '10px 10px',
      backgroundImage: `url("${style.photos[0].thumbnail_url}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
    }}
  >
    {/* <img
      src={style.photos[0].thumbnail_url}
      alt=""
      style={{
        border: '1px solid gray',
        borderRadius: '20px',
        margin: '5px',
        maxWidth: '50px',
        maxHeight: 'auto'
      }}
    /> */}
  </div>
);

export default StyleEntry;
