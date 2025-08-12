import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Navaneethan R Portfolio',
  description: 'Frontend developer portfolio with dark/light mode',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider
          attribute="class"       // Applies `dark` or `light` class to <html>
          defaultTheme="system"   // Follows system theme by default
          enableSystem={true}     // Enables system preference detection
        >
          <Navbar />
          <main className="max-w-6xl mx-auto px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
