import React from 'react';
import {  ThemeProvider, createMuiTheme  } from '@material-ui/core';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
import Home from './home';



function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#1769aa',
      },
      
    },
  });

  return (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);
}

export default App;
