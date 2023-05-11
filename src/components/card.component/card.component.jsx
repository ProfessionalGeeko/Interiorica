import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import upcomming_events from '../../assets/images/upcoming_events.webp';
import './card.component.styles.scss';
import {addCloudinaryPrefix} from "../../utils";

export default function CardComponent({data}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{"margin":'auto',"height":"500px"}}>
      
        <img src={addCloudinaryPrefix(data.image)} alt="upcomming_events" style={{"height":"300px","width":"350px"}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {data.date}
          </Typography>
        </CardContent>
      
      <CardActions style={{display:'flex',marginTop:"20px"}}>
      <Button color="customButtonColorSecondary" variant="contained" size="medium" style={{"margin":"auto"}}>
        Details
       </Button>
      </CardActions>
    </Card>
  );
}