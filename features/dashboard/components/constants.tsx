import {
  LayoutGrid,
  Users,
  GraduationCap,
  FileText,
  CheckCircle,
  Settings,
  Download,
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
export const principalRoute: MenuItem[] = [
  { label: "Dashboard", icon: <LayoutGrid /> },
  { label: "Teachers", icon: <Users /> },
  { label: "Classes", icon: <GraduationCap /> },
  { label: "Approvals", icon: <CheckCircle /> },
  { label: "Downloads", icon: <Download /> },
  { label: "Settings", icon: <Settings /> },
];
