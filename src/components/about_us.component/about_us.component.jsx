import React from 'react';
import about_us from '../../assets/images/about_us.webp';
import Button from '@mui/material/Button';
import styles from './about_us.styles.scss';

export default function AboutUs() {
    return (
            <div className='wrapper'>
                <div className='Image-container'>
                    <img src={about_us} alt="about_us" width="100%" />
                </div>
                <div className='Description'>
                    <h1 >About Us</h1>
                    <p style={{"marginTop":"65px"}}>Bring your vision to life with VIVID DESIGN. Since 2019, our professional, creative team has been designing the spaces that are most important to you. From our initial strategy shopping session to laying down the rugs on your new floors, we’ll lead the way with expert guidance.</p>
                    <p style={{"marginTop":"60px"}}>No matter the size of the project, the goal is always the same: to make your personal style shine. We provide new inspiration and ideas, while incorporating elements of your liking into every concept we present. Schedule a consultation with us today and feel the VIVID DESIGN difference.</p>
                    <Button variant="contained" size="medium" style={{"marginTop":"60px"}}>Learn More</Button>
                </div>
            </div>
    );
}