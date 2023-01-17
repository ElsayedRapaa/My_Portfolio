import React from "react";

function WhateIDo({ animatWhate }) {
  return (
    <div
      className="bg-slate-800 h-fit w-full py-24 px-8 md:px-8 lg:px-12 overflow-hidden"
      id="what"
    >
      <div
        className={`${
          animatWhate ? "animate-[wiggle_2s_ease-in-out]" : "opacity-0"
        } `}
      >
        <div className="text-3xl text-white font-bold text-center">
          WHAT I DO
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 mt-8 gap-6 gap-y-16 max-lg:gap-y-16">
          <div className="info flex items-start justify-between gap-6">
            <div className="icon border-2 border-white rounded-full w-16 h-16 flex items-center justify-center p-4">
              <i className="ri-tablet-line text-3xl text-red-400"></i>
            </div>
            <div>
              <h3 className="text-2xl text-white font-semibold mb-4">
                Responsive Design
              </h3>
              <p className="text-gray-400 max-sm:text-sm capitalize">
                Responsive Design Builds a Site To Support Multiple Devices and
                Takes Into Account Content, Design, and Performance Across
                Devices To Ensure Ease Of Use Mobile, Tablet, Small Screens
              </p>
            </div>
          </div>
          <div className="info flex items-start gap-6">
            <div className="icon border-2 border-white rounded-full w-16 h-16 flex items-center justify-center p-4">
              <i className="ri-computer-line text-3xl text-red-400"></i>
            </div>
            <div>
              <h3 className="text-2xl text-white font-semibold mb-4">
                Web Development
              </h3>
              <p className="text-gray-400 max-sm:text-sm capitalize">
                I plan, create, and code websites and web pages, many of which
                combine text with sounds, images, graphics, and videos. I can
                work on a completely new website or update an existing one.
              </p>
            </div>
          </div>
          <div className="info flex items-start gap-6">
            <div className="icon border-2 border-white rounded-full w-16 h-16 flex items-center justify-center p-4">
              <i className="ri-code-s-slash-line text-3xl text-red-400"></i>
            </div>
            <div>
              <h3 className="text-2xl text-white font-semibold mb-4">
                Clean Code
              </h3>
              <p className="text-gray-400 max-sm:text-sm capitalize">
                It is very important that the code be clean and tidy so that it
                is easy to reuse again and make it easier for developers who
                work on the code after that
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhateIDo;
