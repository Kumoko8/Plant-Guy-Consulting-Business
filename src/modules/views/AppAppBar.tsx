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
      <AppBar  position="fixed">
        <Toolbar sx={{ marginLeft: -3}}>
        <Link href="/">
          <Box sx={{}}>
            <img style={{ maxHeight: '4.7rem', width: 'auto', objectFit: 'contain' }} src="/images/kiiro-logo.webp" alt="Logo" />
          </Box>
          </Link>
          <Box sx={{ flexGrow: 5, justifyContent: 'center'}} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link
              color="inherit"
              variant="h5"
              underline="none"
              href="/about"
              sx={{ marginRight: 4}}
            >
              {'About'}
            </Link>
            <Link
              color="inherit"
              variant="h5"
              underline="none"
              href="/projects"
              sx={{  mr: 4 }}
            >
              {'Projects'}
            </Link>
            <Link
              color="inherit"
              variant="h5"
              underline="none"
              href="/contact"
              sx={{color: 'secondary.main'}}
            >
              {'Contact'}
            </Link>
           
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
