import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function VisionHero() {

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
              height: 647,
              
            }}
          >
            <Box sx={{ maxWidth: 400 }} >
              <Box sx={{maxWidth: 400, maxHeight: 300}}
              component="img"
              src="/linkedin.png"
              />
              
              <Typography variant="h2" component="h2" gutterBottom>
                Vision
              </Typography>
              <Typography variant="h5" sx={{marginBottom: 2}} >
                I seek to create dynamic experiences that illuminate the mind and heart. I am seriously motivated by growth even at the smallest levels and the unlimited potential planted in every person. My clients would describe me as calm, creative, and easy going.
              </Typography>
            </Box>
      
          </Box>
         
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/kiiro-lite.png"
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
              marginBottom: 3,


            }}
          />
          </Grid>
      </Grid>
      
    </Container>
  );
}

export default VisionHero;
