import React, { useState } from 'react';

const EightSec = () => {
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
      <div className="mt-[150px] wmw py-[90px] ">
        <div className="w-[85%] wemakeWrap mx-auto flex justify-between gap-1">
          <div className="left_fourth relative h-[550px] w-[50%]">
            <div
              style={{ left: fImg }}
              className="mobile_dev absolute  top-0 w-[424px]  h-[548px] rounded-lg"
            >
              <img
                src="images/mobile_dev.jpg"
                alt="mobile"
                className="  w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div
              style={{ left: sImg }}
              className="mobile_dev absolute  top-0 w-[424px]  h-[548px] rounded-lg"
            >
              <img
                src="images/web_dev.jpg"
                alt="mobile"
                className="  w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div
              style={{ left: tImg }}
              className="mobile_dev absolute  top-0 w-[424px]  h-[548px] rounded-lg"
            >
              <img
                src="images/branding.jpg"
                alt="mobile"
                className="  w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="right_fourth w-[50%]">
            <h2 className="mt-[36px] text-[70px] leading-[70px] font-[400]">
              We believe in improving life's
            </h2>

            <p className="mt-10 font-sans text-xl leading-8 ">
              We are committed to giving back to the <br /> community and donate
              5% of our revenue to <br />
              charities that make a difference in the lives of <br />
              others.
            </p>
          </div>
        </div>

        <hr className="py-[20px] mt-[100px] invisible" />
      </div>
    </>
  );
};

export default EightSec;
