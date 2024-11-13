// src/app/(components)/auth/PhoneAuth.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  const handleSendOTP = async () => {
    const formattedPhone = `+91${phone}`;
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
      });
      if (error) throw error;
      setStep("otp");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOTP = async () => {
    const formattedPhone = `+91${phone}`;
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: formattedPhone,
        token: otp,
        type: "sms",
      });
      if (error) throw error;
      window.location.href = "/";
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="max-w-sm mx-auto space-y-4">
      {step === "phone" ? (
        <>
          <Input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}"
            maxLength={10}
          />
          <Button
            onClick={handleSendOTP}
            disabled={phone.length !== 10}
            className="w-full"
          >
            Send OTP
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
          />
          <Button
            onClick={handleVerifyOTP}
            disabled={otp.length !== 6}
            className="w-full"
          >
            Verify OTP
          </Button>
        </>
      )}
    </div>
  );
};
