import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  icon: ReactNode;
}
export interface SidebarCardProps {
  isActive: boolean;
  label: string;
  path?: string;
  className?: string;
  icon: ReactNode;
  onClick?: () => void;
}
export interface LogoutProps {
  open: boolean;
  onCancel: () => void;
}
