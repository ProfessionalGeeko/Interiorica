import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import MyVerticallyCenteredModal from '../project_details.component/project_details.component.jsx';

export default function Carousel({ images, tagImages, tags }) {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
      <MyVerticallyCenteredModal images={tagImages} tags={tags}  show={modalShow} onHide={() => setModalShow(false)} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          transition: 'transform 0.5s ease',
        }}
      >
        {images?.map((image, i) => (
          <Box key={i} sx={{ flexShrink: 0, width: '100%', height: '100%', position: 'relative' }} onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}>
            <img
              src={images[index]}
              alt={`Image ${i}`}
              style={{ width: '100%', height: '100%',opacity: `${hovered?'0.5':'1'}` }} 
            />
            {hovered && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '40%',
                  right: '40%',
                  padding: '10px'
                }}
              >
                <Button variant="contained" color="customButtonColor" size="medium" onMouseOver={() => setHovered(true)} onClick={() => setModalShow(true)}>
                  See More
                </Button>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}