import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import LoopVideo from '../components/LoopVideo';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
  zIndex: 0
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 0,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    zIndex: -1
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: '../public/kiroLogo.png',
    title: 'Characters',
    width: '40%',
  },
  {
    url: '../public/NVZlogo.png',
    title: 'Logos',
    width: '20%',
  },
  {
    component: <LoopVideo/>,
    title: 'Animation',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400',
    title: 'Designs',
    width: '38%',
  },
  {
    url: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400',
    title: 'Pencil',
    width: '38%',
  },
  {
    url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400',
    title: 'Pen',
    width: '24%',
  },
 
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Featured Artwork
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
           
          >
            {image.component || (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <ImageBackdrop className="imageBackdrop" />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'common.white',
                    zIndex: 12
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className="imageTitle"
                    sx={{
                      zIndex: 2, 
                    }}
                  >
                    {image.title}
                    <div className="imageMarked" />
                  </Typography>
                </Box>
              </>
            )}
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}