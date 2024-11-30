import Image from "next/image";
import React from "react";

import heroBanner from "../../../public/assets/heroBanner.png";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto">
      <Image src={heroBanner} alt="heroBanner" style={{ width: "100%" }} />
    </section>
  );
};

export default HeroSection;
