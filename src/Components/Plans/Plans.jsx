import React from "react";

// components

// assets

const Plans = () => {
  return (
    <div>
      {/* child components */}
      <section className="bg-gradient-to-tr from-yp-orange to-w-red ">
        <div className="container px-5 py-24 mx-auto  2xl:w-[1000px] 2xl:m-auto">
          {/* plans cards */}
          <div className="flex flex-wrap -m-4">
            <PlansCard
              title="Starter Plan"
              description="Launch Your Website with the Elite Plan: Affordable and Effective. Dreaming of a website but worried about the cost? Our Elite Plan is here to make your digital journey easy on your budget. Whether you're a new business, a home entrepreneur, or just someone with a vision, this plan is your ticket to an impressive online presence without the hassle. Join us today and see how simple and affordable getting noticed online can be."
            />

            <PlansCard
              title="Custom Website"
              description="Craft Your Perfect Digital Presence with the Custom Package: Tailored to Your Needs. Already have a vision for your website? Our Custom Package is designed to bring your ideas to life. Whether you're an individual with a clear vision or a business owner seeking a unique online identity, this package offers personalized website solutions that align with your goals. Our expert team will work closely with you to ensure every detail reflects your brand and message. Elevate your online presence with a website that's as unique as you are. Explore the possibilities with our Custom Package today."
            />

            <PlansCard
              title="Innovate Plan"
              description="Turn Your Digital Solution Dream into Reality with the Innovate Package: Where Your Vision Meets Our Expertise. Have a groundbreaking idea for a digital solution? Our Innovate Package is designed to turn your concept into a fully functional and user-friendly website. Whether you're envisioning a platform, app, or specialized online service, our experienced team will collaborate with you to understand your goals, requirements, and design preferences. From concept to execution, we'll work diligently to create a digital solution that meets your needs and resonates with your audience. Empower your idea with our Innovate Package and make your mark in the digital landscape."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const PlansCard = ({ title, description }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-xl h-full bg-yp-gray text-white p-8 flex-col border-t-[7px] border-white">
        <div className="flex items-center mb-3">
          {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div> */}
          <h2 className=" text-lg title-font font-bold">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-xs font-normal text-justify">
            {description}
          </p>
          
        </div>
        <div className="w-full flex justify-end h-32 items-end">
            <a className="  inline-flex font-bold cursor-pointer hover:bg-yp-orange items-center text-xs px-5 py-3 bg-w-dark-gray rounded-md">
              Get Started
            </a>
          </div>
      </div>
    </div>
  );
};

export default Plans;
