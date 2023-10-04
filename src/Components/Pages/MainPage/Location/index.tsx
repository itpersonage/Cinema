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
        <div className={style.location_item}>
          <div className={style.location_item_cover}>
            <button type="button">Choose location</button>
            <img src="./images/place-1.jpg" alt="place-1" />
          </div>
          <div className={style.location_item_text}>
            <div className={style.location_item_text_top}>
              <h2>Cinema Club El Segundo</h2>
              <div className={style.text_top_rating}>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="white"
                  />
                </svg>
                <p>4.6</p>
              </div>
            </div>
            <div className={style.location_item_text_bottom}>
              <h2>Los Angeles</h2>
              <div className={style.text_bottom_price}>
                  <p><span>From $25</span>/person</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.location_item}>
          <div className={style.location_item_cover}>
            <button type="button">Choose location</button>
            <img src="./images/place-2.jpg" alt="place-2" />
          </div>
          <div className={style.location_item_text}>
            <div className={style.location_item_text_top}>
              <h2>The Drive-In Off Navigation</h2>
              <div className={style.text_top_rating}>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="white"
                  />
                </svg>
                <p>4.8</p>
              </div>
            </div>
            <div className={style.location_item_text_bottom}>
              <h2>Houston</h2>
              <div className={style.text_bottom_price}>
                  <p><span>From $22</span>/person</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.location_item}>
          <div className={style.location_item_cover}>
            <button type="button">Choose location</button>
            <img src="./images/place-3.jpg" alt="place-3" />
          </div>
          <div className={style.location_item_text}>
            <div className={style.location_item_text_top}>
              <h2>Cinema Club Embracadero</h2>
              <div className={style.text_top_rating}>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="white"
                  />
                </svg>
                <p>4.2</p>
              </div>
            </div>
            <div className={style.location_item_text_bottom}>
              <h2>San Diego</h2>
              <div className={style.text_bottom_price}>
                  <p><span>From $25</span>/person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
