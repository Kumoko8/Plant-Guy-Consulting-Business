import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../../index.css'

const mainProjects = [
  {
    imageSrc: '#',
    title: 'Plant Care',
    description: "We handle all routine maintainance on exisiting plants to keep them green and healthy. If you're tired of purchasing new plants to replace the dead ones.",
  },
  {
    imageSrc: '#',
    title: 'Advice',
    description: 'We provide tips on future purchases and placement of plants based on your lighting and space available.',
  },
  {
    imageSrc: '#',
    title: 'Plant Supply',
    description: 'We can help brighten your space and freshen your air with new plants to fit your exact needs.',
  },
];
const currentProjectsButton =
{
  label: 'Learn More',
  url: '/projects'
}
function PlantHero() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div>


      <Container component="section" sx={{ mt: -6, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>

        <img src='/images/bk.png' style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />


        {/* Content overlay */}
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
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
            Plant Guy 
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
            Consulting
          </Typography>
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
      </Container>


    </div>
  );
}

export default PlantHero;

