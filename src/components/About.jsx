import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-bgColor text-textColor1">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-accentColor">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Isaac, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="pb-3">
              Full stack web developer with multidisciplinary experience.
              Curious about difficult problems and excited to create functional
              tools and interfaces that push boundaries and expectations.
            </p>
            <p className="pb-6">
              My background is in academic philosophy, writing consultation,
              interior design, kitchens, and even the floral industry. This
              background has fueled my love for the big picture, conceptual
              learning that I hold as my context on which I learn more applied
              skills and build and design functional programs and art.
            </p>
            <p className="border-2 p-2">
              In all my work I try to push the limits of what is possible. I am
              happiest in the midst of the weird and complicated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
