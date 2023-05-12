import React from 'react';
import { addCloudinaryPrefix } from '../../utils';

const FixedSizeImage = ({ src, width, height }) => {
  return (
    <img src={addCloudinaryPrefix(src)} style={{ width: `100%`,minWidth:`${width}px`, height:`${height}`,objectFit: 'cover' }} />
  );
};

export default FixedSizeImage;
