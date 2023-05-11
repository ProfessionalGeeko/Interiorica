
import intro_img from '../../assets/images/intro_img.jpg';
import Button from '@mui/material/Button';
import  styles from './intro.styles.scss';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from "@mui/material/useMediaQuery";
import useHttp from "../../hooks/useHttp";
import { introTitle, introSubtitle, introDescription } from '../../constants';
import {addCloudinaryPrefix} from "../../utils";


export default function AboutUs(){
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { isLoading, sendRequest } = useHttp();
  const [ introImage, setIntroImage ] = useState();

  const handleIntroData = (data) => {
    setIntroImage(data.introImage);
  }

  useEffect(() => {
    sendRequest({method: 'GET', url: '/get-data?documentName=intro'}, handleIntroData)
  }, [sendRequest])
  
  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-start',
    // maxWidth: '95%',
    margin: '0 auto',
    overflow: 'hidden',
    // paddingBottom:"10em",
    // marginTop:"10em",
    backgroundColor: `${prefersDarkMode ? 'rgb(30, 32, 37)': ''}`
  });


  const ImageContainer = styled('div')({
  flex: '1 1 300px',
  height: '700px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  });

  const Image = styled('img')({
    height: '500px',
    objectFit: 'contain'
  });


  const DescriptionContainer = styled('div')({
    flex: '1 1 ',
    padding: '2rem',
    marginLeft: '2rem',
    marginRight: '2rem',
  });

  const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: '3rem',
  textAlign: 'center',
  });

  const Subtitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.6rem',
  marginBottom: '2rem',
  textAlign: 'center',
  });

  const Content = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: '1.5',
  marginBottom: '1rem',
  textAlign: 'center',
  });


  const responsiveStyles = {
  '@media (max-width: 960px)': {
    flexDirection: 'column-reverse',
    marginLeft: '0',
    '& $DescriptionContainer': {
      marginLeft: '0',
      padding: '1rem 2rem',
    },
    '& $ImageContainer': {
      flex: '1 1 100%',
      height: '900px',
    },
  },
  };

  return (
    <div id="Home" className={styles.parentContainer}>
    <Container sx={responsiveStyles}>
        <ImageContainer>
          { isLoading ?
              <CircularProgress color="secondary" /> :
              <Image loading="lazy" src={addCloudinaryPrefix(introImage)} alt="My Image" />
          }
      </ImageContainer>
      <DescriptionContainer>
        <Title >
            <h1>{introTitle}</h1>
        </Title>
        <Subtitle>
            <p className='subtitle'>{introSubtitle}</p>
        </Subtitle>
        <Content>
            <p className='desc'>{introDescription}</p>
            <Button variant="contained" color="customButtonColor" size="medium" style={{"marginTop":"60px"}}>Learn More</Button>
        </Content>
      </DescriptionContainer>      
    </Container>
    </div>
  );
}