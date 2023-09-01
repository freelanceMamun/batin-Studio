import Nav from "../components/Nav";
import contactUs from "../components/assets/images/contactus.png";
import frame365 from "../components/assets/images/chuttersnap-IfmqOuOkaOA-unsplash.svg";
import Frame361 from "../components/assets/images/Frame 361.svg";
import arrow from "../components/assets/images/Line 4.svg";

import Logo from "../components/assets/images/Rectangle 2.svg";
import Footer from "../components/Footer";
import Lets from "../components/Lets";

const About = () => {
  return (
    <>
      <Nav></Nav>

      <section className="section">
        <div className="lg:flex">
          <div
            className="flex justify-between
          lg:flex-col
          lg:w-[40%]"
          >
            <div className="my-title sm:text-left sm:my-auto">
              We are Batin Studio
            </div>
            <div className="hidden sm:block">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div
            className="my-paragraph text-center sm:text-left
          lg:w-[60%]"
          >
            We are a digital product design and development agency. In our team,
            developers work alongside designers, strategists and analysts. We
            don't do cookie-cutter solutions and we build products exactly as
            they were during the design phase, no short cuts or simplifications.
            <br />
            <br />
            We're driven by user-centered design that drives productivity and
            increases revenue. Our expertise and ingenuity are remarkable, yet
            we always strive to outdo and outperform our previous achievements.
          </div>
        </div>
      </section>

      <section className="section lg:flex lg:flex-row-reverse">
        <div className="lg:w-[60%]">
          <div className="my-title lg:text-left">
            We believe in improving life's
          </div>

          <div className="my-paragraph text-center lg:text-left">
            <img className="wrap-image" src={contactUs} alt="" />
            We give away 5% of our revenue to charity for helping people,
            planting trees, building a sustainable future, or most importantly
            to improve human lives, especially kids.
          </div>
        </div>

        <div className="mt-6 lg:w-[40%]">
          <img className="mx-auto lg:mx-0" src={frame365} alt="" />
        </div>
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

export default About;
