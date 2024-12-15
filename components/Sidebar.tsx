'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  presets: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ presets }) => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-100 h-screen overflow-y-auto fixed left-0 top-0 p-4">
      <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-geist-mono)]">Presets</h2>
      <nav>
        <ul>
          {presets.map((preset) => (
            <li key={preset} className="mb-2">
              <Link
                href={`/preset/${preset}`}
                className={`block p-2 ${
                  pathname === `/preset/${preset}`
                    ? 'bg-gray-300 text-black'
                    : 'hover:bg-gray-200'
                }`}
              >
                {preset}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;