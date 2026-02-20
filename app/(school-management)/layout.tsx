import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import Sidebar from "@/features/dashboard/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex max-h-screen overflow-hidden">
      <div className="hidden md:flex w-full max-w-56 ">
        <Sidebar />
      </div>
      <div className="w-full no-scrollbar">
        <DashboardHeader />
        <div className="h-[95vh] no-scrollbar overflow-y-auto">{children}</div>
      </div>
    </main>
  );
}
