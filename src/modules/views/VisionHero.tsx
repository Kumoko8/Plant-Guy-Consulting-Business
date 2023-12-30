import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../../../src/index.css'
import { Link } from 'react-router-dom'

function VisionHero() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div>


      <Container component="section" sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height:'auto', width:'100%', position: 'relative' }}>
  
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            color: 'white', // Adjust text color
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 0, color: 'black', fontFamily:'Titan One'}}>
            PLANT GUY
          </Typography>

          {/* Add any additional content or components as needed */}
        </Box>

      </Container>
     
        <Typography variant="h2" sx={{ marginBottom: 2 }}>

          Plant Consultant & Enthusiast

        </Typography>
     
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
      Indoor Plants | Succulents | Accessories
      </Typography>
      {/* <Typography variant="h4" sx={{ marginBottom: 2 }}>
     Illustration illuminates the heart. Education illuminates the mind. I bring them together by creating web development
  </Typography> */}
    </div>
  );
}

export default VisionHero;

