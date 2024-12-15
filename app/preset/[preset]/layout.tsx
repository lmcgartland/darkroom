import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darkroom Presets",
  description: "Downloadable Lightroom presets",
};

export default async function PresetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow">
      {children}
    </div>
  );
}
