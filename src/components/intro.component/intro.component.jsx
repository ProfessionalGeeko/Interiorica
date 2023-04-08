
import intro_img from '../../assets/images/intro_img.jpg';
import Button from '@mui/material/Button';
import  styles from './intro.styles.scss';
import React, {useEffect, useRef} from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";


export default function AboutUs({isFocus}){
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const ref = useRef(null);

  useEffect(() => {
    if(isFocus)
      ref.current.focus()
  }, [isFocus])
  
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
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  });

  const Image = styled('img')({
    height: '700px',
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
        <Image src={intro_img} alt="My Image" />
      </ImageContainer>
      <DescriptionContainer>
        <Title >
            <h1>Interiorica </h1>
        </Title>
        <Subtitle>
            <p className='subtitle'>Your Space. Reimagined.</p>
        </Subtitle>
        <Content>
            <p className='desc'>At Interiorica  we design residential and commercial spaces that are comfortable, personal and interesting. Great interior design is great art, reflecting who you are in ways you never imagined. Our unique perspective, grounded in both art and architecture, reflects an artist’s eye toward color and materials and a strong sense of space and form. We are artists, we are designers, and we are here to make your space better than you could have ever imagined.</p>
            <Button variant="contained" size="medium" style={{"marginTop":"60px"}}>Learn More</Button>
        </Content>
      </DescriptionContainer>      
    </Container>
    </div>
  );
}