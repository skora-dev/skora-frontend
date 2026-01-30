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
export interface CustomSUccessProps {
  message: string;
  pathT0: string;
  className?: string;
  nextButton: string;
}
export interface LogoIconType {
  width?: number;
  height?: number;
  className?: string;
}
