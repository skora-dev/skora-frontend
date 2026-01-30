import Sidebar from "@/features/dashboard/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex  gap-6 min-h-screen overflow-hidden">
      <Sidebar />
      <div className="">{children}</div>
    </main>
  );
}
