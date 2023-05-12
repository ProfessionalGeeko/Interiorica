import React, { useState } from 'react';
import { Grid, Button, useMediaQuery} from '@mui/material';
import FixedSizeImage from '../image.component/image_size.component';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { addCloudinaryPrefix } from '../../utils';

export default function ImageGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(null);
  const [is_selected, setFlag] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setIndex(index);
    setFlag(true);
  };
  const handleCloseClick = () => {
    setSelectedImage(null);
    setIndex(null);
    setFlag(false);
  };

  return (
    <div>
      <Grid container spacing={2} justify="center">
        {!is_selected &&
          images.map((image, index) => (
            <Grid item key={index} xs={6} sm={6} md={4}>
              <img
                src={addCloudinaryPrefix(image)}
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer',objectFit: 'cover'  }}
                width="240px"
                height={isSmallScreen ? 'auto' : '300px'}
              />
            </Grid>
          ))}

        {is_selected && (
          <Grid item xs={12} sm={12} md={12}>
            <div style={{ position: 'relative' }}>
              <Button
                onClick={() => handleCloseClick()}
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  zIndex: 1,
                  backgroundColor:'transparent',
                  borderColor:"black",  
                  borderRadius: '100%',
                  borderColor:"black"
                }}
              >
                <CloseOutlinedIcon  style={{color:"#FFF",backgroundColor:"#8D8DAA",borderRadius:"100px",height:"30px","width":"30px",borderColor:"black"}}/>
              </Button>
              <FixedSizeImage src={addCloudinaryPrefix(selectedImage)} width="200px" height={isSmallScreen ? 'auto' : '400px'} />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
