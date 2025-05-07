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
      <body className={`${inter.className} antialiased`}>
        <main className="fixed top-0 left-0 z-[1000] bg-white w-screen h-screen">
          <Nav />
          <div className="flex">
            <SideNav />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
