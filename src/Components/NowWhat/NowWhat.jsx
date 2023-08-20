import React from "react";

// components

// assets
import YpLogoIcon from "../../Assets/Images/YP Logo Primary Dark Icon.png";

const NowWhat = () => {
  return (
    <section class="body-font bg-gradient-to-tr from-w-light-green to-w-skyblue">
      <div class=" 2xl:w-[1000px] 2xl:m-auto container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-6xl  mb-4 font-bold ">Now What ?</h1>
          <p class="mb-8 leading-relaxed text-xs">
            Still have some questions, or are you ready to begin the process of
            building your website? Either way, we are here for you every step of
            the way!
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
          <div className="grid grid-cols-2 gap-5">
            <a className="  inline-flex font-bold cursor-pointer hover:bg-yp-orange items-center text-xs px-5 py-3 bg-w-dark-gray rounded-md text-white justify-center uppercase h-14">
            Schedule Appointment 
            </a>{" "}
            <a className="  inline-flex font-bold cursor-pointer hover:bg-yp-orange items-center text-xs px-5 py-3 bg-w-dark-gray rounded-md text-white justify-center uppercase h-14">
              Whatsapp
            </a>{" "}
            <a className="  inline-flex font-bold cursor-pointer hover:bg-yp-orange items-center text-xs px-5 py-3 bg-w-dark-gray rounded-md text-white justify-center uppercase h-14">
              Email
            </a>{" "}
            <a className="  inline-flex font-bold cursor-pointer hover:bg-yp-orange items-center text-xs px-5 py-3 bg-w-dark-gray rounded-md text-white justify-center uppercase h-14">
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowWhat;
