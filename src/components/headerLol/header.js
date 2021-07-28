import React, { Fragment, useState, useRef } from "react";
import Transition from "react-transition-group/Transition";
import { Link } from "gatsby";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import LogoVert from "../../svg/logoVert.svg";
import Logo from "../../svg/logo.svg";
import LogoSpike from "../../svg/logo1.svg";

import * as classes from "./header.module.css";

const Header = () => {
  const targetRef = useRef(null);

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
    disableBodyScroll(targetRef);
  };

  const closeNavHandler = () => {
    setShowNav(false);
    enableBodyScroll(targetRef);
  };

  const mobileLogoClass = showNav
    ? `${classes.logo} ${classes.logoHide}`
    : `${classes.logo}`;

  const burgerClasses = showNav
    ? `${classes.navIcon4} ${classes.open}`
    : `${classes.navIcon4}`;

  return (
    <Fragment>
      <header ref={targetRef}>
        <Link to="/">
          <div className={classes.logoContainer}>
            <LogoVert className={mobileLogoClass} />
          </div>
        </Link>
        <div className={classes.insideHeader}>
          <div
            className={burgerClasses}
            onClick={!showNav ? showNavHandler : closeNavHandler}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <Transition in={showNav} timeout={500} mountOnEnter unmountOnExit>
        {(state) => {
          const navContainerClasses = [
            `${classes.navContainer}`,
            state === "entering"
              ? `${classes.navOpen}`
              : state === "exiting"
              ? `${classes.navHide}`
              : null,
          ];

          return (
            <div className={navContainerClasses.join(" ")}>
              <Logo className={classes.logo2} />
              <div className={classes.navInnerContainer}>
                <div className={classes.decoration}>
                  <p className={classes.navText}>
                    If you came this way,
                    <br />
                    Taking any route, starting from anywhere,
                    <br />
                    At any time or at any season,
                    <br />
                    It would always be the same
                  </p>
                  <LogoSpike className={classes.logoSpike} />
                </div>
                <nav>
                  <Link onClick={closeNavHandler} to="/shop">
                    Shop
                  </Link>
                  <Link onClick={closeNavHandler} to="/news">
                    News
                  </Link>
                  <Link onClick={closeNavHandler} to="/shop">
                    About
                  </Link>
                  <Link onClick={closeNavHandler} to="/lookbook/2021AW">
                    Lookbook
                  </Link>
                  <Link onClick={closeNavHandler} to="/shop">
                    Sydney Artists
                  </Link>
                  <Link onClick={closeNavHandler} to="/shop">
                    FAQ
                  </Link>
                  <Link onClick={closeNavHandler} to="/shop">
                    Instagram
                  </Link>
                </nav>
              </div>
            </div>
          );
        }}
      </Transition>
      {showNav && (
        <div className={classes.backdrop} onClick={closeNavHandler}></div>
      )}
    </Fragment>
  );
};

export default Header;
