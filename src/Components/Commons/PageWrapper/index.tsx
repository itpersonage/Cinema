import React from "react";
import style from "./PageWrapper.module.scss";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { FooterBottom } from "../FooterBottom";

export const PageWrapper = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <FooterBottom />
    </div>
  );
};
