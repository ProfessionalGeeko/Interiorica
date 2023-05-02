import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button} from "@mui/material";

import ReviewCard from "./youtube-card";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import {useState, useEffect} from "react";
import { projectPageTitle, projectPageSubtitle, projectPageDescription } from '../../constants';
import useHttp from "../../hooks/useHttp";
import CircularProgress from '@mui/material/CircularProgress';


export default function YoutubeCardContainer() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [ cutoffLimit, setCutoffLimit ] = useState(3);
    const [youtubeCardList, setYoutubeCardList] = useState([]);
    const { isLoading, sendRequest } = useHttp();

    const handleYoutubeData = (data) => {
        setYoutubeCardList(data.data);
    }

    useEffect(() => {
        sendRequest({method: 'GET', url: '/get-data?documentName=youtubeCards'}, handleYoutubeData)
    }, [sendRequest])

    const cutoffLimitHandler = () => {
        if (cutoffLimit === 3){
            return setCutoffLimit(youtubeCardList.length);
        }
        return setCutoffLimit(3);
    }

    return (
        <Box id="Projects" sx={{ flexGrow: 1, backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}}>
            <Grid backgroundColor={`${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`} py={1} px={12} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center" item xs={4} sm={8} md={12}>
                    <Typography mt={2} component="h2" fontWeight="500" variant="h2" >
                        {projectPageTitle}
                    </Typography>
                    <Typography align="justify" mt={2} component="h4" variant="h4" >
                        {projectPageSubtitle}
                    </Typography>
                    <Typography align="justify" fontWeight="normal" mt={2} component="p" variant="h6" >
                        {projectPageDescription}
                    </Typography>
                </Grid>
                {
                    !youtubeCardList.length ? <CircularProgress sx={{marginX: 'auto'}} color="secondary" /> :
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
                <Button hidden={youtubeCardList?.length <= 3} color="customButtonColorSecondary" variant="contained" onClick={cutoffLimitHandler}>
                    {
                        cutoffLimit === 3 ? 'See more' : 'See less'
                    }
                </Button>
            </Box>
        </Box>
    );
}