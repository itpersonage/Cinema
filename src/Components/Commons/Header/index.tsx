import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={`${style.header} ${style.container}`}>
      <div>
        <Link to="./">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <nav className={style.header_nav}>
        <Link to="/The experience">
          <li>The experience</li>
        </Link>
        <Link to="/Booking info">
          <li>Booking info</li>
        </Link>
        <Link to="Our locations">
          <li>Our locations</li>
        </Link>
        <Link to="Gallery">
          <li>Gallery</li>
        </Link>
        <Link to="Reviews">
          <li>Reviews</li>
        </Link>
        <Link to="Contact us">
          <li>Contact us</li>
        </Link>
      </nav>
    </div>
  );
};
