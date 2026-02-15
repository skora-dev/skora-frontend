"use client";

import { CustomInputProps } from "@/features/auth/types";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-secondary text-sm font-medium ">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full px-3 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
