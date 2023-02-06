
import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import intro_img from '../../assets/images/intro_img.jpg';
import Button from '@mui/material/Button';
import  styles from './intro.styles.scss';

export default function Intro() {
  return (
    <div style={{"marginBottom":"60px","marginTop":"30px"}}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Item className='Item-1'>
                    <img src={intro_img} alt="intro_img" width="100%" />
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item className='Item-2'>
                    <div>
                        <h1>Interiorica </h1>
                        <p className='subtitle'>Your Space. Reimagined.</p>
                        <p className='desc'>At Interiorica  we design residential and commercial spaces that are comfortable, personal and interesting. Great interior design is great art, reflecting who you are in ways you never imagined. Our unique perspective, grounded in both art and architecture, reflects an artist’s eye toward color and materials and a strong sense of space and form. We are artists, we are designers, and we are here to make your space better than you could have ever imagined.</p>
                        <Button variant="contained" size="medium" >Learn More</Button>
                    </div>
                </Item>
            </Grid>
        </Grid>
    </div>
  );
}