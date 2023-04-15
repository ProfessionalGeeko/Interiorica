import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import upcomming_events from '../../assets/images/upcoming_events.webp';
import './card.component.styles.scss';

export default function CardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{"marginLeft":"10%","marginRight": "10%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={upcomming_events}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WARDROBE DESIGN WORKSHOP
          </Typography>
          <Typography variant="body2" color="text.secondary">
            TUE, MAY 20  | ZOOM
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button color="customButtonColorSecondary" variant="contained" size="medium">
        Details
       </Button>
      </CardActions>
    </Card>
  );
}