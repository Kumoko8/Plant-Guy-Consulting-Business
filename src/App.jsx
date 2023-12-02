
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AppFooter from './modules/views/AppFooter';


import theme from './theme';
import AppAppBar from './modules/views/AppAppBar';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>

      <Grid container>
        <Grid item xs={12}>
          <AppAppBar/>
        </Grid>
      </Grid>
      <main className="mx-3">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  

    //jsx fragments
  );
}



export default App;
