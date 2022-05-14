import React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
