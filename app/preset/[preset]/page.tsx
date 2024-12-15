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

export default async function GalleryPage(props: {
  params: Promise<{ preset: string }>;
}) {
  const params = await props.params;
  const { preset } = params;
  const presetDir = path.join(process.cwd(), "public", "presets", preset);

  const originalImage = `/presets/${preset}/original.jpg`;
  const editedImage = `/presets/${preset}/edited.jpg`;

  const exifData = await getExifData(path.join(presetDir, "original.jpg"));

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-6xl mx-auto align-center">
        <div className="w-full lg:w-1/3">
          <DraggableGallery
            beforeImage={originalImage}
            afterImage={editedImage}
            alt={`Before and after for ${preset}`}
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <h1 className="text-xl sm:text-3xl md:text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-1">
            {preset}
          </h1>
          <ExifData data={exifData} />
          <a
            href={`/presets/${preset}/${preset}.xmp`}
            download={`${preset}.xmp`}
            className="font-[family-name:var(--font-geist-mono)] flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-2 px-5 rounded-full self-start"
          >
            Download XMP
          </a>
        </div>
      </main>
    </div>
  );
}
