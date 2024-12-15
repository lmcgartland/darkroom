'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  presets: string[];
}

const Navbar: React.FC<NavbarProps> = ({ presets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100  font-[family-name:var(--font-geist-mono)] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-2 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold">Darkroom</span>
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className={`py-2 px-3 text-gray-700 hover:text-gray-900 ${pathname === '/' ? 'border-b-2 border-black' : ''}`}>
                Home
              </Link>
              <div className="relative group">
                <button className="py-2 px-3 text-gray-700 hover:text-gray-900">
                  Presets
                </button>
                <div className="absolute hidden group-hover:block bg-white border mt-1 py-2 w-48">
                  {presets.map((preset) => (
                    <Link
                      key={preset}
                      href={`/preset/${preset}`}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname === `/preset/${preset}` ? 'bg-gray-100' : ''}`}
                    >
                      {preset}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className={`block py-2 px-4 text-sm hover:bg-gray-200 ${pathname === '/' ? 'bg-gray-200' : ''}`}>
          Home
        </Link>
        <div className="py-2 px-4 text-sm font-semibold">Presets</div>
        {presets.map((preset) => (
          <Link
            key={preset}
            href={`/preset/${preset}`}
            className={`block py-2 px-8 text-sm hover:bg-gray-200 ${pathname === `/preset/${preset}` ? 'bg-gray-200' : ''}`}
          >
            {preset}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;