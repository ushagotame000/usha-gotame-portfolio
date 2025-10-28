'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Sun, Moon, Palette } from 'lucide-react'
import { Button } from './ui/Button'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
        <Palette className="w-5 h-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="relative w-12 h-12 p-0 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 hover:from-orange-300 hover:via-pink-400 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
        aria-label="Toggle theme"
      >
        {/* Background overlay */}
        <div className="absolute inset-0.5 bg-background rounded-full" />

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{
              scale: theme === 'dark' ? 0 : 1,
              opacity: theme === 'dark' ? 0 : 1,
              rotate: theme === 'dark' ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Sun className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors" />
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              scale: theme === 'dark' ? 1 : 0,
              opacity: theme === 'dark' ? 1 : 0,
              rotate: theme === 'dark' ? 0 : -180,
            }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Moon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </motion.div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
          }}
        />
      </Button>
    </motion.div>
  )
}
