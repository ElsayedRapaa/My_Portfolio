import React from "react";

function Footer() {
  return (
    <div className="bg-slate-900 border-t border-slate-800 pt-6 pb-4 text-center">
      <div className="text-gray-500 mb-6">
        Copyright © 2023 Elsayed Rapaa Personal Profile . Designed by Me
      </div>
      <div className="social border-t-2 border-white w-fit px-8 mx-auto pt-4 flex gap-4">
        <a
          href="https://www.facebook.com/elsayed.rapy.7"
          target="_blank"
          className="text-gray-500 transition-colors hover:text-white"
        >
          <i className="ri-facebook-fill text-xl"></i>
        </a>
        <a
          href="https://twitter.com/ElsayedRapaa"
          target="_blank"
          className="text-gray-500 transition-colors hover:text-white"
        >
          <i className="ri-twitter-fill text-xl"></i>
        </a>
        <a
          href="https://github.com/ElsayedRapaa"
          target="_blank"
          className="text-gray-500 transition-colors hover:text-white"
        >
          <i className="ri-github-fill text-xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
