import Image from "next/image";

import orders from "../../../public/assets/orders.svg";
import contact from "../../../public/assets/contact.svg";
import Link from "next/link";

const EnquirySection = () => {
  return (
    <section className="xl:max-w-7xl max-w-[90%] my-16 mx-auto">
      <div className="flex md:flex-row flex-col gap-0 h-full">
        <div className="md:w-1/2 w-full">
          <Link href="/bulk-orders" className="w-full lg:min-h-[25em] md:min-h-[15rem] bg-[#FFE1DE] hover:bg-[#ffcec9] duration-300 transition-colors px-8 py-4 flex flex-col items-center justify-center gap-5">
            <Image src={orders} alt="orders" width={100} height={100} />
            <h2 className="font-semibold text-xl lg:text-4xl">
              Bulk Orders & Inquries
            </h2>
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <Link href="/contact-us" className="w-full lg:min-h-[25em] md:min-h-[15rem] bg-[#FFF5E2] hover:bg-[#ffeac3] duration-300 transition-colors px-8 py-4 flex flex-col items-center justify-center gap-5">
            <Image src={contact} alt="orders" width={100} height={100} />
            <h2 className="font-semibold text-xl lg:text-4xl">Contact Us</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
