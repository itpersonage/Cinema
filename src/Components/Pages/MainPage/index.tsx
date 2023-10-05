import React from 'react';
import style from './MainPage.module.scss';
import { Rooftop } from './Rooftop';
import { Benefits } from './Benefits';
import { Location } from './Location';
import { Booking } from './Booking';

export const MainPage = () => {
  return (
    <>
      <Rooftop />
      <Benefits />
      <Location />
      <Booking />
    </>
  );
};
