"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInput from "@/components/input/CustomInput";
import CustomButton from "@/components/button/CustomButton";
import { registerSchema } from "../components/validation";
import { RegisterFormInputs } from "../types";
import Link from "next/link";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data: RegisterFormInputs) => {
    router.push("/email-verification");
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-secondary">
            Create Account
          </h2>
          <p className="text-tertiary mt-1">
            Manage your school’s academic records in one place.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            label="School Name"
            name="schoolName"
            type="text"
            placeholder="Enter your school name"
            register={register}
            error={errors.schoolName}
          />

          <CustomInput
            label="School Email"
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
              title="Create Account"
              type="submit"
              isLoading={isSubmitting}
            />
          </div>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 font-medium transition"
          >
            Login
          </Link>
        </p>
      </section>
    </section>
  );
};

export default RegisterPage;
