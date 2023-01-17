import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Slider from "./components/Slider";
import WhateIDo from "./components/WhateIDo";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactMy from "./components/ContactMy";
import Footer from "./components/Footer";
import SideScroll from "./components/SideScroll";

function App() {
  const [animatWhate, setAnimatWhate] = useState(false);
  const [animatAbout, setAnimatAbout] = useState(false);
  const [animatPortfolio, setAnimatPortfolio] = useState(false);
  const [section, setSection] = useState("home");
  const [animatProgress, setAnimatProgress] = useState(false);

  useEffect(() => {
    let slider = document.getElementById("slider");
    let what = document.getElementById("what");
    let about = document.getElementById("about");
    let portfolio = document.getElementById("portfolio");
    let contact = document.getElementById("contact");

    window.onscroll = () => {
      if (scrollY > 20) {
        setAnimatWhate(true);
      }
      if (window.scrollY > what.offsetTop - 200) {
        setSection("whate");
      }
      if (window.scrollY > about.offsetTop - 200) {
        setAnimatProgress(true);
        setAnimatAbout(true);
      }

      if (window.scrollY > portfolio.offsetTop - 200) {
        setAnimatPortfolio(true);
      }
      if (window.scrollY < slider.offsetTop + 100) {
        setSection("home");
      }
      if (window.scrollY > what.offsetTop - 200) {
        setSection("what");
      }
      if (window.scrollY > about.offsetTop - 200) {
        setSection("about");
      }
      if (window.scrollY > portfolio.offsetTop - 200) {
        setSection("portfolio");
      }
      if (window.scrollY > contact.offsetTop - 400) {
        setSection("contact");
      }
    };
  }, [window.onscroll]);

  useEffect(() => {
    window.onloadstart = () => {
      if (scrollY > 20) {
        setAnimatWhate(true);
      }

      if (scrollY > 580) {
        setAnimatAbout(true);
      }

      if (scrollY > 880) {
        setAnimatPortfolio(true);
      }
      if (scrollY >= 0) {
        setSection("home");
      }
      if (scrollY >= 680) {
        setSection("whate");
      }
      if (scrollY >= 1139) {
        setSection("about");
      }
      if (scrollY >= 1600) {
        setSection("portfolio");
      }
      if (scrollY >= 2038) {
        setSection("contact");
      }
    };
  }, []);

  return (
    <div className="container min-w-full flex gap-x-0 relative">
      <div className="flex-1">
        <Slider />
        <WhateIDo animatWhate={animatWhate} />
        <About
          animatAbout={animatAbout}
          animatProgress={animatProgress}
          setAnimatProgress={setAnimatProgress}
        />
        <Portfolio animatPortfolio={animatPortfolio} />
        <ContactMy />
        <Footer />
      </div>
      <SideScroll section={section} setSection={setSection} />
    </div>
  );
}

export default App;
