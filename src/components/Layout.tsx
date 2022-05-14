import React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="content container">
        <Outlet />
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
