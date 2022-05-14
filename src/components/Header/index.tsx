import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="header__top container">
        <div className="header__top-item ">
          <div className="header__top-item--link">
            <Link to="/work"> My Project</Link>
          </div>
          <div className="header__top-item--link">
            <Link to="/contact"> Contact</Link>
          </div>
        </div>
        <div className="header__top-logo">
          <div className="header__top-item--logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/asm-ph13269/image/upload/v1651872832/logo-s_ob0oyg.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="header__top-social">
          <a href="https://github.com/ptsue2109" target={"_blank"}>
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/phuongthao.trinh.sue"
            target={"_blank"}
          >
            <FaFacebook />
          </a>
          <a href="/" target={"_blank"}>
            <FaGoogle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
