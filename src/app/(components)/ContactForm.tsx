"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      // @ts-ignore: Ignore TypeScript error on e.target access
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      contact: e.currentTarget.contact.value,
      message: e.currentTarget.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx27P5Npww1hDeqT7qWD4mqQWYuYrnQOuMPBQ9ZooEEfxDazR0ZvERtMEdwe8IFDd-V/exec",
        {
          method: "POST", // Ensure this is set to POST
          headers: {
            "Content-Type": "application/json", // The request content type should be JSON
          },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        console.log("Data submitted successfully!");
      } else {
        console.error("Error submitting data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto px-8 py-12 space-y-4 border border-gray-100 shadow-lg rounded-2xl"
    >
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium text-gray-700">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label htmlFor="contact" className="block font-medium text-gray-700">
          Contact*
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="Enter your contact number"
          required
          value={formData.contact}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
          rows={8}
        />
      </div>
      <button
        type="submit"
        className="w-fit bg-[#84160A] rounded-full text-white px-12 py-2 hover:bg-[#84160A] transition-colors duration-300 uppercase font-normal text-xl"
      >
        Submit
      </button>
    </form>
  );
}
