import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sliders from "../components/Sliders/Sliders";
import InfoLeftSide from "../components/Info/InfoLeftSide";
import InfoRightSide from './../components/Info/InfoRightSide';
import Skill from "../components/Skills/Skill";
type Props = {};

const Home = (props: Props) => {
  const [image, imageSet] = useState<any>([]);

  React.useEffect(() => {
    async function fetchIMage() {
      let response = await fetch("http://localhost:3001/sliders");
      const json = await response.json();
      imageSet(json);
    }
    fetchIMage();
  }, []);
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <div className="home">
        <div className="home-top">
          <h1>Phuongthao Trinh</h1>
          <h1>frontend developer </h1>
          <h1>based in Vietnam</h1>
        </div>

        <div className="home-content">
          <InfoLeftSide />
          <Sliders />
          <InfoRightSide />
        </div>
        <hr />
        <div className="home-skill">
          <Skill />
        </div>
      </div>
    </>
  );
};

export default Home;
