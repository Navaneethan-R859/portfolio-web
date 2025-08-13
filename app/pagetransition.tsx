'use client'

import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1] // Smooth ease
        }}
        className="rounded-2xl p-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
