import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DscLogo } from '../../assets/logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const onLinkClick = () => {
    const checkbox = document.querySelector('.navbar__checkbox');
    checkbox.checked = false;
  };

  const scrollHandler = () => {
    window.scrollY > 5 ? setScrolled(true) : setScrolled(false);
  };

  // const JoinUs = () => {
  //   window.location.href = "https://www.google.com"
  // }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={scrolled ? 'navbar nav-colored' : 'navbar nav-transparent'}>
      <div className="u-container">
        <Link className="navbar__logo-box" to="/" onClick={onLinkClick}>
          <DscLogo />
          <span className="navbar__logo-text">
            dsc<span className="navbar__logo-text-bold">adgitm</span>
          </span>
        </Link>

        {/* For bigscreens and tablet-landscapes */}

        <ul className="navbar__collections">
          <li className="navbar__nav-links">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Blog">
              Blog
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Events">
              Events
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active" to="/Team">
              Team
            </NavLink>
          </li>
          {/* <li className="navbar__nav-links">
            <Link activeClassName="active" to="http://www.google.com">
              Join
            </Link>
          </li> */}
        </ul>

        {/* form tablets and phone */}

        <div className="navbar__sm">
          <input
            type="checkbox"
            id="navi-toggle"
            className="navbar__checkbox"
          />
          <label htmlFor="navi-toggle" className="navbar__button">
            <span className="navbar__ham"></span>
          </label>

          <div className="navbar__overlay"></div>

          <nav className="navbar__nav-sm">
            <ul className="navbar__collections-sm">
              <li className="navbar__nav-links-sm" onClick={onLinkClick}>
                <NavLink exact activeClassName="active-sm" to="/">
                  Home
                </NavLink>
              </li>
              <li className="navbar__nav-links-sm" onClick={onLinkClick}>
                <NavLink activeClassName="active-sm" to="/Blog">
                  Blog
                </NavLink>
              </li>
              <li className="navbar__nav-links-sm" onClick={onLinkClick}>
                <NavLink activeClassName="active-sm" to="/Events">
                  Events
                </NavLink>
              </li>
              <li className="navbar__nav-links-sm" onClick={onLinkClick}>
                <NavLink activeClassName="active-sm" to="/Team">
                  Team
                </NavLink>
              </li>
              {/* <li className="navbar__nav-links-sm" onClick={JoinUs}>
                <NavLink activeClassName="active-sm" to="/Join">
                  Join
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
