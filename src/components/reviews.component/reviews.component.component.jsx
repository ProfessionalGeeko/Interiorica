import React from 'react';
import Button from '@mui/material/Button';
import styles from './reviews.styles.scss';
import review_bg from '../../assets/images/Reviews_background.webp';
import useMediaQuery from "@mui/material/useMediaQuery";
import { reviewTitle, reviewSubtitle, reviewContent } from '../../constants';

export default function Reviews() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
            // create a wrpapper with a background image
            <div id="Reviews" className='Reviews-wrapper' style={{backgroundImage: `url(${review_bg})`,backgroundRepeat:"no-repeat"}} >
                
                <div className='Reviews-header'>{reviewTitle}</div>
                <div className='Reviews-sub-header'><h5>{reviewSubtitle}</h5></div>
                <div className='Reviews-content'>
                    <p>{reviewContent}</p>
                </div>
            </div>
    );
}