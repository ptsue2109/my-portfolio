import React, { useState } from "react";
import "./index.scss";
import axios from "axios";
type Props = {};

const Skill = (props: Props) => {
  const [skills, skillsSet] = useState<any>([]);
  
  React.useEffect(() => {
    async function fetchSkill() {
      let response = await fetch("http://localhost:3001/skills");
      const json = await response.json();
      skillsSet(json);
    }
    fetchSkill();
  }, []);
  return (
    <>
      <div className="home-skill_title">
        <h1>MY SKILL</h1>
      </div>
      <div className="home-skill_content">
        {skills &&
          skills.map((item: any) => (
            <div className="home-skill_content__item" key={item.id}>
              <div className="home-skill_content__item--img">
                <img
                  src={item.src}
                  alt={item.content}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Skill;
