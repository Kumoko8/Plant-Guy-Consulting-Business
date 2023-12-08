import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom'

function VisionHero() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div>


      <Container component="section" sx={{ mt: -6, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
        {/* Video backdrop */}
        <video id='vision-video-back'autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/God-creates.mp4" type="video/mp4" />
          {/* Add additional source elements for different video formats if needed */}
          Your browser does not support the video tag.
        </video>

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
            CREATE & transform your mindset
          </Typography>

          {/* Add any additional content or components as needed */}
        </Box>

      </Container>
     
      <Link to='/about' 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ textDecoration: isHovered ? 'underline' : 'none', textDecorationColor: 'yellow'}} >
        <Typography variant="h2" sx={{ marginBottom: 2 }}>

          Taylor Golden

        </Typography>
      </Link>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Web Developer | Illustrator | Educator | Family Man
      </Typography>
      {/* <Typography variant="h4" sx={{ marginBottom: 2 }}>
     Illustration illuminates the heart. Education illuminates the mind. I bring them together by creating web development
  </Typography> */}
    </div>
  );
}

export default VisionHero;

