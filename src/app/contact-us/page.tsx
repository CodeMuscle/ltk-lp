import React from "react";
import Image from "next/image";

import ContactForm from "../(components)/ContactForm";

import addressIcon from "../../../public/assets/address.svg";
import phoneIcon from "../../../public/assets/phone.svg";
import emailIcon from "../../../public/assets/email.svg";

const ContactUs = () => {
  return (
    <section className="py-12 w-full flex flex-col gap-16 items-center justify-center">
      <h1 className="font-semibold text-lg lg:text-4xl text-black">
        Contact Us
      </h1>

      {/* Form */}
      <div className="form-section w-full">
        <ContactForm />
      </div>

      {/* Support Section */}
      <div className="py-16 bg-[#D3B67C] w-full">
        <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto">
          <p className="text-white font-normal text-base lg:text-lg">Support</p>
          <h2 className="font-semibold text-lg lg:text-3xl text-white">
            Reach Our Team
          </h2>

          <div className="flex flex-row items-center justify-between w-full mt-6">
            {/* Address */}
            <div className="flex flex-col gap-4 items-center justify-center lg:w-1/3">
              <Image
                src={addressIcon}
                alt="address"
                width={20}
                height={20}
                className="min-h-[2rem]"
              />
              <h3 className="text-white font-medium text-base lg:text-2xl">
                Address
              </h3>
              <p className="text-white font-normal text-base text-center">
                22, Pillaiyar Kovil Street, Kannadapalayam, West Tambaram,
                Chennai - 45
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-4 items-center justify-center lg:w-1/3">
              <Image
                src={phoneIcon}
                alt="address"
                width={20}
                height={20}
                className="min-h-[2.5rem]"
              />
              <h3 className="text-white font-medium text-base lg:text-2xl">
                Phone Number
              </h3>
              <div className="flex flex-col gap-1 items-center justify-center text-center">
                <p className="text-white font-normal text-base">9840775556</p>
                <p className="text-white font-normal text-base">9840775556</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4 items-center justify-center lg:w-1/3">
              <Image
                src={emailIcon}
                alt="address"
                width={20}
                height={20}
                className="min-h-[2rem] -mt-6"
              />
              <h3 className="text-white font-medium text-base lg:text-2xl">
                Email
              </h3>
              <p className="text-white font-normal text-base text-center">
                Ithirunavukarasarcompany@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
