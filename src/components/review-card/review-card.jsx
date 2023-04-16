import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ReviewCard({data}) {

    function copyToClipboard(event) {
        // Get the text field
        let copyText = event.target.getAttribute('value');

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);
        event.target.innerText = "Link Copied"
    }

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="iframe"
                    height="300"
                    src={data?.link}
                    alt="green iguana"
                    allowFullScreen={true}
                    autoPlay
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data?.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx = {{display: {xs: 'block', sm: 'block', md: 'none'}}} md={0} value={data.link} href={`whatsapp://send?text=${data.link}`} data-action="share/whatsapp/share" target="_blank" size="small" color="primary">
                    Share
                </Button>
                <Button sx = {{display: {xs: 'none', sm: 'none', md: 'block'}}} md={0} value={data.link} onClick={copyToClipboard} size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}