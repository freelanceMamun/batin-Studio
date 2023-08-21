import Nav from './Nav';
import React, { useState, useEffect } from 'react';
import VideoPlayer from './video';
import SliderText from './SlideText';
import ThirdSec from './ThirdSec';
import FourthSec from './FourthSec';
import Project from './FifthSec';
import SixSec from './SixSec';
import SevenSec from './Seven';
import EightSec from './EightSec';
import NineSec from './NineSec';
const Home = () => {
  const [vidContainer, setVidContainer] = useState('80%');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const vheight = window.innerHeight;
      const thershold = vheight * 0.6;
      if (currentPosition > thershold) {
        setVidContainer('100%');
      } else {
        setVidContainer('80%');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav />
      <div className="heroImg">
        <div className="h-full heroimg1 flex justify-center items-center flex-col ">
          <h3 className="text-[48px]  homeTitle1 font-[400] mb-0">
            Design or Development
          </h3>
          <h1 className=" homeTitle text-[96px] leading-[96px] font-[400] mt-0">
            We Always Go Unique.
          </h1>
        </div>
      </div>

      <div
        className="vidContainer  relative mx-auto mb-10 -mt-16"
        style={{
          width: vidContainer,
          cursor: 'url(soundplay.pnt), auto',
          height: '540px',
        }}
      >
        <img
          src="images/contactus.png"
          alt="CONTACT us"
          className="contact_png"
        />
        <VideoPlayer style={{ cursor: 'url(soundplay.pnt), auto' }} />
      </div>
      <div className="vidContainer1  relative mx-auto mb-10 -mt-16">
        <img
          src="images/contactus.png"
          alt="CONTACT us"
          className="contact_png"
        />
        <VideoPlayer style={{ cursor: 'url(soundplay.pnt), auto' }} />
      </div>
      <SliderText />
      <ThirdSec />
      <FourthSec />
      <Project />
      <SixSec />
      <SevenSec />
      <EightSec />
      <NineSec />
    </>
  );
};

export default Home;
