import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [navi, setNavi] = useState('none');
  const navFunc = () => {
    alert('clicked');
    setNavi('block');
  };
  return (
    <>
      <div className="navMain flex justify-between items-center absolute left-0 right-0 w-[90%] top-5 h-[72px] rounded-full backdrop-blur-[34px] px-[25px] bg-[#e9e9e963] mx-auto">
        <Link to="/">
          <div className="nav_left_content  flex items-center justify-start h-full ">
            <img src="images/logoIcon.png" alt="logo" />
            <span className="ml-[7px] text-black font-bold text-xl">
              Batin Studio
            </span>
          </div>
        </Link>
        <div className="nav_right_content ">
          <ul className="p-0 flex justify-between w-[600px] h-full items-center">
            <li className="desktop">
              <Link to="/">Portfolio</Link>
            </li>
            <li className="desktop">
              <Link to="/about">About</Link>
            </li>
            <li className="desktop">
              <Link to="/">News</Link>
            </li>
            <li className="desktop">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="menuBtn   border-[2px] rounded-full py-2 px-4 ">
              <button className=" flex justify-between items-center">
                menu <i className="fa-solid mt-1 ml-2 fa-1x fa-bars"></i>
              </button>
            </li>
          </ul>
        </div>

        <div
          style={{ display: navi }}
          className="nav_right_content1 mobile   backdrop-blur-[34px] bg-[#e9e9e9e5]"
        >
          <div className="mobile_top   h-[70px] flex  justify-between items-center max-w-full">
            <div className="nav_left_content1  flex items-center justify-start h-full ">
              <img
                className="h-[25px]  w-[13px]"
                src="images/logoIcon.png"
                alt="logo"
              />
              <span className="ml-[7px] text-black font-bold text-sm font-sans">
                Batin Studio
              </span>
            </div>
            <li className=" list-none flex items-center   border-[2px] rounded-full py-2 px-4 ">
              <Link className=" flex justify-between items-center" to="/">
                menu{' '}
                <i className="fa fa-arrow-up mt-1 ml-2" aria-hidden="true"></i>
              </Link>
            </li>
          </div>
          <p className="py-6 text-center">Menu</p>
          <ul className="p-0 flex justify-between   w-[600px] h-full items-center">
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>

          <div className="w-full absolute bottom-3 h-[200px]">
            <div className="flex   justify-center items-center w-full">
              <a className="text-xl font-sans py-5" href="/">
                Get in touch
              </a>
            </div>
            <div className="flex pb-6 justify-between w-full px-5">
              <a className="font-fans" href="/">
                Behance
              </a>
              <a className="font-fans" href="/">
                Linkedin
              </a>
              <a className="font-fans" href="/">
                Instagram
              </a>
              <a className="font-fans" href="/">
                Twitter
              </a>
            </div>
            <div className="w-full ">
              <p className="text-center">contact@batinstudio.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
