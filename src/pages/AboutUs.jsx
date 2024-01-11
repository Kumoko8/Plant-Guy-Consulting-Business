import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../modules/components/Typography';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';
import Button from '../modules/components/Button'

function AboutMe() {
  return (
    <React.Fragment>
      <div>
        <Container component="section" sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center',  position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              color: 'white',
              textAlign: 'center',
              padding: '2rem',
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'black' }}>
            We are just native Austinites who love to grow our own plants and food. 
            </Typography>
          </Box>
        </Container>
        <Typography variant="h6" sx={{ margin: 'auto', mt: 12, mb: 3, maxWidth: '50%' }}>
        After moving back to our hometown, we realized it can be a lot for both large and small business to keep track of their own live plants. And artificial plants just don't give the same vibe. 
        </Typography>

      </div>
        <Typography variant="h6" sx={{ color: 'black', marginBottom: 2, maxWidth: '50%', display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
          
 So we decided to start helping our favorite local spots with their plants, checking in on them, giving suggestions about water, lighting, and placement. We wanted to lighten the load for businesses by making sure they aren't having to replace plants every month. 
           
      
        </Typography>
        <Typography sx={{ mb: 5 }}>
          <p>
            
          </p>
        </Typography>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href='/'
          sx={{ mt: 5, mb: 5, border: 'solid' }}
        >
          Back
        </Button>

    </React.Fragment>
  );
}
export default withRoot(withScrollToTop(AboutMe));
