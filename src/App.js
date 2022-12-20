import React from 'react';
import './App.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/navbar/navbar.component';
import ContactUsForm from './components/contactusForm/contactus.component';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
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
      <ContactUsForm/>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
