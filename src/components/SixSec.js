import { Link } from 'react-router-dom';

const SixSec = () => {
  return (
    <>
      <div className="mt-[120px] sixSecWrapper">
        <h2 className="mobile">Our Projects</h2>
        <div className="flex justify-between secSix">
          <div className="left_six w-[50%] pl-24 ">
            <h2 className="leading-[56px] text-[56px] font-[400]  ">
              DopeCast - Podcast <br /> Platform
            </h2>
            <p className="text-[16px] leading-[27.56px] font-sans  pr-24 mt-10">
              DopeCast is an On-Demand-Podcast service platform concept for
              focused listening. Our main goal of the platform is to design
              elegant, modern & focused client-side UI for mobile, desktop,
              watch & web with the most enhanced user experience possible around
              the world. It’s made for pure podcast listening without any
              distractions.
            </p>

            <div className="arothmatic mt-[45px]">
              <Link
                to="/"
                className="font-sans hover:cursor-wait flex items-center relative"
              >
                <span className="dig font-sans">DIG DEEPER</span>{' '}
                <img
                  className="ml-4 h-[8px]"
                  src="images/right_arrow.png"
                  alt="right arrow"
                />
              </Link>
            </div>
          </div>

          <div className="right_six w-[50%]">
            <img src="images/gbg.png" alt="bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SixSec;
