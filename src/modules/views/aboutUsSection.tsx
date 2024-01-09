import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Button from '../components/Button';
const AboutUs: React.FC = () => {
  return (
    <Container sx={{ mt: 6 , color: 'black'}}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        About Us
      </Typography>
      
      <Typography variant="body1" align="center" paragraph sx={{maxWidth:'80%', pb: 4, margin:'auto'}}>
        Welcome to Plant Guy Consulting, your trusted partner in cultivating greenery within office spaces. We specialize in providing expert care, personalized advice, and the finest plant selections for your workplace.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img src="/images/plantGuyLogo.webp" alt="Plant Guy Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Box sx={{maxWidth: '80%', margin: 'auto'}}>

      
      <Typography variant="body1" align="center" paragraph>
        At Plant Paradise, we cultivate joy, create botanical beauty, and champion sustainable living. Our journey began with a simple idea: to share the boundless benefits of plants with the world.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
      We go beyond aesthetics. We are dedicated to enhancing your office environment by offering comprehensive plant care services, and providing insight on plant care and placement in order to curate a sustainable selection of the best plants for your unique space.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
      Our team is passionate about transforming your office spaces into lively hubs, where plants thrive, employees flourish, and customers keep coming back. From selecting the perfect plants that complement your workspace to providing ongoing care, we ensure your green companions contribute to a healthier and more inspiring work environment.
      </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' , border: 'solid black', maxWidth: 250, margin: 'auto', mb: 5}}>
        <Button href='/about' variant="contained" color="primary" size="large">
          Meet Our Team
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;