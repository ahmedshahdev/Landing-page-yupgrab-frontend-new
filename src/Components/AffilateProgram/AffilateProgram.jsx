import React from "react";

// components

// assets
import YpLogoIcon from "../../Assets/Images/YP Logo Primary Dark Icon.png";

const AffilateProgram = () => {
  return (
    <section class="body-font bg-yp-gray text-white relative">
      <div class=" 2xl:w-[1000px]  2xl:m-auto container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-6xl  mb-2 font-bold ">
            Website Affiliate Program.
          </h1>
          <p class="mb-8 leading-relaxed text-lg ">
            Become Our Affiliate Partner and Earn Up to 30% per referral
          </p>

          <p class=" leading-relaxed text-xs w-1/2">
            Join us in our mission to ensure that everyone has a strong digital
            presence. In today's era, owning a website is not just beneficial,
            it's essential. It's a way to make your mark, stand out, and connect
            with your audience. At [Your Brand Name], we're passionate about
            helping individuals and businesses establish their online footprint.
            <br />
            <br />
            By becoming our affiliate partner, you become an integral part of
            this mission. Bring clients who are seeking to build their online
            identity, and in return, you'll earn a commission for every
            successful website. Your efforts will not only help others achieve
            their digital dreams but also contribute to your own financial
            growth. Let's collaborate and make the digital landscape more
            vibrant and accessible for all.
          </p>

          <h1 class="title-font text-6xl mt-24  mb-2 font-bold ">
            Payout Calculator.
          </h1>
          <p class="mb-8 leading-relaxed text-lg ">
            Discover how much you can get paid out
          </p>
        </div>
      </div>
      <div className=" 2xl:w-[1000px] 2xl:m-auto h-[120px]  bg-yp-orange mx-auto absolute left-1/2 rounded-lg -bottom-[60px] -translate-x-1/2 flex items-center px-10 text-yp-gray gap-10">
        <p className="font-bold">Total Referred <br /> Customers</p>
        <input type="text" className="h-12 bg-transparent border-yp-gray border-4 rounded-lg outline-none font-bold px-5" />
        <p className="font-bold">With</p>
   
        <select name="" id="" className="h-12 bg-transparent border-yp-gray border-4 rounded-lg outline-none font-bold px-5">
          <option value="">Starter Plan</option>
          <option value="">Custom Website</option>
          <option value="">Innovate Package</option>
        </select>
        <p className="font-bold text-center">Payout <br /> 0$ <br />
          <span className="text-xs">After the project Completed*</span>
        </p>


      </div>
    </section>
  );
};

export default AffilateProgram;
