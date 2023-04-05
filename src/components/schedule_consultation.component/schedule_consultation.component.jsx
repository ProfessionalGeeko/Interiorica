import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import  './schedule_consultation.styles.scss';
import useMediaQuery from "@mui/material/useMediaQuery";



export default function Projects({data, image}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const QuestionContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
      padding: '10rem',
  color: `${prefersDarkMode ? 'rgb(0,0,0);': ''}`    
  });
  
  const StyledButton = styled(Button)({
    marginTop: '1rem',
    width: '100%',
    maxWidth: 300,
    color: `${prefersDarkMode ? 'rgb(256,256,256);': ''}`
  });
  return (
    <QuestionContainer id="Services" maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom >
      Ready to get started? 
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ mt: 1, mb:4 }}>
      Contact us today to make your design dreams a reality.
      </Typography>
      <StyledButton variant="contained" className="Schedule_consult" >
        Schedule a consultation
      </StyledButton>
    </QuestionContainer>
  );
};


