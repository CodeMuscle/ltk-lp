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
        <p className="font-normal text-base">Return & Refund Policy</p>
      </div>

      <h2 className="font-medium text-lg lg:text-4xl text-black">
        Return & Refund Policy
      </h2>
      <p className="text-start max-w-5xl">
        At LTK, customer satisfaction is our top priority. We take great care to
        ensure that our edible products, including Asafoetida, Maida Powder, Mix
        Health Powder, and others, meet the highest quality standards. <br />
        <br /> However, we understand that there may be instances where you need
        to return a product or request a refund. This policy outlines the
        conditions and procedures for returns and refunds to ensure a smooth
        resolution. We accept returns for products that are damaged, defective,
        or incorrect. If you receive a product that does not meet your
        expectations, please contact us within [Insert Timeframe, e.g., 7 days]
        of receiving your order. To initiate a return, reach out to us at
        [Insert Email] or [Insert Phone Number] with your order details and a
        description of the issue. <br />
        <br /> Depending on the circumstances, we may ask for photos or videos
        of the product to better understand the problem. Products must be
        returned in their original packaging, unopened, and in a resalable
        condition. Items that are opened, used, or not in their original
        condition may not be eligible for a return. We reserve the right to
        inspect the returned product before processing any refunds or
        replacements. Once your return is approved, we will provide instructions
        on how to send the product back to us. Please note that return shipping
        costs may be the responsibility of the customer unless the return is due
        to a mistake on our part. <br />
        <br /> Refunds are issued once we receive and inspect the returned
        product. If your return is approved, a refund will be processed to your
        original payment method within [Insert Timeframe, e.g., 7-10 business
        days]. Please note that some payment providers may take additional time
        to reflect the refund in your account. If you paid using
        cash-on-delivery, we will issue your refund via bank transfer or store
        credit, based on your preference. Exchanges are available for products
        that are defective, damaged, or incorrect. If you would prefer a
        replacement over a refund, please indicate your preference when
        contacting our support team. <br />
        <br /> We will ensure that the replacement is sent to you promptly once
        the original item is returned and inspected. Certain items may not be
        eligible for returns or refunds due to their nature. This includes
        perishable items, custom orders, or products marked as final sale.
        Please review the product description carefully before making your
        purchase. LTK is committed to providing exceptional service and
        addressing any issues you encounter. If you have any concerns about your
        return or refund request, please do not hesitate to contact our support
        team at [Insert Email] or [Insert Phone Number]. <br />
        <br /> We are here to assist you and ensure that your experience with us
        is positive. We value your trust and are dedicated to resolving any
        issues in a fair and timely manner.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
