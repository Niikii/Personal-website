import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import React, { useState } from "react";
import { projectData } from "../data/ProjectsData";
import "../styles/Projects.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "100px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    // hight: "500px",
    // width: "500px",
    paddingTop: "90%", // 16:9
  },
  links: {},
}));

export default function Projects() {
  const [data, setData] = useState(projectData);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <header className="project-header" id="projects">
        Projects
      </header>
      <div className="projects">
        {data.map((item) => (
          <div className="project-card-container">
            <div className="project-card">
              <a href={item.link} target="_blank">
                <div className="card--display">
                  <i className="material-icons">{item.logo}</i>
                  <h2 style={{ color: "#503254" }}>{item.title}</h2>
                </div>
                <div className="card--hover">
                  <h2>{item.title}</h2>
                  <p>{item.info}</p>

                  <p className="link">Click to see project</p>
                </div>
              </a>
              <div className="card--border"></div>
            </div>
            <spam className="project-links">
              <IconButton
                style={{
                  width: "20px",
                  height: "20px",
                }}
                href={item.git}
                target="_blank"
                aria-label="git"
              >
                <GitHubIcon
                  style={{
                    color: "#503254",
                    borderRadius: "50%",
                    border: "5px dotted #62b0de",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </IconButton>
            </spam>
          </div>
        ))}
      </div>
    </>
  );
}
