import React from 'react';
import workImg1 from '../assets/work/bog_screencap.JPG';
import workImg2 from '../assets/work/buildpoem_screencap.png';
import workImg3 from '../assets/work/climate_screencap.png';
import workImg4 from '../assets/work/schedule_screencap.JPG';
import workImg5 from '../assets/work/weather_screencap.JPG';
import workImg6 from '../assets/work/writeme_screencap.JPG';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-textColor1 bg-bgColor'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-textColor1 border-accentColor'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 p-4'>
              <span className='text-2xl font-bold text-textColor1 tracking-wider'>
                Blogging website using a template engine to dynamically generate
                HTML
              </span>
              <div className='pt-8 text-center'>
                <a href='https://the-bog-blog.herokuapp.com/' target='_blank'>
                  <button className='text-center rounded-lg px-4 m-2 bg-textColor1 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/dingbat-weasel/bog-blog'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-textColor1 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 p-4'>
              <span className='text-2xl font-bold text-textColor1 tracking-wider'>
                Monostich: A poetic social experience; Built with React, Node,
                Express, and MongoDB.
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://monostich-132ed184814a.herokuapp.com/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/jgerona/build-a-poem'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 p-4'>
              <span className='text-2xl font-bold text-textColor1 tracking-wider'>
                Dynamic weather and space information dashboard utilizing API's
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://dingbat-weasel.github.io/Cosmic-Climate/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/dingbat-weasel/Cosmic-Climate'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 p-4'>
              <span className='text-2xl font-bold text-textColor1 tracking-wider'>
                Daily scheduling webapp utilizing local storage
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://dingbat-weasel.github.io/daily-scheduler/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/dingbat-weasel/daily-scheduler'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg5})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100  p-4'>
              <span className='text-2xl font-bold text-textColor1 tracking-wider'>
                Weather dashboard utlizing API connections
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://dingbat-weasel.github.io/Sunny-Weather-Dashboard/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/dingbat-weasel/Sunny-Weather-Dashboard'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg6})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 p-4'>
              <span className='text-2xl font-bold text-textColor1 tracking-wider'>
                CLI application for dynamically generating README.md files
              </span>
              <div className='pt-8 text-center'>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a
                  href='https://github.com/dingbat-weasel/WRITEME'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
