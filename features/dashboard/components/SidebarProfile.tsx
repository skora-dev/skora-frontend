import Image from "next/image";
import SidebarCard from "./SidebarCard";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { set } from "react-hook-form";
import LogoutModal from "./LogoutModal";

const SidebarProfile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogout = () => {
    setShowLogoutModal(true);
  };
  return (
    <section className="border border-[#CCCCCC] rounded-xl p-4 ">
      <div className="flex items-center gap-2 mb-5">
        <Image
          src="/images/user.jpg"
          alt="img"
          width={48}
          height={48}
          className="size-10 rounded-full"
        />
        <div className="">
          <h2 className="text-sm font-medium">user name</h2>
          <p className="text-xs">user role</p>
        </div>
      </div>
      <SidebarCard
        className="text-[#CA6A6A]"
        label="Logout"
        icon={<LogOut />}
        onClick={handleLogout}
        isActive={false}
      />
      {showLogoutModal && (
        <LogoutModal
          open={showLogoutModal}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </section>
  );
};

export default SidebarProfile;
