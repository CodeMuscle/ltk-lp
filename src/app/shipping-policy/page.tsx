import Image from "next/image";
import Link from "next/link";
import nextIcon from "../../../public/assets/next.svg";

const PrivacyPolicy = () => {
  return (
    <section className="py-12 w-full flex flex-col gap-16 items-center justify-center">
      <div className="flex flex-row gap-4 justify-start">
        <Link href="/" className="font-normal text-base hover:underline">
          Home
        </Link>
        <Image src={nextIcon} alt="icon" width={8} height={8} />
        <p className="font-normal text-base">Shipping Policy</p>
      </div>

      <h2 className="font-medium text-lg lg:text-4xl text-black">
        Shipping Policy
      </h2>
      <p className="text-start max-w-5xl">
        We are dedicated to providing you with a seamless delivery experience
        for all our edible products, including Asafoetida, Maida Powder, Mix
        Health Powder, and more. This Shipping Policy explains how we handle
        shipping, delivery, and related concerns. <br/><br/> By placing an order with us,
        you agree to the terms outlined below. We process orders promptly to
        ensure timely delivery. Orders placed before [Insert Cut-off Time, e.g.,
        2:00 PM] on business days are processed the same day. Any orders placed
        after this time or during weekends and public holidays are processed on
        the next business day. Once your order is processed, you will receive an
        email confirmation containing your order details and a tracking number,
        if applicable. <br/><br/> We offer multiple shipping options to suit your needs.
        Standard shipping typically takes [Insert Estimated Delivery Time, e.g.,
        3-7 business days], while express shipping takes [Insert Estimated
        Delivery Time, e.g., 1-3 business days]. Delivery times may vary
        depending on your location, carrier schedules, or unforeseen
        circumstances, and remote areas may require additional time. Shipping
        costs are calculated at checkout based on your chosen method,
        destination, and the total weight of your order. We also offer free
        shipping on orders above [Insert Minimum Amount, e.g., $50]. LTK
        currently delivers across [Insert Region or Country, e.g., India]. <br/><br/> If
        you are interested in international shipping, please contact us at
        [Insert Email] to discuss options and associated charges. Once your
        package is shipped, you will receive a tracking number to monitor its
        journey through the carrier’s tracking system. Please ensure the
        shipping address provided during checkout is accurate and complete. LTK
        is not responsible for delays or failed deliveries caused by incorrect
        or incomplete addresses. <br/><br/> If no one is available to receive the package,
        the carrier may attempt redelivery or hold the package at a local
        facility. Any additional charges for redelivery are the responsibility
        of the customer. In cases where packages are returned to us due to
        incorrect addresses or refusal of delivery, we will contact you to
        arrange reshipping, which may incur additional shipping fees. If your
        package is lost or damaged during transit, please contact us at [Insert
        Email] within [Insert Timeframe, e.g., 48 hours] of delivery to report
        the issue. <br/><br/> We will work with the carrier to investigate and resolve the
        matter promptly. While we do our best to ensure timely deliveries,
        delays may occur due to unforeseen events such as natural disasters,
        severe weather, customs clearance for international shipments, or
        carrier-related issues. We will keep you informed and take necessary
        steps to address such delays. For any questions or concerns about your
        order or shipping, please reach out to us at [Insert Contact Email] or
        [Insert Phone Number]. Our team is here to assist you and ensure a
        smooth delivery experience.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
