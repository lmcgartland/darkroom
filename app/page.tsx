import DraggableGallery from "@/components/DraggableGallery";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow flex flex-col justify-center items-center gap-8 w-full max-w-6xl mx-auto">
        <h1 className="text-lg sm:text-xl md:text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-4">
          New Hampshire 1
        </h1>

        <div className="w-full max-w-sm">
          <DraggableGallery
            beforeImage="/presets/new_hampshire/original.jpg"
            afterImage="/presets/new_hampshire/edited.jpg"
            alt="Example before/after"
          />
        </div>

        <a
          href="/presets/new_hampshire/New Hampshire.xmp"
          download="new_hampshire.xmp"
          className="font-[family-name:var(--font-geist-mono)] flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-2 px-5 rounded-full"
        >
          {/* <Download size={20} /> */}
          Download XMP
        </a>
      </main>
    </div>
  );
}
