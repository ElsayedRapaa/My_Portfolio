import React from "react";
import { progress } from "./dataProgress";

function About({ animatAbout, animatProgress }) {
  return (
    <div
      className="bg-slate-900 w-full h-fit grid grid-cols-3 max-md:grid-cols-1 gap-x-6 gap-y-10 py-24 px-8 md:px-8 lg:px-12 overflow-hidden"
      id="about"
    >
      <div
        className={`text-left grid-cols-1 mx-auto 
        ${animatAbout ? "animate-[wigglexl_2s_ease-in-out]" : "opacity-0"}
        `}
      >
        <h1 className="text-4xl text-white font-bold mb-6">ABOUT ME</h1>
        <h4 className="text-xl font-bold text-red-400 mb-6">
          DESIGNER & DEVELOPER
        </h4>
        <p className="text-gray-500 capitalize flex flex-col gap-2 w-full">
          <span className="text-sm">
            I highly value quality over quantity and I put big effort to create
            a truly qualified product. I love pixel-perfectness, responsiveness
            and enjoy writing tests. This had been an important factor which
            made my previous projects successful.
          </span>
          <span className="text-sm">
            Honesty is an admirable human characteristic and I always have been
            honest with clients and team members(and in my personal life too). I
            am not pretending to understand everything. If I am not familiar
            with something, I say 'I am not familiar with it, I need help' or 'I
            need some time to investigate and learn'. If I made a mistake, I say
            'I am sorry, I made a mistake'.
          </span>
          <span className="text-sm">
            I have a proactive availability: 6 days a week, 8+ hours a day for
            work, 12+ hours a day for communication. I used to work on EST time
            in my previous international remote teams.
          </span>
        </p>
      </div>
      <div
        className={`grid grid-rows-6 grid-cols-2 col-span-2 gap-x-4 gap-y-4 my-auto mx-0 ${
          animatAbout ? "animate-[wigglexr_2s_ease-in-out]" : "opacity-0"
        }`}
      >
        {progress.map((prog) => (
          <div className="progress" key={prog.id}>
            <div className="flex items-center justify-between">
              <span className="text-white font-bold uppercase max-sm:text-xs max-lg:text-sm text-xs">
                {prog.name}
              </span>
              <span className="text-white">{prog.number}%</span>
            </div>
            <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
              <span
                className={`${
                  animatProgress ? `w-[${prog.number}%]` : "w-0"
                }  bg-red-400 h-full block rounded-md`}
              ></span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex-1 flex flex-col col-span-1 gap-y-4 my-auto mx-0">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">HTML/CSS</span>
            <span className="text-white prog" data-num-prog="100">
              {count}
            </span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[100%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">
              javascript/es4/5/6
            </span>
            <span className="text-white prog" data-num-prog="95">
              0
            </span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[95%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">
              bootstrap/tailwind CSS
            </span>
            <span className="text-white prog" data-num-prog="100">
              0
            </span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[100%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">React.js</span>
            <span className="text-white prog" data-num-prog="95">
              0
            </span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[95%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">next.js</span>
            <span className="text-white prog" data-num-prog="90">
              0
            </span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">node.js</span>
            <span className="text-white prog" data-num-prog="90">
              0
            </span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col col-span-1 gap-y-4 my-auto mx-0">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">MERN Stack</span>
            <span className="text-white">90%</span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">
              React Admin Dashboard
            </span>
            <span className="text-white">90%</span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">MUI</span>
            <span className="text-white">90%</span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">Storybook</span>
            <span className="text-white">90%</span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">Redux</span>
            <span className="text-white">90%</span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[90%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold uppercase">firebase</span>
            <span className="text-white">85%</span>
          </div>
          <div className="bg-white h-2 w-full rounded-lg overflow-hidden">
            <span className="w-[85%] bg-red-400 h-full block rounded-md"></span>
          </div>
        </div>
      </div> */}
      {/* <div
        className={`flex-1 flex justify-start gap-8 w-[100%] ${
          animatAbout ? "animate-[wigglexr_2s_ease-in-out]" : "opacity-0"
        }`}
      ></div>
      <div className=""></div>*/}
    </div>
  );
}

export default About;
