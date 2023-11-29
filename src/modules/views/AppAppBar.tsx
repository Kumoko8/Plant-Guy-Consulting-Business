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
            <img style={{ height: '4.7rem', }} src="kiroLogo.PNG" alt="Logo" />
          </Box>
          </Link>
          <Box sx={{ flexGrow: 5, justifyContent: 'center'}} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
            >
              {'Contact Me'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/portfolio"
              sx={{ color: 'secondary.main', ml: 2 }}
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
