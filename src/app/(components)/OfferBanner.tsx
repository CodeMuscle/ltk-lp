import React from "react";

const OfferBanner = () => {
  return (
    <div className="w-full py-4 flex items-center justify-center bg-[#84160A]">
      <p className="lg:block text-base hidden text-white font-normal">
        Get 20% OFF on your first order! Use coupon code “WELCOME” *T&C apply
      </p>
      <p className="lg:hidden text-base text-white font-normal px-6 lg:px-0 text-center">
        Get 20% OFF on your first order! <br /> Use coupon code “WELCOME” *T&C
        apply
      </p>
    </div>
  );
};

export default OfferBanner;
