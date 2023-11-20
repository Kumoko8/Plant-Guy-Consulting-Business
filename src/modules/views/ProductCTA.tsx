import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
              my: -4,
              borderRadius: 8,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'inline-flex' }, position: 'relative' }}
        >
       
          <Box
            component="img"
            src="../public/kiiro-lite.PNG"
            alt="call to action"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              position: 'absolute',
              top: -120,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 400,
              height: 500,
              borderRadius: 8
            }}
          />
        </Grid>
      </Grid>
      
    </Container>
  );
}

export default ProductCTA;
