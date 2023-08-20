import React from "react";

// components

// assets
import YpLogoIcon from "../../Assets/Images/YP Logo Primary Dark Icon.png";

const AboutUs = () => {
  return (
    <section class="body-font">
      <div class=" 2xl:w-[1000px] 2xl:m-auto container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-6xl  mb-4 font-bold ">About Us</h1>
          <p class="mb-8 leading-relaxed text-xs">
          At Yupgrab, we are a passionate team of creators, dreamers, and innovators. Our journey began with a vision to revolutionize the way individuals and businesses harness the power of the internet. With a focus on excellence and a commitment to innovation, we design and develop websites that not only stand out but also make a lasting impact. Our expertise, coupled with a deep understanding of the digital landscape, enables us to craft personalized solutions that cater to your unique needs. As your digital partner, we are dedicated to helping you turn your aspirations into tangible online success stories
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            width="400px"
            src={YpLogoIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
