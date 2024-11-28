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
        <p className="font-normal text-base">Privacy Policy</p>
      </div>

      <h2 className="font-medium text-lg lg:text-4xl text-black">
        Privacy Policy
      </h2>
      <p className="text-start max-w-5xl">
        We are deeply committed to protecting your personal information and
        maintaining transparency about how we handle your data. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard the
        information you provide to us when visiting our website or purchasing
        our edible products, such as Asafoetida, Maida Powder, Mix Health
        Powder, and other items. Your privacy is important to us, and we strive
        to ensure that your data is handled responsibly and securely. <br/> <br /> When you
        interact with our website or place an order, we may collect certain
        information from you. This includes your name, email address, phone
        number, delivery address, and payment details. Additionally, we may
        gather technical data such as your IP address, browser type, and cookies
        to improve our website’s functionality and your user experience. Rest
        assured, all information collected is done with your consent and is
        necessary to provide the services you request. <br/> <br /> We use your personal
        information to process and fulfill your orders, communicate with you
        regarding your purchases, and keep you updated about new products or
        offers. Occasionally, we may use your data for internal analysis to
        enhance our services. We do not share your personal information with
        third parties except when required to process your order, such as with
        payment gateways or delivery partners. <br/> <br /> At LTK, we implement strict
        security measures to safeguard your data. However, no system is entirely
        secure, and while we do our utmost to protect your information, we
        cannot guarantee absolute security. By using our website, you
        acknowledge and accept this risk. If you wish to access, modify, or
        delete your personal information, please reach out to us at [Insert
        Email]. We respect your rights and will respond promptly to your
        requests. By continuing to use our website, you agree to this Privacy
        Policy. Updates to this policy will be posted here, and we encourage you
        to review it periodically.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
