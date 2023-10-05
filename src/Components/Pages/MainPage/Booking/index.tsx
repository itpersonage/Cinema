import React from 'react';
import style from './Booking.module.scss';

export const Booking = () => {
  return (
    <div className={style.booking_section}>
      <div className={`${style.booking} ${style.container}`}>
        <div className={style.booking_faq}>
          <h1>Booking info</h1>
          <div className={style.booking_faq_item}>
            <input id="1" className={style.hide} type="checkbox" />
            <label htmlFor="1">
              How does it work?
              <img src="/images/open.svg" alt="open_btn" />
            </label>
            <div className={style.booking_faq_item_text}>
              The Private Cinema can be set up anywhere you like, be it poolside, on the lawn or
              even the roof terrace, provided there is an available power outlet. All films must
              start after sunset. <br /> <br /> Our team of experts arrive in a fully equipped van
              and will advise you on the best place to setup the cinema based on our experience.
            </div>
          </div>
          <div className={style.booking_faq_item}>
            <input id="2" className={style.hide} type="checkbox" />
            <label htmlFor="2">
              What films can I choose?
              <img src="/images/open.svg" alt="open_btn" />
            </label>
            <div className={style.booking_faq_item_text}>
              The Private Cinema can be set up anywhere you like, be it poolside, on the lawn or
              even the roof terrace, provided there is an available power outlet. All films must
              start after sunset. <br /> <br /> Our team of experts arrive in a fully equipped van
              and will advise you on the best place to setup the cinema based on our experience.
            </div>
          </div>
          <div className={style.booking_faq_item}>
            <input id="3" className={style.hide} type="checkbox" />
            <label htmlFor="3">
              How long does it takes to setup?
              <img src="/images/open.svg" alt="open_btn" />
            </label>
            <div className={style.booking_faq_item_text}>
              The Private Cinema can be set up anywhere you like, be it poolside, on the lawn or
              even the roof terrace, provided there is an available power outlet. All films must
              start after sunset. <br /> <br /> Our team of experts arrive in a fully equipped van
              and will advise you on the best place to setup the cinema based on our experience.
            </div>
          </div>
        </div>
        <img src="/images/faq-poster.jpg" alt="fag" />
      </div>
    </div>
  );
};
