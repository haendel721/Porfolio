import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption"
})
export const metadata: Metadata = {
  title: "Haendel Abraham • Génie Logiciel",
  description: "Portfolio développé avec Next.js, Tailwind CSS et TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(GeistSans.variable, AnekTelugu.variable, GeistMono.variable, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
