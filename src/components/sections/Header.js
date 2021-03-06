import React, { Fragment } from 'react';
import { DownArrow, DscLogo, Think } from '../../assets/logo';


const Header = () => {
  return (
    <Fragment>
      <div
        className="header u-mb-big"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div className="u-container">
          <div className="header__content">
            <div
              className="header__left"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="header__logo u-mb-med">
                <DscLogo />
                <p className="text">dsc adgitm</p>
              </div>
              <br />
              <h3 className="header__head h3 u-mb-small">
                Powered By Google Developers
              </h3>
              <p className="text u-sm-text">
                The Google Developer student clubs ADGITM is a community creating a peer to peer environment by bringing developers under one roof so that we connect, learn, and grow by implementing projects that solve real-world problems !<br />
                <br />
                {/* <span className="extra">
                  It is open to any student, ranging from novice (developers who
                  are just starting), to advanced (developers who want to
                  further improve their skills). Join Us!!
                </span> */}
              </p>
              
            </div>
            <div
              className="header__right"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <Think />
            </div>
          </div>
          <div className="header__down-arrow">
            <DownArrow />
          </div>
        </div>
      </div>
      <div className="header__red-bubble"></div>
      <div className="header__blue-bubble"></div>
      <div className="header__green-bubble"></div>
      <div className="header__yellow-bubble"></div>
    </Fragment>
  );
};

export default Header;
