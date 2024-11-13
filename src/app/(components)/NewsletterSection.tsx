import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-full lg:py-24 py-12 flex flex-col lg:gap-10 gap-6 items-center justify-center bg-[#D3B67C]">
      <h2 className="text-white font-medium text-xl lg:text-4xl text-center lg:max-w-[50%] max-w-[85%]">
        Stay updated on the latest offers, and recipes by subscribing to our
        newsletter!
      </h2>
      <form className="flex flex-row gap-3">
        <input
          className="focus:outline-none placeholder:text-gray-200 placeholder:text-base font-normal rounded-full min-w-[20rem] lg:min-w-[30rem] px-6"
          type="text"
          id="name"
          name="name"
          placeholder="John"
        />
        <button className="rounded-full bg-[#84160A] text-uppercase font-normal text-white text-base px-4 py-2 -ml-28">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
