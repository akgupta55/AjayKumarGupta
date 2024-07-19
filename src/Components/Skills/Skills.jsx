import "./Skills.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills">
      <h1>
        Professional <b>Skills</b>
      </h1>
      <ul className="icon_list">
        <li className="icon">
          <DiJavascript1 />
        </li>
        <li className="icon">
          <DiGit />
        </li>
        <li className="icon">
          <DiNodejs />
        </li>
        <li className="icon">
          <DiReact />
        </li>
        <li className="icon">
          <DiMongodb />
        </li>
        <li className="icon">
          <SiMicrosoftazure />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
