import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import Error from './pages/Error';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact';
import Artwork from './pages/Artwork.jsx';
import Logos from './pages/Logos';
import Custom from './pages/Custom'
import Animations from './pages/Animations'
import Learning from './pages/Learning'
import Home from './pages/Home';
import Resume from './pages/Resume'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Artwork',
        element: <Artwork/>,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Animations',
        element: <Animations />,
      },
      {
        path: '/Custom',
        element: <Custom />,
      },
      {
        path: '/Learning',
        element: <Learning />,
      },
      {
        path: '/Logos',
        element: <Logos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
