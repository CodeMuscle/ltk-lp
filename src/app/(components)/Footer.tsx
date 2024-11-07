import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "../../../public/assets/logo.svg";
import { footerLinks, socialIcons } from "../(data)/footer";
import paymentIcon from "../../../public/assets/payment.svg";

const Footer = () => {
  return (
    <footer className="bg-white w-full py-12">
      <div className="xl:max-w-7xl max-w-[90%] mx-auto flex flex-col gap-10 items-start">
        <div className="w-full flex md:flex-row flex-col items-start gap-12 lg:gap-x-36 justify-between">
          <div className="flex flex-col lg:gap-12 gap-8 items-start max-w-60">
            <div className="flex flex-col gap-2 items-start">
              <Image src={logo} alt="LTK" width={120} height={60} />
              <p className="text-black font-normal lg:text-base text-sm">
                Quick, Nutritious, and Delicious - Your Healthy Meal in Minutes!
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base lg:text-lg font-semibold text-black">
                Social Support
              </p>
              <div className="flex flex-row gap-3 items-center justify-start">
                {socialIcons.map((icon) => (
                  <Link href={icon.href} key={icon.id}>
                    <Image src={icon.icon} alt={icon.name} width={20} height={20} />  
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row items-start md:gap-16 lg:gap-x-36 xl:gap-x-52 grid grid-cols-2 gap-12">        
            <div className="flex flex-col gap-4 items-start text-black">
              <h2 className="font-semibold text-lg lg:text-xl">
                Main Menu
              </h2>
              {footerLinks.mainMenu.map((link) => (
                <div className="flex flex-col gap-2 items-start">
                  <Link key={link.id} href={link.url} className="font-normal text-base hover:underline hover:underline-offset-1">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 items-start text-black">
              <h2 className="font-semibold text-lg lg:text-xl">
                Our Company
              </h2>
              {footerLinks.company.map((link) => (
                <div className="flex flex-col gap-2 items-start">
                  <Link key={link.id} href={link.url} className="font-normal text-base hover:underline hover:underline-offset-1">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-start text-black">
              <h2 className="font-semibold text-lg lg:text-xl">
                Your Account
              </h2>
              {footerLinks.account.map((link) => (
                <div className="flex flex-col gap-2 items-start">
                  <Link key={link.id} href={link.url} className="font-normal text-base hover:underline hover:underline-offset-1">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start">
          <p className="text-black font-semibold text-base lg:text-lg">
            Payment Accepted
          </p>
          <Image src={paymentIcon} alt="payment" width={300} height={50} />  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
