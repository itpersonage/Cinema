import React from 'react';
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_contact}>
        <img src="/images/logo.svg" alt="logo" />
        <div>
          <h1>Our contacts</h1>
          <Link to="/contact_email">
            info@roofcinema.com
            <br />
          </Link>
          <Link to="./contact_tel">+17(568) 456-56-12</Link>
        </div>
        <div>
          <div>
            <h1>Our office</h1>
            <Link to="/contact_email">
              4920 S Avalon Blvd, Los Angeles,
              <br />
            </Link>
            <Link to="./contact_tel">CA 90011</Link>
          </div>
          
        </div>
        <div className={style.footer__subscribe}>
            <form>
                <input type='email' placeholder='Enter email' />
                <button type='submit'>Sing up</button>
            </form>
          </div>
      </div>
    </div>
  );
};
