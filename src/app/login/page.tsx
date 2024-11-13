import { PhoneAuth } from "@/app/(components)/auth/PhoneAuth";
import NewsletterSection from "../(components)/NewsletterSection";

export default function AuthPage() {
  return (
    <div className="mt-20 mx-auto flex flex-col gap-24 items-center justify-center">
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
  );
}
