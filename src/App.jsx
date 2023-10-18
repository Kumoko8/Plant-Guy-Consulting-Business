
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/discord'
import 'react-social-icons/facebook'
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
// import Projects from './components/Projects'

    function App() {
      // The Outlet component will conditionally swap between the different pages according to the URL
      return (
        <ThemeProvider theme={theme}>
          <header>
            <h1> Taylor Golden </h1>
            <Nav/>
          </header>
            <main className="mx-3">
              <Outlet />
            </main>
            <footer>
            <SocialIcon href="https://www.instagram.com/taylor.golden.33"
  url="www.instagram.com" target="_blank" />
              <SocialIcon href="https://www.linkedin.com/in/taylor-golden-212b19257"url="www.linkedin.com"target="_blank" />
              <SocialIcon href="https://www.github.com/kumoko8"url="www.github.com"target="_blank" />
              <SocialIcon href="https://www.facebook.com/taylor.golden.33"url="www.facebook.com"target="_blank" />
          
            </footer>
          
        </ThemeProvider>
        //jsx fragments
      );
    }
      
  

export default App;
