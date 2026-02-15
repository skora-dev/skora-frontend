import Header from "@/features/home/components/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skora Home",
  description: "Grade and scoring make faster",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
