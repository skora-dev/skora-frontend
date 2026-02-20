"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../components/validation";
import { LoginFormInputs } from "../types";
import CustomInput from "@/components/input/CustomInput";
import CustomButton from "@/components/button/CustomButton";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { login, User } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    toast.success("Login successfully");
    router.push("/management/dashboard");
    const payload: User = { ...data, role: "management", id: "", name: "" };
    dispatch(login(payload));
    console.log(payload);
  };
  return (
    <section className=" flex h-full items-center justify-center px-4">
      <div className="w-full max-w-md p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-secondary">
            Welcome Back
          </h2>
          <p className="text-tertiary text-sm">
            Manage your school’s academic records in one place.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            label="School Email"
            name="email"
            type="email"
            placeholder="Enter your school email"
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
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-700 font-medium transition"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
