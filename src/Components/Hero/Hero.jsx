import React from "react";

// components
import Navbar from "../Global/Navbar/Navbar";


const Hero = () => {
  return (
    <div>
      {/* GLobal Component */}
      <Navbar />

      {/* Child Components */}
      <Contant />
    </div>
  );
};

// Contant
const Contant = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font text-[80px] mb-4 font-medium text-yp-gray">
          Bringing Your <span className="bg-gradient-to-tr from-yp-orange to-w-red gradient-text">Business</span> to Life in the Digital Universe.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
