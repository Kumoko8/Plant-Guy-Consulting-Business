import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../modules/components/Typography';
import withRoot from '../modules/withRoot';
import AppAppBar from '../modules/views/AppAppBar';

function AboutMe() {
    return (
        <React.Fragment>
<AppAppBar/>
        <div>

   
        <Container component="section" sx={{ mt: -6, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
          {/* Video backdrop */}
          <img 
          src="/GoldenFamily.jpg"
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}/>
           
        
    
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
              padding: '2rem',
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
              Taylor Golden
            </Typography>
            
            {/* Add any additional content or components as needed */}
          </Box>
          
        </Container>
        <Typography variant="h5" sx={{ margin: 5, mt: 15, mb: 0 }}>
        Web Developer | Illustrator | Educator | Family Man
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2, padding: 10, width: '100%', display: 'flex', alignContent:'center',  justifyContent:'center', textAlign: 'center' }}>
            <p style={{justifyContent:'center', display: 'flex'}}>

         I seek to create content that illuminates the heart and mind. I am driven by the passion to represent the invisible God in as many creative ways as possible. Things we can't see are just as worthy of curiosity as the things that we can. Seven years experience teaching middle school math and science gives me insight into how people think & learn and has developed a love for uncovering the intricacies of life.   Our family is based in Austin, TX and we enjoy playing sports, growing our own food, and crafting! 
            </p>
      </Typography>
      <Typography sx={{mb: 5}}>

      <p>
Illustration illuminates the heart. Education illuminates the mind. Technology brings them together.
</p>
      </Typography>

      </div>

        </React.Fragment>

    );

}
export default withRoot(AboutMe);
