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

export default function Reviews_content() {
  const [index, setIndex] = useState(0);

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
    <div className="Reviews-section">
      <div className="carousel-div">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="Item">
              <p>
                Well if you want team of professional to make your flat a HOME
                then this is it.
                <br />
                A very well dedicated and creative workforce which not only
                understands client's needs but also give the client the best
                approach for the work.
                <br />
                <b>THANK YOU TEAM Interiorica.</b>
              </p>
            </div>
            <Carousel.Caption>
              <div className="Item-caption">
                <h3>Mr Suraj Mundra</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Item">
              <p>
              Interiorica Design was recommended to me by a friend and it turned out
                to be a great decision for me.The quality and dedication you get
                is something I never seen before. Even after the services are
                given they make sure that everything at its best.
                <br />
                So I would really recommend Interiorica, you won't be
                disappointed.
              </p>
            </div>
            <Carousel.Caption>
              <div className="Item-caption">
                <h3>Ms Mansi Waghela</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Item">
              <p>
                One of the professional and creative interior designer in city.
                <br />
                Services are tremendous and punctual.
                <br />
                Looking ahead with more work
                <br />
              </p>
            </div>
            <Carousel.Caption>
              <div className="Item-caption">
                <h3>Mr Bhavesh Purohit</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
        <div className="card-div">
            <div className="card-header">
                <p>Upcomming Events</p>
            </div>
            <Grid container spacing={2} style={{backgroundColor:"#1E2025"}}>
                <Grid item xs={6}>
                    <Item><CardComponent/></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item><CardComponent/></Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{backgroundColor:"#1E2025",marginTop:"50px"}}>
            <Grid item xs={6} >
                
                    <Grid container spacing={1} style={{height:"400px",backgroundColor:"#1E2025"}} >
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
            <Button variant="contained" size="medium"  style={{marginLeft:"40%"}} >
                Load More
            </Button>
        </div>
    </div>
  );
}
