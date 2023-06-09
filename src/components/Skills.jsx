import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-bgColor text-textColor1">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl inline border-b-4 border-accentColor">
            Skills
          </p>
          <p className="py-4">
            These are some of the technologies I'm most familiar with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
