import Image from "next/image";
import React from "react";

import storyImage from "../../../public/assets/story.svg";
import { qualities } from "../(data)/homepage";

const OurStory = () => {
  return (
    <section className="xl:max-w-7xl max-w-[90%] my-16 mx-auto">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="text-xl lg:text-4xl text-black font-semibold text-center">
          Our Story
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="image-section lg:w-1/2">
            <Image src={storyImage} alt="our-story" style={{ width: "100%", maxHeight: '22rem' }} />
          </div>
          <div className="flex flex-col gap-12 lg:items-start items-center lg:w-1/2">
            <p className="font-normal text-base lg:text-lg">
              Launched in the year 2004, with 10 years experience in business
              and marketing, more specifically in spices, grains, millets etc.
              The Second Generation took over to experience and started up the
              company in brand name and style of “LTK”, which serves the
              customers, enjoys expansion in the best quality, healthy food
              products with no added chemicals, preservatives, additives. All
              the products are approved by laboratories.
            </p>
            <div className="flex flex-row gap-24 items-center justify-between">
              {qualities.map((quality) => (
                <div
                  key={quality.id}
                  className="flex flex-col gap-2 items-center justify-center"
                >
                  <Image
                    src={quality.icon}
                    alt={quality.text}
                    width={50}
                    height={50}
                    className="min-h-16"
                  />
                  <p className="font-normal text-base lg:text-lg">
                    {quality.text}
                  </p>
                </div>
              ))}
            </div>
            {/* <button className="rounded-full bg-[#84160A] px-12 py-2 font-normal uppercase text-base text-white">
              About Us
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
