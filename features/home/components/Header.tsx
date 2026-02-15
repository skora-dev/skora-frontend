"use client";
import CustomButton from "@/components/button/CustomButton";
import CompanyLogo from "@/features/logo/CompanyLogo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HomeSidebar from "./HomeSidebar";
import { homeNavigation } from "./constants";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showSIdebar, setSHowSIdebar] = useState(false);
  const router = useRouter();
  return (
    <section className="px-6 border shadow border-gray-50">
      <header className="flex items-center py-4  justify-between">
        <div>
          <CompanyLogo />
        </div>
        <nav className="md:flex gap-4 items-center hidden ">
          {homeNavigation.map(({ title, path }, index) => (
            <Link href={path} key={index}>
              {title}
            </Link>
          ))}
          <CustomButton
            title="Get Started"
            className="w-fit"
            onClick={() => router.push("/register")}
          />
        </nav>
        <Menu
          onClick={() => setSHowSIdebar(true)}
          className="cursor-pointer md:hidden"
        />
        <HomeSidebar
          setShowSidebar={setSHowSIdebar}
          showSidebar={showSIdebar}
        />
      </header>
    </section>
  );
};

export default Header;
