import React, { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const workRef = useRef(null);

  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Tim Hansen
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000, // wait 1s before starting the next animation
              "Seeking New Opportunities",
              3000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in developing and architecting robust solutions that
          enhance digital experiences across platforms. With a focus on
          integrating functionality and design seamlessly, I craft innovative
          applications tailored to meet user needs and expectations.
        </p>
        <div>
          <button onClick={scrollToWork} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            More About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      {/* Work Section */}
      <div ref={workRef} className="h-screen bg-gray-200">
        {/* Your Work Section Content */}
      </div>
    </div>
  );
};

export default Home;
