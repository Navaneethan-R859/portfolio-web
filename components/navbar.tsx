'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle('dark', storedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Navaneethan <span className="text-red-500">.</span> R
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/about">About me</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">My Work</Link>
          <Link href="/contact">Contact me</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About me</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/work" onClick={() => setIsMenuOpen(false)}>My Work</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact me</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
