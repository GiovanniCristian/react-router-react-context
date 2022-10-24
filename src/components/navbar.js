import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  return (
<div>
    <ul>
            <li>
                <Link to="/calculator" className='calc-link'>Calculator</Link>
            </li>
            <li>
                <Link to="/dashboard" className='dash-link'>Dashboard</Link>
            </li>
    </ul>
</div>
  )
}

export default Navbar