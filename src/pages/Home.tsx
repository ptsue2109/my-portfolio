import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sliders from "../components/Sliders/Sliders";
import InfoLeftSide from "../components/Info/InfoLeftSide";
import InfoRightSide from './../components/Info/InfoRightSide';
import Skill from "../components/Skills/Skill";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contacts/Contact";
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
        <div className="home-top" id="animation">
          <h1>Phuongthao Trinh</h1>
          <h1>frontend developer </h1>
          <h1>based in Vietnam</h1>
        </div>

        <div className="home-content" id="info">
          <InfoLeftSide />
          <Sliders />
          <InfoRightSide />
        </div>
        <hr />
        <div className="home-skill" id="skills">
          <Skill />
        </div>
    
        <div className="home-projects" id="projects">
          <Projects />
        </div>
        <hr />
        <div className="home-contacts" id="contact">
            <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
