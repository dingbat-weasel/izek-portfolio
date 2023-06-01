import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
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
            <p>
              Full stack web developer with multidisciplinary experience.
              Curious about difficult problems and excited to create functional
              tools and interfaces that push boundaries and expectations.
              Finding the edge of my understanding and going past it is what
              really excites me. In all the work I do; from web development, to
              research, to art, I try to push the limits and test what is
              possible. I am happiest in the midst of the weird and complicated.
              My background is in academic philosophy, writing consultation,
              interior design, kitchens, and even the floral industry. This
              background has fueled my love for the big picture, conceptual
              learning that I hold as my context on which I learn more applied
              skills and build and design functional programs and art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
