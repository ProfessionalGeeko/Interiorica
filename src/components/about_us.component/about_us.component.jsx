import React, {useEffect, useState} from 'react';
import about_us from '../../assets/images/about_us.webp';
import Button from '@mui/material/Button';
import styles from './about_us.styles.scss';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from "@mui/material/useMediaQuery";
import useHttp from "../../hooks/useHttp";
import { aboutUsTitle, aboutUsDescriptionOne, aboutUsDescriptionTwo } from '../../constants';

export default function AboutUs() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const { isLoading, sendRequest } = useHttp();
    const [ aboutUsImage, setAboutUsImage ] = useState(null);

    const handleAboutUsData = (data) => {
        setAboutUsImage(data.aboutUsMiddle)
    }

    useEffect(() => {
        sendRequest({method: 'GET', url: '/get-data?documentName=aboutUs'}, handleAboutUsData)
    }, [sendRequest])


    return (
            <div id="About" style={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}} className='wrapper'>
                <div className='Image-container'>
                    {isLoading ? <CircularProgress color="secondary" /> : <img src={aboutUsImage} alt="about_us" width="100%" />}
                </div>
                <div className='Description'>
                    <h1>{aboutUsTitle}</h1>
                    <p style={{"marginTop":"65px"}}>{aboutUsDescriptionOne}</p>
                    <p style={{"marginTop":"60px"}}>{aboutUsDescriptionTwo}</p>
                    <Button variant="contained" color="customButtonColor" size="medium" style={{"marginTop":"60px"}}>Learn More</Button>
                </div>
            </div>
    );
}