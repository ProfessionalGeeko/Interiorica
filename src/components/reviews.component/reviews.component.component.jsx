import React from 'react';
import Button from '@mui/material/Button';
import styles from './reviews.styles.scss';
import review_bg from '../../assets/images/Reviews_background.webp';
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Reviews() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
            // create a wrpapper with a background image
            <div id="Process" className='Reviews-wrapper' style={{backgroundImage: `url(${review_bg})`,backgroundRepeat:"no-repeat"}} >
                
                <div className='Reviews-header'>Real Life Reviews</div>
                <div className='Reviews-sub-header'><h5>The Word on the Street</h5></div>
                <div className='Reviews-content'>
                    <p>Our satisfied clients keep us alive and prospering. We are happy to be able to provide all of our clients with unparalleled services. We’re pleased to say that due to our efforts, our clients always come back to us for more. Read below to find out all the wonderful things our clients have to say about us. We are sure you will soon be convinced to give us a call.</p>
                </div>
            </div>

    );
}