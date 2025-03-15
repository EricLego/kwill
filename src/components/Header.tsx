'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-sand-50 dark:bg-night-900 shadow-medium sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-3xl font-bold transition-all duration-300"
          style={{
            color: `rgb(var(--accent-color))`,
          }}
        >
          kwill
        </Link>
        
        <nav className="flex items-center">
          <ul className="flex space-x-10 mr-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 dark:text-sand-100 text-lg font-medium transition-all duration-300 relative
                           after:content-[''] after:absolute after:bottom-[-6px] after:left-0 
                           after:h-[3px] after:w-0 after:rounded-full after:transition-all after:duration-300
                           hover:after:w-full hover:text-jade-600 dark:hover:text-teal-400 after:bg-jade-500 dark:after:bg-teal-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/journal" 
                className="text-gray-700 dark:text-sand-100 text-lg font-medium transition-all duration-300 relative
                           after:content-[''] after:absolute after:bottom-[-6px] after:left-0 
                           after:h-[3px] after:w-0 after:rounded-full after:transition-all after:duration-300
                           hover:after:w-full hover:text-jade-600 dark:hover:text-teal-400 after:bg-jade-500 dark:after:bg-teal-500"
              >
                New Entry
              </Link>
            </li>
            <li>
              <Link 
                href="/profile" 
                className="text-gray-700 dark:text-sand-100 text-lg font-medium transition-all duration-300 relative
                           after:content-[''] after:absolute after:bottom-[-6px] after:left-0 
                           after:h-[3px] after:w-0 after:rounded-full after:transition-all after:duration-300
                           hover:after:w-full hover:text-jade-600 dark:hover:text-teal-400 after:bg-jade-500 dark:after:bg-teal-500"
              >
                Profile
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}