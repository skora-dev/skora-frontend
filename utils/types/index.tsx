import { ReactNode } from "react";

export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
}
