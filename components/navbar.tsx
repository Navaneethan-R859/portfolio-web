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

  // Glow classes for hover
  const glowClass =
    "hover:text-indigo-400 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] transition duration-300 focus:outline-none focus:ring-0";

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-0"
          aria-label="Go to homepage"
        >
          Navaneethan R
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className={glowClass}>
            Home
          </Link>
          <Link href="/about" className={glowClass}>
            About
          </Link>
          <Link href="/work" className={glowClass}>
            Projects
          </Link>
          <Link href="/services" className={glowClass}>
            Services
          </Link>
          <Link href="/contact" className={glowClass}>
            Contact
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-sm transition-colors focus:outline-none focus:ring-0"
            aria-label="Toggle dark/light mode"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-0"
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
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={glowClass + " block px-2 py-1 rounded"}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className={glowClass + " block px-2 py-1 rounded"}>
            About
          </Link>
          <Link href="/work" onClick={() => setIsMenuOpen(false)} className={glowClass + " block px-2 py-1 rounded"}>
            My Works
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className={glowClass + " block px-2 py-1 rounded"}>
            Services
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={glowClass + " block px-2 py-1 rounded"}>
            Contact
          </Link>
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm transition-colors focus:outline-none focus:ring-0"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </div>
    </header>
  );
}
