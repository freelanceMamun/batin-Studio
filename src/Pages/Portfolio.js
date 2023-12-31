import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import searchIcon from "../components/assets/images/search_icon.svg";
import Data from "../components/assets/projects.json";
import rightArrow from "../components/assets/images/ArrowBendDoubleUpRight.svg";
import Reload from "../components/assets/images/reload.svg";
import arrow from "../components/assets/images/Line 4.svg";
import Lets from "../components/Lets";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    setData(Data);
  }, []);

  const showMore = () => {
    setVisible((preValue) => preValue + 10);
  };

  return (
    <>
      <Nav></Nav>

      <section className="lg:flex">
        <section
          className="
                lg:w-[25%]
                section"
        >
          <div className="my-title lg:text-left">Our Projects</div>

          <div
            className="
                    lg:flex-wrap
                    lg:justify-start
                    flex justify-center gap-6 text-xl font-sans"
          >
            <button className="my-btn">All</button>
            <button className="my-btn">UI/UX Design</button>
              <button className="my-btn">Website</button>
            <button className="my-btn hidden md:block">Apps</button>
            <button className="my-btn hidden md:block">Branding</button>
          </div>
        </section>

        <section className="mt-10 lg:w-[75%] lg:mt-32">
          <div className="font-sans">
            {data.slice(0, visible).map((project) => {
              return (
                <div className="border-y py-6 px-4 flex justify-between">
                  <div className="">
                    <div className="text-2xl p-2">{project.company}</div>

                    <div className="text-sm p-2">{project.time}</div>
                  </div>

                  <div className="my-auto lg:hidden">
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center font-sans">
            <button
              className="my-btn text-black flex gap-2 mx-auto"
              onClick={showMore}
            >
              <img className="my-auto" src={Reload} alt="" />
              Load more
            </button>
          </div>
        </section>
      </section>

      <section className="section">
        <Lets></Lets>

        {/* Direct SVG :V */}
        {/* <img className="mx-auto" src={Frame361} alt="" /> */}
      </section>

      <Footer></Footer>
    </>
  );
};

export default Portfolio;
