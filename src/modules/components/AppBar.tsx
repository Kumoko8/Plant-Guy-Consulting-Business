import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from './Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{backgroundColor: 'black'}}>
        <Toolbar >
          <Link to='/'>
          <Typography sx={{color: 'white'}} variant="h5" component="div">
            Plant Guy
          </Typography>
          </Link>
          <Box sx={{ display: 'flex', marginLeft: 'auto', gap: '20px' }} >

          <Link to="/about" style={{ textDecoration: 'none', color: 'White', margin: ' 10px' }}>
          <Typography>
            About Us
          </Typography>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgb(255, 135, 165)', padding: '8px 15px', borderRadius: '5px' }}>
          <Typography>
            Consultation
          </Typography>
        </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
   
      </Container>
      <ScrollTop {...props}>
        <Fab sx={{color:'rgb(255, 135, 165)', backgroundColor: 'rgb(0, 29, 31)'}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}