import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { CustomButtonProps } from "@/utils/types";

const CustomButton = ({
  title,
  onClick,
  type = "button",
  isLoading,
  leftIcon,
  rightIcon,
  disabled,
  className,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={cn(
        "flex items-center justify-center gap-2 bg-primary w-full cursor-pointer max-w-md text-white hover:bg-primary/90 disabled:bg-gray-400",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="mr-1">{leftIcon}</span>}
          <span>{title}</span>
          {rightIcon && <span className="ml-1">{rightIcon}</span>}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
