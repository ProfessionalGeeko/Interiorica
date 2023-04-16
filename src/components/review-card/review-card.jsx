import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ReviewCard() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="iframe"
                    height="300"
                    src="https://www.youtube.com/embed/7E3l7mZEUos"
                    // image="https://static.wixstatic.com/media/9cd3c8e697354e27bb900945455bcd4b.jpg/v1/fill/w_850,h_1175,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/9cd3c8e697354e27bb900945455bcd4b.jpg"
                    alt="green iguana"
                    allowFullScreen={true}
                    autoPlay
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}