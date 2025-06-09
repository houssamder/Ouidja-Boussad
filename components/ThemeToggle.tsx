"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-neutral-200 dark:bg-neutral-700 rounded-full p-1">
        <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
      </div>
    )
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gradient-to-r from-secondary-200 to-primary-200 dark:from-neutral-700 dark:to-neutral-600 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 w-5 h-5 bg-white dark:bg-neutral-200 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isDark ? "translate-x-7" : "translate-x-0"
          }`}
      >
        {isDark ? <Moon size={12} className="text-neutral-700" /> : <Sun size={12} className="text-secondary-600" />}
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun
          size={12}
          className={`text-secondary-600 transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-70"}`}
        />
        <Moon
          size={12}
          className={`text-neutral-300 transition-opacity duration-300 ${isDark ? "opacity-70" : "opacity-30"}`}
        />
      </div>
    </button>
  )
}
