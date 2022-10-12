import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/nav.scss";
import ModeIcon from './ModeIcon';
 
 
function Nav() {
  const handleProfileClick = () => {
    const onHomePage = window.location.pathname === "/";
    if (onHomePage) {
      const profile = document.getElementById("profile");
      profile.scrollIntoView({behavior: "smooth"});
    }
  }
  
  const handleHomeClick = () => {
    const onHomePage = window.location.pathname === "/";
    if (onHomePage) {
      window.scrollTo(0, 0);
    }
  }
  
  return (
    <ul className="fixed-top container-xxl nav nav-expand-lg d-flex justify-content-between align-items-center py-2 px-4" id="nav">
      <Link to="/" onClick={handleHomeClick} className="logo-container">
        <img className="logo" alt=""/>
      </Link>
      <div className="d-none d-md-flex justify-content-end">
        <li className="nav-item me-2">
          <Link to="/" onClick={handleHomeClick} className="nav-link">HOME</Link>
        </li>
        <li className="nav-item me-2">
          <Link to={{pathname:"/", hash:"#profile"}} onClick={handleProfileClick} className="nav-link">PROFILE</Link>
        </li>
        <li className="nav-item me-2">
          <Link to="/projects" className="nav-link">PROJECTS</Link>
        </li>
        <li className="nav-item me-2">
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </li>
        <li className="nav-item">
          <ModeIcon />
        </li>
      </div>
      <div className="action-icons d-flex d-md-none">
        <li className="nav-item">
          <ModeIcon />
        </li>
        <div className="dropdown d-flex align-items-center">
          <button className="dropdown-toggle bi bi-list p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
          <ul className="dropdown-menu">
            <li className="dropdown-item nav-item me-2">
              <Link to="/" onClick={handleHomeClick} className="nav-link">HOME</Link>
            </li>
            <li className="dropdown-item nav-item me-2">
              <Link to={{pathname:"/", hash:"#profile"}} onClick={handleProfileClick} className="nav-link">PROFILE</Link>
            </li>
            <li className="dropdown-item nav-item me-2">
              <Link to="/projects" className="nav-link">PROJECTS</Link>
            </li>
            <li className="dropdown-item nav-item me-2">
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </ul> 
  );
}
 
export default Nav;

