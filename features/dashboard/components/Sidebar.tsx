"use client";
import { usePathname } from "next/navigation";
import { menuItems } from "./constants";
import SidebarCard from "./SidebarCard";
import CompanyLogo from "@/features/logo/CompanyLogo";
import SidebarProfile from "./SidebarProfile";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="px-4 w-full max-w-72  shadow  overflow-y-auto py-4 justify-between  flex-col ">
      <section className="mt-4  flex flex-col justify-between gap-10">
        <CompanyLogo />
        <nav className="space-y-2 w-full  ">
          {menuItems.map((item) => {
            const isActive =
              pathname === `/dashboard/${item.label.toLowerCase()}`;
            return (
              <SidebarCard
                icon={item.icon}
                label={item.label}
                path={`/dashboard/${item.label.toLowerCase()}`}
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
