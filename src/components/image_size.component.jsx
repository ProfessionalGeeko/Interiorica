import React from 'react';

const FixedSizeImage = ({ src, width, height }) => {
  return (
    <img src={src} style={{ width: `100%`,minWidth:`${width}px`, objectFit: 'cover' }} />
  );
};

export default FixedSizeImage;
