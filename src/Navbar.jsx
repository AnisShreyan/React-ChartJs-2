import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Line Chart</Link></li>
            <li><Link to="/area-chart">Area Chart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;