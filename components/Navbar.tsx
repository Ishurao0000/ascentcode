'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    // { href: "/reviews", label: "Clients" },
    // { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9 // same as hero section height
      setScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <h1
            className={`font-semibold text-2xl transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
                 >
            Ascent Standard
                 </h1>


        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-500 ${
                pathname === link.href
                  ? "text-red-600 font-semibold"
                  : scrolled
                  ? "text-black hover:text-red-600"
                  : "text-white hover:text-red-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-4 space-y-2 transition-colors duration-500 ${
            scrolled ? "bg-white" : "bg-transparent"
          }`}
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`block transition-colors duration-500 ${
                pathname === link.href
                  ? "text-red-600 font-semibold"
                  : scrolled
                  ? "text-black hover:text-red-600"
                  : "text-white hover:text-red-400"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
