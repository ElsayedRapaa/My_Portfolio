import React, { useState } from "react";
import { dataPortfolio } from "./dataPortfolio";

function Portfolio({ animatPortfolio }) {
  const [active, setActive] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleClick = (text) => {
    setActive(text);
    if (text === "all") {
      setFilter(false);
    } else {
      setFilterData(
        dataPortfolio.filter(
          (item) => item.type !== "all" && item.type === text
        )
      );
      setFilter(true);
    }
    setShowMore(true);
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
    setFilter(false);
    setActive("all");
  };

  return (
    <div
      className={`bg-slate-800 w-full h-fit py-24 px-8 md:px-8 lg:px-12 overflow-hidden`}
      id="portfolio"
    >
      <h1 className="uppercase text-3xl text-white font-bold text-center">
        Portfolio
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4 my-8">
        <button
          className={`px-4 border-2 border-red-400 text-white rounded-md transition-colors hover:bg-red-400 ${
            active === "all" && "bg-red-400"
          }`}
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 border-2 border-red-400 text-white rounded-md transition-colors hover:bg-red-400 ${
            active === "html/css" && "bg-red-400"
          }`}
          onClick={() => handleClick("html/css")}
        >
          HTML/CSS
        </button>
        <button
          className={`px-4 border-2 border-red-400 text-white rounded-md transition-colors hover:bg-red-400 ${
            active === "javascript" && "bg-red-400"
          }`}
          onClick={() => handleClick("javascript")}
        >
          JavaScript
        </button>
        <button
          className={`px-4 border-2 border-red-400 text-white rounded-md transition-colors hover:bg-red-400 ${
            active === "react" && "bg-red-400"
          }`}
          onClick={() => handleClick("react")}
        >
          React.js
        </button>
        <button
          className={`px-4 border-2 border-red-400 text-white rounded-md transition-colors hover:bg-red-400 ${
            active === "jquery" && "bg-red-400"
          }`}
          onClick={() => handleClick("jquery")}
        >
          jQuery
        </button>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 mt-12">
        {!filter
          ? !showMore
            ? dataPortfolio.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className={`bg-slate-900 p-4 rounded-lg transition-transform ${
                    animatPortfolio
                      ? "animate-[wigglescale_1s_ease-in-out]"
                      : "opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-white mt-2 border-t-2 pt-2 border-gray-500">
                    {item.title}
                  </h3>
                  <a
                    href={item.url}
                    target="_blank"
                    className="border-2 border-red-400 text-white px-4 py-1 rounded-md mt-4 block ml-auto w-fit transition-colors hover:bg-red-400"
                  >
                    Live Demo
                  </a>
                </div>
              ))
            : dataPortfolio.map((item) => (
                <div
                  key={item.id}
                  className={`bg-slate-900 p-4 rounded-lg transition-transform ${
                    animatPortfolio
                      ? "animate-[wigglescale_1s_ease-in-out]"
                      : "opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-white mt-2 border-t-2 pt-2 border-gray-500">
                    {item.title}
                  </h3>
                  <a
                    href={item.url}
                    target="_blank"
                    className="border-2 border-red-400 text-white px-4 py-1 rounded-md mt-4 block ml-auto w-fit transition-colors hover:bg-red-400"
                  >
                    Live Demo
                  </a>
                </div>
              ))
          : filterData.map((item) => (
              <div
                key={item.id}
                className={`bg-slate-900 p-4 rounded-lg transition-transform ${
                  animatPortfolio
                    ? "animate-[wigglescale_1s_ease-in-out]"
                    : "opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-white mt-2 border-t-2 pt-2 border-gray-500">
                  {item.title}
                </h3>
                <a
                  href={item.url}
                  target="_blank"
                  className="border-2 border-red-400 text-white px-4 py-1 rounded-md mt-4 block ml-auto w-fit transition-colors hover:bg-red-400"
                >
                  Live Demo
                </a>
              </div>
            ))}
      </div>
      <button
        className={`border-2 border-red-400 px-4 py-1 block m-auto mt-16 rounded-md transition-colors hover:bg-red-400 text-white`}
        onClick={handleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Portfolio;
