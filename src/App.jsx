
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


import theme from './theme';
import AppAppBar from './modules/views/AppAppBar';
import LoopVideo from './modules/components/LoopVideo';
// import Projects from './components/Projects'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <header>
            <AppAppBar/>
            <h1> Taylor Golden </h1>
          </header>
        </Grid>
      </Grid>
      <main className="mx-3">
        <Outlet />
      </main>
  

    </ThemeProvider>
    //jsx fragments
  );
}



export default App;
