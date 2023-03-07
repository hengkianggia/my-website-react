import React, { Fragment } from "react";
import { Navbar } from "../Navbar";
import { About } from "./About";
import { Content1 } from "./Content1";
import { Content2 } from "./Content2";
import { Content3 } from "./Content3";
import { Content4 } from "./Content4";
import { Header } from "./Header";
import { Portofolio } from "./Portofolio";

export const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <Header />
      <Content1/>
      <Content2/>
      <Content3/>
      <Content4/>
      <Portofolio/>
      <About/>
    </Fragment>
  );
};
