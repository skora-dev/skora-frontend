"use client";
import CustomButton from "@/components/button/CustomButton";
import { LogoutProps } from "../types/types";
import { useRouter } from "next/navigation";

const LogoutModal = ({ open, onCancel }: LogoutProps) => {
  const router = useRouter();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[90%] max-w-sm rounded-md bg-white shadow-lg">
        {/* Header */}
        <div className="px-6 pt-5">
          <h2 className="text-base font-semibold text-gray-900">
            Confirm Logout
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600">
            Are you sure you want to log out?
          </p>
        </div>

        {/* Footer */}
        <div className="flex w-full justify-center gap-4 px-6 pb-5">
          <CustomButton
            title="Cancel"
            onClick={onCancel}
            className="w-1/2 border border-[#CCCCCC] hover:bg-gray-100 cursor-pointer bg-white text-black"
          />
          <CustomButton
            title="Logout"
            onClick={() => router.push("/login")}
            className="w-1/2 bg-red-500 text-white hover:bg-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
