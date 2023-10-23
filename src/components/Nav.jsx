import { Link, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Navigation({ currentPage }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6} md={3}>
        <li className="nav-item">
          <Link to="/AboutMe" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
            About Me
          </Link>
        </li>
      </Grid>
      <Grid item xs={6} md={3}>
        <li className="nav-item">
          <Link to="/Portfolio" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </Link>
        </li>
      </Grid>
      <Grid item xs={6} md={3}>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </li>
      </Grid>
      <Grid item xs={6} md={3}>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </Link>
        </li>
      </Grid>
    </Grid>
  );
}

export default Navigation;



// function NavTabs() {
//   const currentPage = useLocation().pathname;

//   return (
//     <ul id='nav-bar'>
//       <li className="nav-item">
//         <Link
//           to="/AboutMe"
//           className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Portfolio"
//           className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Contact"
//           className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Resume"
//           className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </Link>
//       </li>
  
//     </ul>
//   );
// }

// export default NavTabs;