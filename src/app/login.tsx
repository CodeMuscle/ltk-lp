import { PhoneAuth } from "@/app/(components)/auth/PhoneAuth";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login / Register
        </h1>
        <PhoneAuth />
      </div>
    </div>
  );
}
