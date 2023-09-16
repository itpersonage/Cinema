import React from 'react';
import style from './PageWrapper.module.scss';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';

export const PageWrapper = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
