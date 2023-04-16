import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ReviewCard from "./review-card";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

export default function ReviewCardContainer() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid backgroundColor={`${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`} padding={1} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center" item xs={4} sm={8} md={12}>
                    <Typography mt={2} component="h2" fontWeight="500" variant="h2" >
                        Projects
                    </Typography>
                    <Typography align="justify" mt={2} mx={4} component="h4" variant="h4" >
                        The Little Touches that Make All the Difference
                    </Typography>
                    <Typography align="justify" fontWeight="normal" mt={2} mx={4} component="p" variant="h6" >
                        Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started.
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <ReviewCard/>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <ReviewCard/>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <ReviewCard/>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <ReviewCard/>
                </Grid>
            </Grid>
        </Box>
    );
}