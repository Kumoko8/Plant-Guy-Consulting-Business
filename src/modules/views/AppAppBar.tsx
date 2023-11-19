import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
           <img
           style={{height:'4.5rem'}} 
           src="/public/kiroLogo.png"/>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {'Contact Me'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/portfolio/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Projects'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
