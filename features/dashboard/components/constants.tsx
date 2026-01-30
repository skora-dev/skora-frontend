import {
  LayoutGrid,
  Users,
  GraduationCap,
  FileText,
  CheckCircle,
  Settings,
} from "lucide-react";
import { MenuItem } from "../types/types";
export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <LayoutGrid /> },
  { label: "Students", icon: <Users /> },
  { label: "Academics", icon: <GraduationCap /> },
  { label: "Results", icon: <FileText /> },
  { label: "Approvals", icon: <CheckCircle /> },
  { label: "Settings", icon: <Settings /> },
];
