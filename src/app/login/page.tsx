import { PhoneAuth } from "@/app/(components)/auth/PhoneAuth";
import NewsletterSection from "../(components)/NewsletterSection";
import nextIcon from "../../../public/assets/next.svg";
import Link from "next/link";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="">
      <div className="lg:max-w-7xl max-w-[90%] mx-auto">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row gap-4 justify-start">
            <Link href="/" className="font-normal text-base hover:underline">
              Home
            </Link>
            <Image src={nextIcon} alt="icon" width={8} height={8} />
            <p className="font-normal text-base">Account</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-24 items-center justify-center mt-12">
        <div className="w-full max-w-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Login / Register
          </h1>
          <PhoneAuth />
        </div>
        <div className="w-full">
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
}
