"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mountain, MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react"

const navItems = [
  { label: "Treks", href: "#treks", hasDropdown: true },
  { label: "Destinations", href: "#destinations", hasDropdown: false },
  { label: "Weekend Trips", href: "#weekend-trips", hasDropdown: false },
  { label: "Expeditions", href: "#expeditions", hasDropdown: false },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "About", href: "#about", hasDropdown: false },
]

const dropdownItems = {
  Treks: [
    { label: "All Treks", href: "/treks" },
    { label: "Uttarakhand", href: "/treks?region=uttarakhand" },
    { label: "Himachal Pradesh", href: "/treks?region=himachal" },
    { label: "Kashmir", href: "/treks?region=kashmir" },
    { label: "Spiti", href: "/treks?region=spiti" },
    { label: "Ladakh", href: "/treks?region=ladakh" },
  ],
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/30"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-18 items-center justify-between">
          {/* Left Menu */}
          <div className="flex-1 flex items-center justify-start">
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }
                    }}
                    className={cn(
                      "text-sm font-medium text-white/80 transition-all duration-300 hover:text-white",
                      "relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                    )}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className="ml-1.5 inline-block h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === item.label && dropdownItems[item.label as keyof typeof dropdownItems] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-background/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 py-3 overflow-hidden"
                        style={{ zIndex: 100 }}
                      >
                        {dropdownItems[item.label as keyof typeof dropdownItems].map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-5 py-3 text-sm text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white hover:pl-6"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex items-center justify-center">
            <Link href="/" className="flex items-center space-x-3" aria-label="CloudWalk Ventures Home">
              <div className="relative">
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5L25.5 9 16 13.5 6.5 9 16 4.5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13.5V22M10 18h12M16 13.5v8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-accent" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">CloudWalk</span>
            </Link>
          </div>

          {/* Right - Book Now Button */}
          <div className="flex-1 flex items-center justify-end">
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white px-4 py-2"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Us
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="px-8 py-3 text-base"
                onClick={() => scrollToSection("#treks")}
              >
                Book Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-white"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl"
            >
              <div className="py-6 space-y-4 px-2">
                {navItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }
                        setMobileMenuOpen(false)
                      }}
                      className="block px-4 py-3 text-base font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && dropdownItems[item.label as keyof typeof dropdownItems] && (
                      <div className="ml-4 mt-2 space-y-1 border-l border-white/10 pl-4">
                        {dropdownItems[item.label as keyof typeof dropdownItems].map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center"
                    onClick={() => { scrollToSection("#contact"); setMobileMenuOpen(false); }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full justify-center"
                    onClick={() => { scrollToSection("#treks"); setMobileMenuOpen(false); }}
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}