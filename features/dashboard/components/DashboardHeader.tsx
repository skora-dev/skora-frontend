"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const DashboardHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="p-3 px-6 flex justify-between items-center  w-full shadow">
      {/* replace with sch details  */}
      <div className="flex gap-1 items-baseline">
        <h3 className="text-secondary">Skora International School </h3>
        <p className="text-tertiary text-xs">2025/2026 Session</p>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/dashboard/profile">
          <Image
            src="/images/user.jpg"
            alt="img"
            width={48}
            height={48}
            className="size-10 rounded-full"
          />
        </Link>
        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setShowSidebar(true)}
        />
      </div>
      {
        <>
          {showSidebar && (
            <div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setShowSidebar(false)}
            />
          )}
          <article
            className={`
          fixed inset-y-0 left-0 z-50 w-2/3 max-w-56 bg-white flex flex-col  shadow-lg md:hidden transform transition-transform duration-600  ease-in-out
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
          >
            <Sidebar />
          </article>
        </>
      }
    </div>
  );
};

export default DashboardHeader;
