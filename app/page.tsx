import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function Home() {
  const presetsDir = path.join(process.cwd(), 'public', 'presets');
  const presets = await fs.readdir(presetsDir);

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center items-center gap-8 w-full max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] mb-4">
          Lightroom Presets
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {presets.map((preset) => (
            <li key={preset}>
              <Link href={`/preset/${preset}`} className="block p-4 bg-gray-100 hover:bg-gray-200 transition duration-300">
                {preset}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
