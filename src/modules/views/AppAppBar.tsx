import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

function AppAppBar() {
  return (
    <div>
      <AppBar  position="fixed">
        <Toolbar sx={{ marginLeft: -3, backgroundColor: 'white'}}>
        <Link href="/">
          <Box sx={{}}>
            <img style={{ maxHeight: '4.7rem', width: 'auto', objectFit: 'contain' }} src="/images/kiiro-logo.webp" alt="Logo" />
          </Box>
          </Link>
          <Box sx={{ flexGrow: 5, justifyContent: 'center'}} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link
              variant="h5"
              underline="none"
              href="/about"
              sx={{ marginRight: 4}}
            >
              {'About Us'}
            </Link>
      
            <Link
              variant="h5"
              underline="none"
              href="/contact"
            >
              {'Consultation'}
            </Link>
           
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
