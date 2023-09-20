import React from 'react';
import style from './MainPage.module.scss';
import { Rooftop } from './Rooftop';
import { Benefits } from './Benefits';

export const MainPage = () => {
  return (
    <>
      <Rooftop />
      <Benefits />
    </>
  );
};
