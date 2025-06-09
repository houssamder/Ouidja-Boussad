"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "poetry-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  // Only run this on the client after mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    const initial = stored || defaultTheme
    setThemeState(initial)
    setMounted(true)
  }, [defaultTheme, storageKey])

  // Apply theme to the <html> tag
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    const applied = theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme

    root.classList.add(applied)
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme)
    setThemeState(newTheme)
  }

  const value = { theme, setTheme }

  if (!mounted) return null // Avoid SSR mismatch

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
