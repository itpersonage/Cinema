import React from 'react';
import style from './FooterBottom.module.scss';
import { Link } from 'react-router-dom';

export const FooterBottom = () => {
  return (
    <div className={style.footer_bottom}>
      <div className={style.footer_bottom_container}>
        <div className={style.footer_bottom_allrights}>
          <Link to="/All_rights_reserved">All rights reserved •</Link>
          <Link to="/Terms_Conditions">Terms & Conditions •</Link>
          <Link to="/Privacy Policy">Privacy Policy</Link>
        </div>
        <div className={style.footer_bottom_social}>
          <h1>instagram</h1>
        </div>
      </div>
    </div>
  );
};
