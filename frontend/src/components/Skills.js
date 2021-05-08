import React from "react";
import "../styles/Skills.css";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiMaterialUi,
  SiRedux,
  SiMysql,
  SiGraphql,
  SiRedis,
} from "react-icons/si";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { BiCodeBlock } from "react-icons/bi";
import { DiPostgresql, DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills">
      <header>Skills</header>
      <div className="skill">
        <div className="set">
          <span>
            <CgWebsite color="#d62951" />
          </span>
          <header>Front-End</header>
          <div className="list">
            <label>React.js</label>
            <IoLogoReact />
          </div>
          <div className="list">
            <label>HTML</label>
            <FaHtml5 />
          </div>
          <div className="list">
            <label>CSS</label>
            <FaCss3Alt />
          </div>
          <div className="list">
            <label>Material UI</label>
            <SiMaterialUi />
          </div>
          <div className="list">
            <label>Bootstrap</label>
            <FaBootstrap />
          </div>
          <div className="list">
            <label>redux</label>
            <SiRedux />
          </div>
        </div>
        <div className="set">
          <span>
            <BiCodeBlock color="#d62951" />
          </span>
          <header>Back-End</header>
          <div className="list">
            <label>Node.js</label>
            <FaNodeJs />
          </div>
          <div className="list">
            <label> GraphQL</label>
            <SiGraphql />
          </div>
          <div className="list">
            <label>PostgreSQL</label>
            <DiPostgresql />
          </div>
          <div className="list">
            <label>MongoDB</label>
            <DiMongodb />
          </div>
          <div className="list">
            <label>Redis</label>
            <SiRedis />
          </div>
          <div className="list">
            <label>Git</label>
            <FaGithub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
