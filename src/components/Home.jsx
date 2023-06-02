import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-bgColor">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-accentColor">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-textColor1">
          Isaac Perk
        </h1>
        <p className="text-textColor1 text-right">
          My friends call me
          <span className="text-4xl text-accentColor"> izek</span>
        </p>
        <h2 className="text-4xl sm:text-7xl font-bold text-highlightColor">
          I'm a Full Stack Developer
        </h2>
        <p className="text-textColor2 py-4 mx-w-[700px]">
          with multidisciplinary experience in conceptual analysis, design, and
          writing consultation
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-textColor1 border-2 px-6 py-3 my-2 flex items-center hover:bg-accentColor hover:border-accentColor hover:text-highlightColor">
              View Work
              <span className="">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
