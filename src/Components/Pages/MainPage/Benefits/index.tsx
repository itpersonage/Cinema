import React from 'react';
import style from './Benefits.module.scss';

export const Benefits = () => {
  return (
    <div className={`${style.benefits} ${style.container}`}>
      <div className={style.benefits_video}>
        <img src="./images/benefits.jpg" alt="benefits" />
      </div>
      <div className={style.benefits_text}>
        <h1>Open-air film experience</h1>
        <div className={style.benefits_text_item}>
          <h2>Personal Headphones</h2>
          <p>Live completely in those movie moments, try to catch them!</p>
        </div>
        <div className={style.benefits_text_item}>
          <h2>City Views</h2>
          <p>Our locations immerse you in the city skyline at night</p>
        </div>
        <div className={style.benefits_text_item}>
          <h2>Chairs & Cozy Blankets</h2>
          <p>Lean back and relax under the night sky in the hugs of fluffy blanket</p>
        </div>
        <div className={style.benefits_text_item}>
          <h2>Iconic Movies</h2>
          <p>Our program is curated with cult films, classics, and new releases</p>
        </div>
      </div>
    </div>
  );
};
