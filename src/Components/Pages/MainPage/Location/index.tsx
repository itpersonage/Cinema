import React from 'react';
import style from './Location.module.scss';

export const Location = () => {
  return (
    <div className={`${style.location} ${style.container}`}>
      <div className={style.location_header}>
        <h1>Our locations</h1>
        <div className={style.location_header_btn}>
          <button type="button">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M35 20L25 30L35 40" stroke="#40467C" stroke-width="2" />
              <rect
                x="-1"
                y="1"
                width="58"
                height="58"
                transform="matrix(-1 0 0 1 58 0)"
                stroke="#40467C"
                stroke-width="2"
              />
            </svg>
          </button>
          <button type="button">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" fill="#40467C" />
              <path d="M25 20L35 30L25 40" stroke="white" stroke-width="2" />
            </svg>
          </button>
        </div>
      </div>
      <div className={style.location_slider}>
        <div className={style.location_item1}>
          <button type="button">Choose location</button>
          <img src="./images/place-1.jpg" alt="place-1" />
        </div>

        <div className={style.location_item2}>
          <img src="./images/place-2.jpg" alt="place-2" />
        </div>
        <div className={style.location_item3}>
          <img src="./images/place-3.jpg" alt="place-3" />
        </div>
      </div>
    </div>
  );
};
