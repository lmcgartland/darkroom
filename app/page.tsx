import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

export default async function Home() {
  const presetsDir = path.join(process.cwd(), "public", "presets");
  const presets = await fs.readdir(presetsDir);

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col justify-left items-left gap-8 w-full max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-4">
          Darkroom
        </h1>
        <p>
          A small personal website for the exploration of photography and web
          tooling.
        </p>
        <hr></hr>
        <h2 className="text-2xl sm:text-2xl md:text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-4">
          Lightroom Presets
        </h2>
        <p className="text-xs text-slate-600">Set of presets for Lightroom.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {presets.map((preset) => (
            <li key={preset}>
              <Link
                href={`/preset/${preset}`}
                className="block p-4 bg-gray-100 hover:bg-gray-200 transition duration-300"
              >
                {preset}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-8"></hr>
        <h2 className="text-2xl sm:text-2xl md:text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-4">
          Polaroid Resources
        </h2>
        <p className="text-xs text-slate-600">
          A curated guide for instant photography enthusiasts.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li>
            <Link
              href="https://instantphotoguide.notion.site/Instant-Photo-Guide-9d4d8f6a984b478e84b1488511a54894"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              Instant Photo Guide
            </Link>
          </li>
          <li>
            <Link
              href="https://polaroid-digital-processor.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              Polaroid Scan Extractor
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
