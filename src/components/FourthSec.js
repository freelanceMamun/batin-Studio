import React, { useState } from 'react';

const FourthSec = () => {
  const block = 'block';
  const dnone = 'none';
  const point = '0%';
  const pointOut = '-9999%';

  const [fLink, setFlink] = useState(block);
  const [sLink, setSlink] = useState(dnone);
  const [tLink, setTlink] = useState(dnone);

  const [fImg, setFimg] = useState(point);
  const [sImg, setSimg] = useState(point);
  const [tImg, setTimg] = useState(point);

  const firstLink = () => {
    setFlink(block);
    setSlink(dnone);
    setTlink(dnone);
  };
  const secondLink = () => {
    setFlink(dnone);
    setSlink(block);
    setTlink(dnone);
    setFimg(pointOut);
  };
  const thirdLink = () => {
    setTlink(block);
    setSlink(dnone);
    setFlink(dnone);
  };
  return (
    <>
      <div className="mt-[150px] py-[90px] classic">
        <div className="w-[85%] forthWrap mx-auto flex justify-between gap-1">
          <div className="left_fourth relative h-[550px] w-[50%]">
            <div
              style={{ left: fImg }}
              className="mobile_dev absolute  top-0 w-[424px] -rotate-[4deg] h-[548px] rounded-lg"
            >
              <img
                src="images/mobile_dev.jpg"
                alt="mobile"
                className="  w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div
              style={{ left: sImg }}
              className="mobile_dev absolute  top-0 w-[424px] rotate-[4deg] h-[548px] rounded-lg"
            >
              <img
                src="images/web_dev.jpg"
                alt="mobile"
                className="  w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div
              style={{ left: tImg }}
              className="mobile_dev absolute  top-0 w-[424px] -rotate-[4deg] h-[548px] rounded-lg"
            >
              <img
                src="images/branding.jpg"
                alt="mobile"
                className="  w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="right_fourth w-[50%]">
            <h4 className="text-left text-[20px]  leading-[20px] font-bold text-white ">
              Our Services
            </h4>
            <h2 className="mt-[36px] text-[70px] leading-[70px] text-white font-[400]">
              We make your brand stand out.
            </h2>

            <ul className="list-none listing_link mt-[70px] cursor-pointer">
              <li className="flex items-center   pb-5">
                <img
                  style={{ display: fLink }}
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span
                  onMouseEnter={firstLink}
                  className="text-[16px] leading-[172%] duration-1000 text-white"
                >
                  Brand Identity Design
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
              <li className="flex  items-center pb-5">
                <img
                  style={{ display: sLink }}
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]  mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span
                  onMouseEnter={secondLink}
                  className="text-[16px] leading-[172%] test duration-1000 transition-transform text-white"
                >
                  Web & Mobile Design{' '}
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
              <li className="flex  items-center pb-5">
                <img
                  style={{ display: tLink }}
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span
                  onMouseEnter={thirdLink}
                  className="text-[16px] leading-[172%] duration-1000 text-white"
                >
                  Web & Mobile Development
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
            </ul>
          </div>
        </div>

        <hr className="py-[20px] mt-[100px] invisible" />
      </div>
    </>
  );
};

export default FourthSec;
