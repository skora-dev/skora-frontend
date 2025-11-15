"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInput from "@/components/input/CustomInput";
import CustomButton from "@/components/button/CustomButton";
import { registerSchema } from "../components/validation";
import { RegisterFormInputs } from "../types";
import { useState } from "react";
import CustomSuccess from "@/components/modals/success/CustomSuccess";
import Link from "next/link";
const RegisterPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data: RegisterFormInputs) => {
    setIsSuccess(true);
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Skora</h2>
          <p className="text-gray-500 mt-1">Welcome to Skora 👋</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            register={register}
            error={errors.firstName}
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            register={register}
            error={errors.lastName}
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email}
          />
          <CustomInput
            label="Phone Number "
            name="phoneNumber"
            type="number"
            placeholder="Enter your phone number"
            register={register}
            error={errors.phoneNumber}
          />
          <CustomInput
            label="Password "
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            error={errors.password}
          />
          <CustomInput
            label="Confirm Password "
            name="confirmPassword"
            type="password"
            placeholder="Please confirm your password"
            register={register}
            error={errors.confirmPassword}
          />
          <div className="pt-2 w-full max-w-sm mx-auto">
            <CustomButton
              title="Login"
              type="submit"
              isLoading={isSubmitting}
            />
          </div>
        </form>

        <p className="text-center text-sm text-gray-500">
          ALready have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 font-medium transition"
          >
            Login
          </Link>
        </p>
      </section>
      {isSuccess && (
        <CustomSuccess
          message="You have successfully register an account"
          nextButton="Proceed to Login"
          pathT0="/login"
        />
      )}
    </section>
  );
};

export default RegisterPage;
