import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import PageTransition from '@/app/pagetransition'
import ThemeProvider from '@/components/theme-provider'// For dark/light mode

export const metadata = {
  title: 'Navaneethan R Portfolio',
  description: 'Frontend developer portfolio with dark/light mode',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          {/* Navbar */}
          <Navbar />

          {/* Main Content - Responsive Padding & Width */}
          <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Footer - Static Across All Pages */}
          <footer className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-xs sm:text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Navaneethan R • My Portfolio
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
