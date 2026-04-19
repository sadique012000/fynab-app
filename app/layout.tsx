import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fynab — IT Consulting & Digital Transformation",
  description:
    "Fynab delivers cutting-edge IT consulting, cloud solutions, and digital transformation services to help businesses innovate and scale.",
  keywords: [
    "IT consulting",
    "digital transformation",
    "cloud solutions",
    "software development",
    "technology consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#020205] text-slate-300">
        {children}
      </body>
    </html>
  );
}
