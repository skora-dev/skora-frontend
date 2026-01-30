'use client";';
import { useRouter } from "next/navigation";
import { SidebarCardProps } from "../types/types";
import { cn } from "@/lib/utils";

const SidebarCard = ({
  label,
  icon,
  onClick,
  path,
  className,
  isActive,
}: SidebarCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    } else if (path) {
      router.push(path);
    } else {
      router.push("/");
    }
  };
  return (
    <button
      onClick={handleClick}
      key={label}
      className={cn(
        `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
          isActive
            ? "bg-[#2563EB] text-white"
            : "text-[#666666] hover:bg-gray-100"
        }`,
        className,
      )}
    >
      {icon}
      <p>{label}</p>
    </button>
  );
};

export default SidebarCard;
