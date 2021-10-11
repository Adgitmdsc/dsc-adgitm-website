import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "gatsby";
import "../styles/Navbar.css";
import MenuIcon from '../images/menu.png'
import CrossIcon from '../images/cross.png'

function NavbarComponent() {
  //STATES
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopNavbar = (
    <div className="container d-flex justify-content-between align-items-center desktop">
      <div className="logo">
        <Link to="/" className="logo">
          <img
            src="https://www.dscsdmc.org/img/logo.png"
            alt="DSC Logo"
            className="brand_icon"
          />
          <h1 className="brand_name">DSC Adgitm</h1>
        </Link>
      </div>
      <div className="header_links">
        <Link to="/" className="header_link">
          Home
        </Link>
        <Link to="/blogs" className="header_link">
          Blogs
        </Link>
        <Link to="/projects" className="header_link">
          Projects
        </Link>
        <Link to="/team" className="header_link">
          Team
        </Link>
      </div>
      <Link to="/" className="header_cta">
        Join Us
      </Link>
    </div>
  );

  const mobileNavbar = (
    <div className="container d-flex justify-content-between align-items-center mobile">
      <div style={{ marginLeft: '-20px' }} className="logo">
        <Link to="/" className="logo">
          <img
            src="https://www.dscsdmc.org/img/logo.png"
            alt="DSC Logo"
            className="brand_icon"
          />
          <h1 className="brand_name">DSC Adgitm</h1>
        </Link>
      </div>
      <div className="hamburger" style={{ marginRight: '-20px' }}>
        <img src={menuOpen ? CrossIcon : MenuIcon} style={{ cursor: 'pointer' }} alt="Hamburger Icon" onClick={e => setMenuOpen(!menuOpen)} />
      </div>
      <div className={menuOpen ? "header_links show" : "header_links"}>
        <Link to="/blogs" className="header_link">
          Blogs
        </Link>
        <Link to="/projects" className="header_link">
          Projects
        </Link>
        <Link to="/team" className="header_link">
          Team
        </Link>
        <Link to="/" className="header_cta">
          Join Us
        </Link>
      </div>
    </div>
  );

  return (
    <header id="header">
      {desktopNavbar}
      {mobileNavbar}
    </header>
  );
}

export default NavbarComponent;
