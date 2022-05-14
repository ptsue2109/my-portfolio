import React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Divider } from "antd";
type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="content container">
        <Outlet />
      </div>

      {/* <div className="footer"> */}
      {/* <Divider /> */}
      {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
};

export default Layout;
