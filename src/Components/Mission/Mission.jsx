import React from "react";

// components

// assets
import YpLogoIcon from "../../Assets/Images/YP Logo Primary Dark Icon.png";

const Mission = () => {
  return (
    <section class="body-font">
      <div class=" 2xl:w-[1000px] 2xl:m-auto container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-6xl  mb-4 font-bold ">Our Mission</h1>
          <p class="mb-8 leading-relaxed text-xs">
            At Yupgrab, our mission is clear: Empower individuals and businesses
            to harness the full potential of the digital world. We believe that
            every idea, every venture, and every passion deserves a strong
            online presence. Our commitment is to provide accessible,
            affordable, and innovative website solutions that bridge the gap
            between dreams and reality. Through our expert guidance,
            cutting-edge designs, and tailored packages, we aim to be the
            driving force behind your online success. Join us on this journey as
            we transform aspirations into impactful digital realities
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

export default Mission;
