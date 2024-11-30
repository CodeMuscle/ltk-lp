"use client";

import React, { useState } from "react";

const NewsletterSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim()) {
      setFormSubmitted(true); // Show the thanks message
      setFormData({ email: "" }); // Clear the input field
      setTimeout(() => setFormSubmitted(false), 20000); // Hide the message after 20 seconds
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full lg:py-24 py-12 flex flex-col lg:gap-10 gap-6 items-center justify-center bg-[#D3B67C]">
      {formSubmitted ? (
        <h2 className="text-white font-medium text-xl lg:text-4xl text-center lg:max-w-[50%] max-w-[85%]">
          Thanks for your submission!
        </h2>
      ) : (
        <>
          <h2 className="text-white font-medium text-xl lg:text-4xl text-center lg:max-w-[50%] max-w-[85%]">
            Stay updated on the latest offers and recipes by subscribing to our
            newsletter!
          </h2>
          <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
            <input
              className="focus:outline-none placeholder:text-gray-200 placeholder:text-base font-normal rounded-full min-w-[20rem] lg:min-w-[30rem] px-6"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email ID"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-[#84160A] text-uppercase font-normal text-white text-base px-4 py-2 -ml-28"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default NewsletterSection;
