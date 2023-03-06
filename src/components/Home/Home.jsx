import React, { Fragment } from "react";
import { Navbar } from "../Navbar";
import { Content1 } from "./Content1";
import { Content2 } from "./Content2";
import { Header } from "./Header";

export const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <Header />
      <Content1/>
      <Content2/>
    </Fragment>
  );
};
