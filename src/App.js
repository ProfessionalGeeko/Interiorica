import React, {useEffect, useState} from 'react';
import './App.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/navbar/navbar.component';
import ContactUsForm from './components/contactusForm/contactus.component';
import AboutUs from "./components/about_us.component/about_us.component";
import Intro from "./components/intro.component/intro.component";
import Projects from "./components/projects.component/projects.component";
import project_1 from './assets/images/project_1.webp';
import ScheduleConsultation from "./components/schedule_consultation.component/schedule_consultation.component";
import Reviews from './components/reviews.component/reviews.component.component';
import ReviewsContent from './components/reviews_content.component/reviews_content.component';
import Sticky from './components/sticky.component.jsx';
import ReviewCard from "./components/review-card/review-card";
import ReviewCardContainer from "./components/review-card/review-card-container";
import CustomerReview from "./components/customer-review/CustomerReview";
import {Divider} from "@mui/material";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.paddingRight = 0;
    bodyStyle.minWidth = '600px';
    bodyStyle.width = '100%';
    bodyStyle.height = '100%';
    bodyStyle.backgroundColor = `${prefersDarkMode ? '#ffff': '#ffff'}`
  }, []);
  

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
            customButtonColor: {
                main: '#F56D91',
                contrastText: "#FFF"
            },
            customButtonColorSecondary: {
                main: '#8D8DAA',
                contrastText: '#FFF',
            },
          mode: prefersDarkMode ? 'dark' : 'light',
          fontFamily: [
            '-apple-system',
            'sans-serif'
          ].join(','),
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Intro />
        <Divider/>
      <AboutUs />
      <Projects data={{"Header":"Residential Design","Sub_header":"The Little Touches that Make All the Difference","Content":"Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started."}} image={project_1}/>
      <Projects data={{"Header":"Residential Design","Sub_header":"The Little Touches that Make All the Difference","Content":"Sometimes the little things make all the difference. With our Pre-Construction Consultation services, we’ll be able to transform your space and set the mood. Whatever your interior design needs may be, our team of experts and architects are here to make sure you feel at home in the space you live or work in. Contact us today and get started."}} image={project_1}/>
        <Divider/>
        <ReviewCardContainer/>
        <Divider/>
      <ScheduleConsultation />
        <Divider/>
        {/*<CustomerReview/>*/}
      <Reviews />
        <Divider/>
      <ReviewsContent />
        <ContactUsForm />
      <CssBaseline />
      <Sticky/>
    </ThemeProvider>
    
  );
}

export default App;
