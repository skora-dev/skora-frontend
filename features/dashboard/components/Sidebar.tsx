"use client";
import { usePathname } from "next/navigation";
import { menuItems, principalRoute } from "./constants";
import SidebarCard from "./SidebarCard";
import CompanyLogo from "@/features/logo/CompanyLogo";
import SidebarProfile from "./SidebarProfile";
import { useMemo } from "react";
import { MenuItem } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const Sidebar = () => {
  const pathname = usePathname();
  const role = useSelector((state: RootState) => state.auth.userRole);
  console.log(role);

  const menu: MenuItem[] = useMemo(() => {
    return role === "teachers" ? menuItems : principalRoute;
  }, [role]);
  return (
    <aside className="px-4 w-full max-w-72  shadow  overflow-y-auto no-scrollbar py-4 justify-between  flex-col ">
      <section className="mt-4  flex flex-col justify-between gap-10">
        <CompanyLogo />
        <nav className="space-y-2 w-full  ">
          {menu.map((item) => {
            const isActive =
              pathname === `/${role}/${item.label.toLowerCase()}`;
            return (
              <SidebarCard
                icon={item.icon}
                label={item.label}
                path={`/${role}/${item.label.toLowerCase()}`}
                key={item.label}
                isActive={isActive}
              />
            );
          })}
        </nav>
      </section>
      <SidebarProfile />
    </aside>
  );
};

export default Sidebar;
