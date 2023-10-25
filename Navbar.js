import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EditControls from './EditControls';
import AddControls from './AddControls';
const NavBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        {/* ... */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/view" className="nav-link">View Controls</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Controls</Link>
          </li>
          {/* ... */}
        </ul>
      </nav>
      <Routes>
        
        <Route path="/add" element={<AddControls />}/>
        <Route path="/view" element={<EditControls/>} />
       
      </Routes>
    </Router>
  );
};

export default NavBar;
