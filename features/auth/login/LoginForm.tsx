"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../components/validation";
import { LoginFormInputs } from "../types";
import CustomInput from "@/components/input/CustomInput";
import CustomButton from "@/components/button/CustomButton";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
  };
  return (
    <section className=" flex h-full items-center justify-center px-4">
      <div className="w-full max-w-md p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Skora</h2>
          <p className="text-gray-500 mt-1">Welcome back 👋</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email}
          />

          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            error={errors.password}
          />

          <div className="pt-2">
            <CustomButton
              title="Login"
              type="submit"
              isLoading={isSubmitting}
            />
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium transition"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
