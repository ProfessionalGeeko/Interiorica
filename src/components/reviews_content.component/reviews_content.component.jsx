import React, { useState, useEffect } from "react";
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
import useHttp from "../../hooks/useHttp";
import {addCloudinaryPrefix} from "../../utils";

export default function Reviews_content() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [upcomingProject, setUpcomingProject] = useState([]);
    const [projectImagesList, setProjectImagesList] = useState([]);
    const {isLoading, sendRequest} = useHttp();

    const handleUpcomingProjectData = (data) => {
        setUpcomingProject(data);
    }

    const handleProjectImagesData = (data) => {
        setProjectImagesList(data.data);
    }

    useEffect(() => {
        sendRequest({method: 'GET', url: '/get-data?documentName=upcomingProject'}, handleUpcomingProjectData);
        sendRequest({method: 'GET', url: '/get-data?documentName=upcomingProjectImages'}, handleProjectImagesData);
    }, [sendRequest])

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
        <div id="Upcomming Projects" className="card-div">
            <div className="card-header">
                <p style={{color: `${prefersDarkMode ? 'white' : 'black'}`}} >Upcoming Projects</p>
            </div>
            <Grid container spacing={2} style={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}}>
                <Grid item xs={6} style={{backgroundColor:'transparent'}}>
                    <Item style={{height:'100%',display: 'flex',backgroundColor:'transparent',boxShadow:'none',margin:'unset'}}><CardComponent  data={{date: upcomingProject.projectOneDate, image: upcomingProject.projectOneImage, title: upcomingProject.projectOneTitle}}/></Item>
                </Grid>
                <Grid item xs={6} style={{backgroundColor:'transparent'}}>
                    <Item style={{height:'100%',display: 'flex',backgroundColor:'transparent',boxShadow:'none'}}><CardComponent data={{date: upcomingProject.projectTwoDate, image: upcomingProject.projectTwoImage, title: upcomingProject.projectTwoTitle}}/></Item>
                </Grid>
            </Grid>
            <div style={{display:'flex',marginTop:"50px",marginLeft:'10%'}}>
                <Grid container spacing={2} style={{backgroundColor:`${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`,margin:'auto'}}>
                    <Grid item xs={6} >
                            <Grid container spacing={1} style={{height:"400px"}} >
                                {
                                    projectImagesList.slice(0,Math.min(4, projectImagesList.length)).map(url => (
                                        <Grid item xs={6}>
                                    <img src={addCloudinaryPrefix(url)} loading="lazy" alt="review_img"></img>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1} style={{height:"400px"}} >
                            {
                                projectImagesList.length > 4 && projectImagesList.slice(4).map(url => (
                                    <Grid item xs={6}>
                                    <img src={addCloudinaryPrefix(url)} width="contain" alt="review_img"></img>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
            </Grid>
            </div>
        </div>
    </div>
  );
}
