import { Dispatch, SetStateAction } from "react";

export interface HomeSidebarProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
