"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-white"
          aria-label="Go to homepage"
        >
          Navaneethan R
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Home
          </Link>
          <Link href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            About
          </Link>
          <Link href="/work" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Contact
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-sm transition-colors"
            aria-label="Toggle dark/light mode"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-inner overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          >
            About
          </Link>
          <Link
            href="/work"
            onClick={() => setIsMenuOpen(false)}
            className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm transition-colors"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </div>
    </header>
  );
}
