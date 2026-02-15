"use client";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import CustomSuccess from "@/components/modals/success/CustomSuccess";
import CustomButton from "@/components/button/CustomButton";

export const EmailVerify = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [timer, setTimer] = useState(30);

  // countdown
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    setOtp("");
    // simulate resend API
    console.log("OTP resent");
  };

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // simulate API call
      await new Promise((res) => setTimeout(res, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      {!isSuccess && (
        <div className=" rounded-2xl p-6 w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Verify Your Email
          </h2>
          <p className="text-center text-gray-600">
            Enter the 4‑digit code sent to your email
          </p>
          <form onSubmit={handleVerify}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              containerStyle="flex justify-center my-6 gap-6"
              inputStyle="border rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              renderInput={(props) => (
                <input
                  {...props}
                  type="number"
                  className=" border w-10! h-10! rounded-sm"
                />
              )}
            />
            <div>
              <CustomButton
                className="w-[90%] max-w-[260px] mx-auto"
                title="Verify"
                disabled={otp.length !== 4 || isLoading}
                type="submit"
                isLoading={isLoading}
              />
            </div>
          </form>
          <div className="text-center mt-4">
            {timer > 0 ? (
              <p className="text-gray-500 text-sm">Resend OTP in {timer}s</p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      )}

      {isSuccess && (
        <CustomSuccess
          message="You have successfully registered an account"
          nextButton="Proceed to Login"
          pathT0="/login"
        />
      )}
    </section>
  );
};
