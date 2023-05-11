import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import MyVerticallyCenteredModal from '../project_details.component/project_details.component.jsx';
import Carousel from '../carousel.component/carausal.component.jsx'
import CircularProgress from '@mui/material/CircularProgress';

export default function Projects({data, designImages, tagImages, isLoading}){

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37);': ''}` ,
    margin: '0 auto',
    border: '1px solid #ccc',
    overflow: 'hidden',
    borderTopLeftRadius: '0.3rem',
    borderTopRightRadius: '0.3rem',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    borderBottomColor: '#f5f5f5',
    position: 'relative'
  });
  
  const ImageContainer = styled('div')({
    flex: '1 1 300px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const Image = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  });

  const DescriptionContainer = styled('div')({
      flex: '1 1 300px',
      fontSize: '1.2rem',
      marginLeft: '2rem',
      marginRight: '2rem'
    });
  
  const Title = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: '3rem',
    '@media (max-width: 800px)': {
      fontSize: '1rem', // Adjust the font size for smaller screens
      marginBottom: '1rem',
    }
  });
  
  const Subtitle = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '1.6rem',
    marginBottom: '2rem',
  });
  
  const Content = styled(Typography)({
    fontSize: '1.2rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  });
  

  const responsiveStyles = {
    '@media (max-width: 960px)': {
      flexDirection: 'column-reverse',
      marginLeft: '0',
      '& $DescriptionContainer': {
        marginLeft: '0'
      },
      '& $ImageContainer': {
        flex: '1 1 100%',
        height: '300px',
      },
    },
  };

  return (
    <Container id="Designs" sx={responsiveStyles}>
      <DescriptionContainer>
        <Title >
            {data.Header}
        </Title>
        <Subtitle>
            {data.Sub_header}
        </Subtitle>
        <Content>
            {data.Content}
            <br/>
            <br/>
        </Content>
        
      </DescriptionContainer>
      <ImageContainer>
        {isLoading ? <CircularProgress color="secondary" /> :<Carousel images={designImages} tagImages={tagImages} tags={Object.keys(tagImages)}  />}
      </ImageContainer>
    </Container>
  );
}