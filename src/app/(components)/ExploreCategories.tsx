import Link from "next/link";
import React from "react";

const ExploreCategories = () => {
  return (
    <section className="w-full my-12 bg-categories">
      <div className="lg:py-24 max-w-[90%] mx-auto py-16 flex flex-col gap-3 items-center justify-center">
        <h2 className="font-semibold text-white text-lg lg:text-4xl">
          Explore Categories
        </h2>
        <p className="text-white font-normal text-base lg:text-lg text-center">
          Explore a variety of spices and food products to satisfy your palate.
        </p>
        <Link
          href="/products"
          className="text-white rounded-full px-12 py-1 bg-[#84160A] font-normal uppercase text-base lg:text-lg mt-3"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default ExploreCategories;
