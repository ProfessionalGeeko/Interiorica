import React from 'react';
import about_us from '../../assets/images/about_us.webp';
import Button from '@mui/material/Button';
import styles from './projects.styles.scss';

export default function Projects({data, image}) {
    return (
            <div className='project_wrapper'>
                <div className='parent'>
                    <div className='description'>
                        <div className='header'>
                        <p>{data.Header}</p>
                        </div>
                        <div className='sub-header'>
                            <span>{data.Sub_header}</span>
                        </div>
                        <div className='content'>
                        <p>
                        {data.Content}
                        </p>
                        </div>
                        
                    </div>
                    <div className='Project_Image_Container'>
                        <img src={image} alt="Project" width="100%" />
                    </div>
                </div>
                
            </div>
    );
}