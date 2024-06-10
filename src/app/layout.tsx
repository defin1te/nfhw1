

import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Header from '@/components/header';
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "n!2024",
  description: "On Next Js",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <head />
      <body>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
