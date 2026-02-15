import { CircleX, X } from "lucide-react";
import { homeNavigation } from "./constants";
import Link from "next/link";
import { HomeSidebarProps } from "../types/types";
import CustomButton from "@/components/button/CustomButton";

const HomeSidebar = ({ showSidebar, setShowSidebar }: HomeSidebarProps) => {
  return (
    <>
      {showSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <article
        className={`
          fixed inset-y-0 left-0 z-50 w-2/3 max-w-72 bg-white flex flex-col p-6 shadow-lg md:hidden transform transition-transform duration-600  ease-in-out
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="justify-end flex items-center mt-6">
          <X
            size={28}
            className="cursor-pointer"
            onClick={() => setShowSidebar(false)}
          />
        </div>
        <nav className="mt-16 flex flex-col gap-6">
          {homeNavigation.map(({ path, title }) => (
            <Link href={path} className="text-primary font-medium" key={title}>
              {title}
            </Link>
          ))}
          <CustomButton title="Get Started" className="w-40" />
          <CustomButton title="Login" className="w-40" />
        </nav>
      </article>
    </>
  );
};

export default HomeSidebar;
