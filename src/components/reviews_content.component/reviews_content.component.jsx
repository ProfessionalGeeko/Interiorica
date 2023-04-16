import React, { useState } from "react";
import styles from "./reviews_content.component.styles.scss";
import review_bg from "../../assets/images/Reviews_background.webp";
import Carousel from "react-bootstrap/Carousel";
import { color } from "@mui/system";
import CardComponent from "../card.component/card.component";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import galary_5 from "../../assets/images/Gallery_5.jpg";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomerReview from "../customer-review/CustomerReview";

export default function Reviews_content() {
  const [index, setIndex] = useState(0);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div id="Workshop" style={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}} className="Reviews-section">
      <div className="carousel-div">
          <CustomerReview/>
      </div>
        <div className="card-div">
            <div className="card-header">
                <p style={{color: `${prefersDarkMode ? 'white' : 'black'}`}} >Upcoming Projects</p>
            </div>
            <Grid container spacing={2} style={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}}>
                <Grid item xs={6}>
                    <Item><CardComponent/></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item><CardComponent/></Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{backgroundColor:`${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`,marginTop:"50px"}}>
            <Grid item xs={6} >

                    <Grid container spacing={1} style={{height:"400px"}} >
                        <Grid item xs={6}>
                            <img src={review_bg} alt="review_img"></img>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={review_bg} alt="review_img"></img>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={review_bg} alt="review_img"></img>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={review_bg} alt="review_img"></img>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={6} style={{height:"410px"}}  >
                <img src={galary_5} width="contain" alt="review_img"></img>
                </Grid>
            </Grid>
            <Button variant="contained" size="medium" color="customButtonColorSecondary"  style={{marginLeft:"45%", marginTop: "10%"}} >
                Load More
            </Button>
        </div>
    </div>
  );
}
