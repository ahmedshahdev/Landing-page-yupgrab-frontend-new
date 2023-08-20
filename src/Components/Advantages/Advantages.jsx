import React from "react";

// components

// assets
import AdvantagesSvg from "../../Assets/Images/Advantages.svg";

const Advantages = () => {
  return (
    <section class="body-font">
      <div class=" 2xl:w-[1000px] 2xl:m-auto container mx-auto  px-5 py-24">
        <h1 class="title-font text-6xl  mb-4 font-bold mt-[60px] ">
          Advantages of heaving a website.
        </h1>
        <div className="flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <p class="mb-8 leading-relaxed text-xs">
              In the digital age, having a website goes beyond just having an
              online presence – it's about harnessing a multitude of benefits
              that can propel your business or personal brand to new heights. A
              website serves as your virtual storefront, available 24/7 to a
              global audience. It enhances your credibility, establishes your
              authority, and provides a platform to showcase your offerings and
              accomplishments. From expanding your reach to boosting your
              brand's visibility, having a website is the cornerstone of success
              in the modern world. Join us at [Your Brand Name] and let's
              transform your digital presence into a game-changer.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              width="300px"
              src={AdvantagesSvg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
