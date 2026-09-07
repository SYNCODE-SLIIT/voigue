import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingChatbot } from "@/components/ui/FloatingChatbot";
import { site } from "@/lib/content";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Voigue | Australian-Led Managed Staffing, BPO & Technology",
    template: "%s | Voigue"
  },
  description: site.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}
