import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button} from "@mui/material";

import ReviewCard from "./review-card";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import {useState} from "react";

export default function ReviewCardContainer() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [ cutoffLimit, setCutoffLimit ] = useState(3);

    const cutoffLimitHandler = () => {
        if (cutoffLimit == 3){
            return setCutoffLimit(youtubeCardList.length);
        }
        return setCutoffLimit(3);
    }

    const youtubeCardList = [
        {
            link: 'https://www.youtube.com/embed/OtRWAI7eSFo',
            title: 'Lizard',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica'
        },
        {
            link: 'https://www.youtube.com/embed/OtRWAI7eSFo',
            title: 'Lizard',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica'
        },
        {
            link: 'https://www.youtube.com/embed/OtRWAI7eSFo',
            title: 'Lizard',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica'
        },
        {
            link: 'https://www.youtube.com/embed/OtRWAI7eSFo',
            title: 'Lizard',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                'species, ranging across all continents except Antarctica'
        },
    ];
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}}>
            <Grid backgroundColor={`${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`} py={1} px={12} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center" item xs={4} sm={8} md={12}>
                    <Typography mt={2} component="h2" fontWeight="500" variant="h2" >
                        Projects
                    </Typography>
                    <Typography align="justify" mt={2} component="h4" variant="h4" >
                        The Little Touches that Make All the Difference
                    </Typography>
                    <Typography align="justify" fontWeight="normal" mt={2} component="p" variant="h6" >
                        Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started.
                    </Typography>
                </Grid>
                {
                    youtubeCardList.slice(0, cutoffLimit).map(data => (
                        <Grid item xs={2} sm={4} md={4}>
                            <ReviewCard data={data} />
                        </Grid>
                    ))
                }
            </Grid>
            <Box
                component="div"
                padding={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Button color="customButtonColorSecondary" variant="contained" onClick={cutoffLimitHandler}>
                    {
                        cutoffLimit === 3 ? 'See more' : 'See less'
                    }
                </Button>
            </Box>
        </Box>
    );
}