import React, {useEffect} from 'react';
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
import Sticky from './components/sticky.component/sticky.component.jsx';
import YoutubeCardContainer from "./components/youtube-card/youtube-card-container";
import {Divider} from "@mui/material";

import Layout from './pages/Layout/layout';

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
      <Layout/>
      <CssBaseline />
      <Sticky/>
    </ThemeProvider>
    
  );
}

export default App;
