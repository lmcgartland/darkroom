import { promises as fs } from "fs";
import path from "path";
import DraggableGallery from "@/components/DraggableGallery";
import ExifData from "@/components/ExifData";
import { getExifData } from "@/lib/exif";

export async function generateStaticParams() {
  const presetsDir = path.join(process.cwd(), "public", "presets");
  const presets = await fs.readdir(presetsDir);

  return presets.map((preset) => ({
    preset: preset,
  }));
}

export default async function GalleryPage({
  params,
}: {
  params: { preset: string };
}) {
  const { preset } = await params;
  const presetDir = path.join(process.cwd(), "public", "presets", preset);

  const originalImage = `/presets/${preset}/original.jpg`;
  const editedImage = `/presets/${preset}/edited.jpg`;

  const exifData = await getExifData(path.join(presetDir, "original.jpg"));

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col justify-center items-center gap-8 w-full max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-4">
          {preset}
        </h1>

        <div className="w-full max-w-2xl">
          <DraggableGallery
            beforeImage={originalImage}
            afterImage={editedImage}
            alt={`Before and after for ${preset}`}
          />
        </div>

        <ExifData data={exifData} />

        <a
          href={`/presets/${preset}/${preset}.xmp`}
          download={`${preset}.xmp`}
          className="font-[family-name:var(--font-geist-mono)] flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-2 px-5 rounded-full"
        >
          Download XMP
        </a>
      </main>
    </div>
  );
}
