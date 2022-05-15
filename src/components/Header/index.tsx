import React from "react";
import "./index.scss";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="header__top container">
        <div className="header__top-item ">
          <div className="header__top-item--link">
            <a href="#projects"> My Project</a>
          </div>
          <div className="header__top-item--link">
            <a href="#contact"> Contact</a>
          </div>
          <div className="header__top-item--link">
            <a href="#skills"> My Skills</a>
          </div>
        </div>
        <div className="header__top-logo">
          <div className="header__top-item--logo">
            <a href="#">
              <img
                src="https://res.cloudinary.com/asm-ph13269/image/upload/v1651872832/logo-s_ob0oyg.png"
                alt=""
              />
            </a>
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
