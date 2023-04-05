import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import  './schedule_consultation.styles.scss';

const QuestionContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
    padding: '10rem',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
  width: '100%',
  maxWidth: 300,
});

export default function Projects({data, image}) {
  return (
    <QuestionContainer maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom >
      Ready to get started? 
      </Typography>
      <Typography variant="body1" align="center" gutterBottom sx={{ mt: 1, mb:4 }}>
      Contact us today to make your design dreams a reality.
      </Typography>
      <StyledButton variant="contained" className="Schedule_consult">
        Schedule a consultation
      </StyledButton>
    </QuestionContainer>
  );
};


