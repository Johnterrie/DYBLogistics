import type { Metadata } from "next";
import Nav from "@/app/components/customer/Nav";
import SideNav from "@/app/components/customer/sideNav";
import "../../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DYB Africa Logistics | Customer",
  description: "Reliable Logistics, On-Time Every Time",
};

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased md:overflow-hidden`}>
        <main className="absolute inset-0 md:fixed z-[10000] md:flex md:flex-col bg-white md:h-screen">
          <Nav />
          <div className="flex flex-1 md:overflow-hidden">
            <SideNav />
            <div className="flex-1 md:overflow-hidden">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
