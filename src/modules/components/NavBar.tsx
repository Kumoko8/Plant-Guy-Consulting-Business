import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#2196f3', padding: '10px', color: 'white' }}>
      <div style={{ margin: '0 auto', maxWidth: '960px', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          About
        </Link>
        {/* Add more navigation items as needed */}
      </div>
    </nav>
  );
}

export default NavBar;
