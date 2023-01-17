import React from "react";
import CV from "../../public/Elsayed's Resume.pdf";

function Slider() {
  const handleStart = () => {
    window.scrollTo({
      top: 684.75,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-[75vh] relative" id="slider">
      <div className="overlay w-full h-full bg-black/75 absolute top-0 left-0 overflow-hidden">
        <div
          className={`content w-full h-full flex flex-col justify-center items-center gap-4 absolute  top-50 left-50 translate-[-50%, -50%] animate-[wiggle_1s_ease-in-out]`}
        >
          <div className="text-red-400 font-bold text-4xl animate-[wiggle2_2s_ease-in-out]">
            Elsayed Rapaa
          </div>
          <h3 className="text-3xl font-bold text-white animate-[wiggle2_2s_ease-in-out] text-center">
            React.js Front-End Developer
          </h3>
          <p className="text-gray-400 py-4 animate-[wiggle2_2s_ease-in-out]">
            Welcome To My Portfolio You Can Upload My CV
          </p>
          <a
            href={CV}
            download
            className="text-white cursor-pointer border-2 border-white px-8 py-4 transition-colors hover:border-red-400 hover:bg-red-400 animate-[wiggle2_2s_ease-in-out]"
          >
            DOWNLOAD
          </a>
          <div className="animate-[wiggle3_5s_ease-in-out] absolute bottom-8 left-50 translate-[-50%]">
            <div
              className="start border-2 border-red-400 rounded-full p-1 cursor-pointer animate-bounce transition-colors hover:bg-red-400 "
              onClick={handleStart}
            >
              <i className="ri-arrow-down-line text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('https://images.unsplash.com/photo-1618254170747-35f7ba2f9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHx3b3JrJTIwZnJvbSUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1280&q=1080')] w-full h-full bg-no-repeat bg-center bg-fixed bg-cover"
        style={{ imageResolution: "from-image 300dpi" }}
      ></div>
    </div>
  );
}

export default Slider;
