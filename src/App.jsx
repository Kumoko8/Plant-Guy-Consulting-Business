
import React from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import myTheme from './modules/theme.ts'; // Rename the imported theme

function App() {
  const isSmallScreen = useMediaQuery((theme) => myTheme.breakpoints.down('sm')); // Use the renamed theme

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <AppAppBar />
        </Grid>
      </Grid>
      <main className={isSmallScreen ? "mx-1" : "mx-3"}>
        {/* Adjust the className based on screen size */}
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
