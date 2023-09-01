import React from "react";
import arrow from "../components/assets/images/Arrow.png";

const Lets = () => {
  return (
    <div>
      <section className="section">
        <div
          className="bg-black rounded-t-full rounded-l-full mx-auto w-[340px] h-[340px]
sm:w-[400px] 
sm:h-[400px] 
sm:bg-gray-300
relative
hover:bg-black
hover:text-white
sm:text-black
text-white
duration-300
"
        >
          <div
            className="text-[35px] sm:text-[40px] text-center pt-24 px-10
"
          >
            Let's do something cool Together
          </div>

          <div className="mr-2 mt-10 absolute bottom-2 right-0">
            <div
              className="font-sans bg-white p-6 rounded-full flex w-max ml-auto
sm:hidden"
            >
              Let's Connect
              <img className="ml-2" src={arrow} alt="" />
            </div>
          </div>
        </div>

        {/* Direct SVG :V */}
        {/* <img className="mx-auto" src={Frame361} alt="" /> */}
      </section>
    </div>
  );
};

export default Lets;
