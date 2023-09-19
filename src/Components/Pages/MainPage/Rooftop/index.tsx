import React from 'react';
import style from './Rooftop.module.scss';
import { Link } from 'react-router-dom';

export const Rooftop = () => {
  return (
    <div className={`${style.rooftop} ${style.container}`}>
      <div className={style.rooftop_text}>
        <p>Open-Air Film Experience</p>
        <h1>Rooftop Cinema</h1>
        <p>To turn your movie night into an adventure</p>
        <Link to="./Book_day">
          <button>Book a day</button>
        </Link>
        <Link to="/How_works">
          <button>How it works</button>
        </Link>
      </div>
      <img src="/images/rooftop.jpg" alt="Rooftop" />
    </div>
  );
};
