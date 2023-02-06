import React from 'react';
import Button from '@mui/material/Button';
import  './schedule_consultation.styles.scss';

export default function Projects({data, image}) {
    return (
            <div className='project_wrapper'>
                <div className='consult_descr'>
                    <p>Ready to get started? Contact us today to make your design dreams a reality.</p>
                </div>
                <Button variant="contained" size="medium"  className="Schedule_consult">Schedule a Consultation</Button>
            </div>
    );
}