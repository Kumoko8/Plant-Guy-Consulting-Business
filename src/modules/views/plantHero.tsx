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
          backgroundColor: 'none',
          position: 'relative'
        }}
      >
        <div style={{alignContent: 'center', justifyContent: 'center'}}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
            Plant Guy
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
            Consulting
          </Typography>
        </div>
        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            pb: 5,

            margin: 'auto', // Center horizontally
            textAlign: 'center', // Center text
          }}
        >
          Indoor Plants | Succulents | Accessories
        </Typography>
      </Box>



    </div>
  );
}

export default PlantHero;

