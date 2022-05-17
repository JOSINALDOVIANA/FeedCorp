
import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/appbar';
function App() {
  
 
 
  return (
    <React.Fragment>
      <CssBaseline />
      <ResponsiveAppBar/>
      <Container sx={{marginTop:"3px"}} fixed>
        <Box sx={{ flexGrow: 1, height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default App;
