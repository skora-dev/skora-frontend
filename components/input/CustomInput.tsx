"use client";

import { CustomInputProps } from "@/features/auth/types";
import React from "react";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
