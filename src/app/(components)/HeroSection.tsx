import Image from "next/image";
import React from "react";

import heroBanner from "../../../public/assets/heroBanner.png";

const HeroSection = () => {
  return (
    <section className="w-full">
      <Image src={heroBanner} alt="heroBanner" style={{ width: "100%", maxWidth: '1920px' }} />
    </section>
  );
};

export default HeroSection;
