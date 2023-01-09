import './homepage.styles.scss';
import React, { Component }  from 'react';
import AboutUs from "../../components/about_us.component/about_us.component";
import Intro from "../../components/intro.component/intro.component";
import Projects from "../../components/projects.component/projects.component";
import project_1 from '../../assets/images/project_1.webp';
import Schedule_consultation from "../../components/schedule_consultation.component/schedule_consultation.component";
import { Schedule } from '@mui/icons-material';

export default function Homepage() {
  return (
    <div className="homepage">
      <Intro />
      <AboutUs />
      <Projects data={{"Header":"Residential Design","Sub_header":"The Little Touches that Make All the Difference","Content":"Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started."}} image={project_1}/>
      <Projects data={{"Header":"Residential Design","Sub_header":"The Little Touches that Make All the Difference","Content":"Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started."}} image={project_1}/>
      <Projects data={{"Header":"Residential Design","Sub_header":"The Little Touches that Make All the Difference","Content":"Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started."}} image={project_1}/>
      <Schedule_consultation />
    </div>
  );
}