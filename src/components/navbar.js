import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  // Ho rimosso il <div>: cerca sempre di ridurre al minino il markup!

  return (
    <ul>
      <li>
          {/* <Link to="/dashboard" className='dash-link'>Dashboard</Link> */}
          <Link to="/" className='dash-link'>Dashboard</Link>
      </li>
      <li>
          <Link to="/calculator" className='calc-link'>Calculator</Link>
      </li>
    </ul>
  );
}

export default Navbar