"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  contact: string;
  city: string;
  businessType: string;
  message: string;
}

export default function BulkOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    city: "",
    businessType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      // @ts-expect-error: Ignore TypeScript error on e.target access
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      contact: e.currentTarget.contact.value,
      city: e.currentTarget.city.value,
      businessType: e.currentTarget.businessType.value,
      message: e.currentTarget.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyWhWzIk3-FqCNNvSTNHAWilZ_f4vZV8LJzciK3LeJPIu08VYDea6DIPcUZ6H-Wy-8r/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.result === "success") {
          console.log("Bulk order data submitted successfully!");
        } else {
          console.error("Error in submission:", result.message);
        }
      } else {
        console.error("Network response was not ok:", response.statusText);
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
      <div className="mb-8 flex flex-col items-start justify-start">
        <p className="text-black font-normal text-lg">
          Order in bulk at best rates! <br />
          Elevate your business with our wide range of products.
        </p>
      </div>
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
          required
          value={formData.contact}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label htmlFor="city" className="block font-medium text-gray-700">
          City*
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="businessType"
          className="block font-medium text-gray-700"
        >
          Business Type*
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          value={formData.businessType}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-md p-2 mt-1"
        >
          <option value="">Select a Business Type</option>
          <option value="Retailer">Retailer</option>
          <option value="Wholesaler">Wholesaler</option>
          <option value="Distributor">Distributor</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
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
