import AuthSide from "@/features/auth/AuthSide";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-between gap-6 font-sans ">
      <section className="hidden md:block w-full h-screen bg-blue-100 p-10 ">
        <AuthSide />
      </section>
      <div className="w-full h-screen overflow-y-auto">{children}</div>
    </main>
  );
}
