import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { promises as fs } from "fs";
import path from "path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darkroom Presets",
  description: "Downloadable Lightroom presets",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const presetsDir = path.join(process.cwd(), "public", "presets");
  const presets = await fs.readdir(presetsDir);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased halftone-background`}
      >
        <Navbar presets={presets} />
        <main className="pt-4">{children}</main>
      </body>
    </html>
  );
}
