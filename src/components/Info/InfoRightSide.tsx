import React from "react";

type Props = {};

const InfoRightSide = (props: Props) => {
  return (
    <div className="home-content-info">
      <div className="home-content-info__experiences">
        <div className="home-content-info--text">
          <div className="home-content-info--text__title">
            <span>years of experiences</span>
          </div>
          <div className="home-content-info--text__content">
            <p>I'm a newbie</p>
          </div>
        </div>
      </div>
      <div className="home-content-info__skill mt-5 pt-3">
        <div className="home-content-info--text">
          <div className="home-content-info--text__title">
            <span>skills</span>
          </div>
          <div className="home-content-info--text__content">
            <p>
              Frontend: JS , React, Angular <br />
              Backend: Express, Mongoose Database : MySQL <br />
              NoSql : Mongodb
            </p>
          </div>
        </div>
      </div>
      <div className="home-content-info__skill">
        <div className="home-content-info--text">
          <div className="home-content-info--text__title">
            <span>Education</span>
          </div>
          <div className="home-content-info--text__content">
            <p>
              FPT Polytechnic Colleges <br />
              (level 6/7) <br />
              Status: Studing... <br />
              Major: Web Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoRightSide;
