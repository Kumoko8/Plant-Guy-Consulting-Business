import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {

  return (
    <Container component="section" sx={{ mt: -6, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
              my: 0,
              borderRadius: 8,
            }}
          >
            <Box sx={{ maxWidth: 400 }} >
              <Box sx={{maxWidth: 400, maxHeight: 300}}
              component="img"
              src="/linkedin.png"
              />
              
              <Typography variant="h2" component="h2" gutterBottom>
                My Vision
              </Typography>
              <Typography variant="h5" sx={{marginBottom: 2}} >
                I seek to create dynamic experiences that illuminate the mind and heart
              </Typography>
              <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                Skills: 
              </Typography>
              <Typography variant="h5">
                React, JavaScript, WordPress, Figma, HTML, CSS, Databases
              </Typography>
            
            </Box>
      
          </Box>
         
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="../public/kiiro-lite.PNG"
            alt="encountering the light"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              objectFit: 'contain',
              width: 500,
              borderRadius: 8,
              marginBottom: 3

            }}
          />
          </Grid>
      </Grid>
      
    </Container>
  );
}

export default ProductCTA;
