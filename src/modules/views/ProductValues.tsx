import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="Contact_back.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 , zIndex: -1}}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="DnD.png"
                alt="suitcase"
                sx={{ height: 205 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                D&D Character Generator
              </Typography>
              <Typography variant="h5">
                {
                  'Dive into a new world with your own role play character. '
                }
                {
                  'Get ready to roll the dice.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="Kumo_Writes.png"
                alt="graph"
                sx={{ height: 205 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                INVIZ Productivity
              </Typography>
              <Typography variant="h5">
                {
                  'Transform the every day things you have to do into a wonderful journey '
                }
                {'you want to be a part of.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="Collectibles.png"
                alt="clock"
                sx={{ height: 205 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Collectibles 
              </Typography>
              <Typography variant="h5">
                {'Keep all the antiques and novelties you treasure in one place '}
                {'and share them with others.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
