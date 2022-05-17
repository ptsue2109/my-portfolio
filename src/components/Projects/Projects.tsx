import React from "react";
import "./indx.scss";
type Props = {};

const Projects = (props: Props) => {
  const [projects, projectsSet] = React.useState<any>([]);
  React.useEffect(() => {
    async function fetchSkill() {
      let response = await fetch("http://localhost:3001/projects");
      const json = await response.json();
      projectsSet(json);
    }
    fetchSkill();
  }, []);

  console.log(projects);
  return (
    <>
      <div className="home-project__title">
        <h1>My Projects</h1>
      </div>

      <div className="home-projects__content">
        {projects &&
          projects.map((item: any) => (
            <div className="home-projects__content__item" key={item.id}>
              <div className="home-projects__content__item--title">
                <p>{item.title}</p>
              </div>
              <div className="home-projects__content__item--title__desc">
                <p>{item.desc}</p>
              </div>
              <div className="home-projects__content__item--title__skills">
                {item.skillImg.map((av: any) => (
                  <div className="home-projects__content__item--title__skills--img">
                    <img src={av.src} alt="" />
                  </div>
                ))}
              </div>
              <div className="home-projects__content__item--image">
                <a href="">
                  <img
                    src="https://res.cloudinary.com/asm-ph13269/image/upload/v1650609089/tcvprwyxqdkikzic0arg.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Projects;
