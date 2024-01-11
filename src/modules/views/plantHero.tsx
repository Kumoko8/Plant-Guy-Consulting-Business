import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../../index.css'


function PlantHero() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div >



      <img src='/images/newBack.png' style={{ position: 'relative', display: 'grid', width: '100%', maxHeight: '30em', objectFit: 'cover' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Adjust text color
          textAlign: 'center',
          padding: '1rem',
          mt: -40,
          pb: 10,
          backgroundColor: 'none',
          position: 'relative'
        }}
      >
        <div id="hero" style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 0, color: 'white' }}>
            Plant Guy
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
            Consulting
          </Typography>
          <style>
          {`
          @media (max-width: 800px) {
            #hero {
              text-align: center;
            }

            #hero h1 {
              font-size: 2em;
            }
          }
        `}
      </style>


        </div>
        <div id='sub'>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            display: 'flex',
            pb: 5,
            margin: 'auto', // Center horizontally
            textAlign: 'center',
            maxWidth: '95%' // Center text
          }}
        >
          Indoor Plants | Succulents | Accessories
        </Typography>
        <style>
          {`
          @media (max-width: 800px) {
            #sub {
              text-align: center;
            }

            #sub h4 {
              font-size: 1em;
            }
          }
        `}
      </style>
        </div>
      </Box>



    </div>
  );
}

export default PlantHero;

