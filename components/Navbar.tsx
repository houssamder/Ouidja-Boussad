"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import Image from "next/image"
import type { Metadata } from "next"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/about" },
    { name: "Poèmes", path: "/poems" },
    { name: "Livres", path: "/books" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg border-b border-primary-100 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          
<Link href="/" className="flex items-center space-x-1"> 
 
  <Image
    src="/amazigh1-removebg-preview.png" // Replace with your actual logo path
    alt="Logo Belkacem"
    width={32}
    height={32}
    priority
    className="h-8 w-8 object-contain"
  />
<span className="text-2xl font-playfair font-bold tracking-tight gradient-text">
    BELKACEM poésie
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 relative ${
                  pathname === link.path
                    ? "font-medium text-primary-700 dark:text-primary-400"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 focus:outline-none text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-xl border-b border-primary-100 dark:border-neutral-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-2 transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                  pathname === link.path
                    ? "font-medium text-primary-700 dark:text-primary-400"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
