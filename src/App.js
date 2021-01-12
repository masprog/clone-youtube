import React from 'react';
import { Button, ThemeProvider, createMuiTheme, makeStyles  } from '@material-ui/core';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
import Home from './home';

const useStyles = makeStyles({

   root: {
     background: 'red',
     height: '100vh'
   }

})

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      
    },
  });

  const classes = useStyles();

  return (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);
}

export default App;
