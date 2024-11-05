import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Algorithm Visualizer</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sort-algorithms">Sorting Algorithms</Link></li>
        <li><Link to="/tree-algorithms">Tree Algorithms</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
