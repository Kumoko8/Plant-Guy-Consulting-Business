
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/modules/theme'; // Import your custom theme


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid container>
        <Grid item xs={12}>
          <AppAppBar />
        </Grid>
      </Grid>
      <main className="mx-3">
        <Outlet />
      </main>
      <AppFooter />
    </div>
    </ThemeProvider>
  );
}



export default App;
