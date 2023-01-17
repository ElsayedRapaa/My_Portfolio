import React, { useEffect, useState } from "react";

function SideScroll({ section, setSection }) {
  const [active, setActive] = useState("homea");

  useEffect(() => {
    if (active === "homea") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    if (active === "whatea") {
      window.scroll({
        top: 697,
        left: 0,
        behavior: "smooth",
      });
    }

    if (active === "abouta") {
      window.scroll({
        top: 1139,
        left: 0,
        behavior: "smooth",
      });
    }

    if (active === "portfolioa") {
      window.scroll({
        top: 1600,
        left: 0,
        behavior: "smooth",
      });
    }

    if (active === "contacta") {
      window.scroll({
        top: 3018,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [active]);

  const handleSection = (text, text2) => {
    setSection(text);
    setActive(text2);
  };

  return (
    <div className="w-12 min-h-screen h-[100vh] bg-slate-900 sticky right-0 top-0 border-l-2 border-white/25 flex flex-col gap-4 justify-center items-center max-lg:hidden">
      <span
        className={`bg-white/75 w-3 h-3 hover:scale-150 cursor-pointer transition-transform rounded-md ${
          active === "homea" || (section === "home" && "scale-150")
        }`}
        onClick={() => handleSection("home", "homea")}
      ></span>
      <span
        className={`bg-white/75 w-3 h-3 hover:scale-150 cursor-pointer transition-transform rounded-md ${
          active === "whatea" || (section === "what" && "scale-150")
        }`}
        onClick={() => handleSection("what", "whatea")}
      ></span>
      <span
        className={`bg-white/75 w-3 h-3 hover:scale-150 cursor-pointer transition-transform rounded-md ${
          active === "abouta" || (section === "about" && "scale-150")
        }`}
        onClick={() => handleSection("about", "abouta")}
      ></span>
      <span
        className={`bg-white/75 w-3 h-3 hover:scale-150 cursor-pointer transition-transform rounded-md ${
          active === "portfolioa" || (section === "portfolio" && "scale-150")
        }`}
        onClick={() => handleSection("portfolio", "portfolioa")}
      ></span>
      <span
        className={`bg-white/75 w-3 h-3 hover:scale-150 cursor-pointer transition-transform rounded-md ${
          active === "contacta" || (section === "contact" && "scale-150")
        }`}
        onClick={() => handleSection("contact", "contacta")}
      ></span>
    </div>
  );
}

export default SideScroll;
