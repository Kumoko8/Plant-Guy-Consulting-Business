import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Button from '../modules/components/Button';
import PhotoGalleryButton from '../modules/components/PhotoGalleryButton'


const InfoPage = () => {
  return (
    <Container sx={{ mt: 6, color: 'black' }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Our Approach to Plant Care
      </Typography>

      <Typography variant="body1" paragraph>
        At Plant Guy, our mission is to create thriving, green environments within office spaces. Here's a glimpse into how we do what we do:
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Types of Plants We Love
      </Typography>
      

      <Typography variant="body1" paragraph>
        We specialize in selecting a diverse range of indoor plants that not only enhance the aesthetics of your workspace but also thrive in indoor environments. From low-maintenance succulents to air-purifying foliage, our curated selection suits every office setting.
      </Typography>
      <PhotoGalleryButton />
      <Typography variant="h4" component="h4" gutterBottom>
        Regular Care Schedule
      </Typography>

      <Typography variant="body1" paragraph>
        Our team follows a meticulous care schedule tailored to the specific needs of each plant. From watering routines to pruning and fertilizing, we ensure that every plant receives the attention it deserves. Our goal is to keep your green companions vibrant and healthy year-round.
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Our Philosophy on Indoor Plant Care
      </Typography>

      <Typography variant="body1" paragraph>
        We believe in fostering a symbiotic relationship between people and plants. Indoor spaces can sometimes lack the natural conditions that plants thrive in, but with the right care, we bring the benefits of nature indoors. Our philosophy is rooted in creating not just beautiful, but also sustainable, plant-filled environments that contribute to the well-being of your office.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <img src="/images/" alt="Plant Care image" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    <Button variant="contained" href='/'>
Back
    </Button>
    </Container>
  );
};

export default InfoPage;
