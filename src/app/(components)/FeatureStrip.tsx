import React from "react";
import { features } from "../(data)/homepage";
import Image from "next/image";

const FeatureStrip = () => {
  return (
    <div className="w-full bg-[#84160A]">
      <div className="max-w-7xl lg:px-6 lg:py-4 p-10 mx-auto lg:flex lg:flex-row grid grid-cols-2 items-center justify-between lg:gap-x-16 gap-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-row gap-4 items-center justify-center"
          >
            <div className="flex items-center justify-center bg-white rounded-full min-h-[45px] min-w-[45px]">
              <Image
                src={feature.icon}
                alt={feature.name}
                width={25}
                height={25}
              />
            </div>
            <p className="text-white font-normal text-base lg:text-lg">
              {feature.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureStrip;
