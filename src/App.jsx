
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/modules/theme'; 
import AppBar from './modules/components/AppBar'


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ThemeProvider theme={theme}>
    <div>
      <AppBar id="nav-bar" />
      <Grid container>
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <main >
        <Outlet />
      </main>
    </div>
    </ThemeProvider>
  );
}



export default App;
