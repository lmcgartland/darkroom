import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { promises as fs } from "fs";
import path from "path";

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
    <div className="flex">
      <Sidebar presets={presets} />
      <div className="flex-grow ml-64">{children}</div>
    </div>
  );
}
