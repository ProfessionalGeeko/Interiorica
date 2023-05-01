import React, {useEffect, useState} from 'react';
import './App.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Sticky from './components/sticky.component/sticky.component'
import Layout from "./pages/Layout/layout";

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
