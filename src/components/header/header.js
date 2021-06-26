import React, { Fragment, useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import LogoVert from "../../svg/logoVert.svg";
import Logo from "../../svg/logo.svg";
import LogoSpike from "../../svg/logo1.svg";

import * as classes from "./header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav);
  };

  const navContainerClass = showNav
    ? `${classes.navContainer}`
    : `${classes.navContainer} ${classes.hide}`;

  const mobileLogoClass = showNav
    ? `${classes.logo} ${classes.logoHide}`
    : `${classes.logo}`;

  const burgerClasses = showNav
    ? `${classes.navIcon4} ${classes.open}`
    : `${classes.navIcon4}`;

  return (
    <Fragment>
      <header>
        <Link to="/">
          <LogoVert className={mobileLogoClass} />
        </Link>
        <div className={classes.insideHeader}>
          <div className={burgerClasses} onClick={showNavHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className={navContainerClass}>
        <div className={classes.decoration}>
          <Logo className={classes.logo2} />
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
          <Link to="/shop">Shop</Link>
          <Link to="/news">News</Link>
          <Link to="/shop">About</Link>
          <Link to="/shop">Lookbook</Link>
          <Link to="/shop">Sydney Artists</Link>
          <Link to="/shop">FAQ</Link>
          <Link to="/shop">Instagram</Link>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
