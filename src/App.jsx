
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

// import Projects from './components/Projects'

    function App() {
      // The Outlet component will conditionally swap between the different pages according to the URL
      return (
        <>
        <header>
          <p>Taylor Golden </p>
          <Nav/>
        </header>
          <main className="mx-3">
            <Outlet />
          </main>
          <footer>

          </footer>
        </>
        //jsx fragments
      );
    }
      
  

export default App;
