"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Star, Users, Award, MapPin, ArrowDown, Mountain, Sparkles, ArrowRight } from "lucide-react"

const heroImages = [
  "/images/landing-1.jpg",
  "/images/landing-2.jpg",
  "/images/landing-3.jpg",
  "/images/landing-4.jpg",
  "/images/landing-5.jpg",
  "/images/landing-6.jpg",
  "/images/landing-7.jpg",
  "/images/landing-8.jpg",
  "/images/landing-9.jpg",
  "/images/landing-10.jpg",
  "/images/landing-11.jpg",
  "/images/landing-12.jpg",
  "/images/landing-13.jpg",
  "/images/landing-14.jpg",
]

const trustIndicators = [
  { icon: Star, value: "4.9", label: "Rating", suffix: "/5" },
  { icon: Users, value: "5000+", label: "Happy Trekkers" },
  { icon: Award, value: "100+", label: "Expeditions" },
  { icon: Mountain, value: "15+", label: "Signature Treks" },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePosition({ x, y })
    }

    heroRef.current?.addEventListener("mousemove", handleMouseMove)
    return () => heroRef.current?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = heroRef.current?.getBoundingClientRect()
        if (rect) {
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
          setMousePosition({ x, y })
        }
      }}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AnimatePresence mode="wait">
          {heroImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={index === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.05)`,
              }}
            >
              <Image
                src={src}
                alt={`Himalayan landscape ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark Overlay 70% */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 flex flex-col items-center gap-3"
          >
            <Badge variant="premium" className="px-4 py-2 text-sm gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                <span className="relative rounded-full bg-accent" />
              </span>
              Now accepting adventurers for 2025 season
              <Sparkles className="h-4 w-4" />
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight leading-[1.05]"
          >
            <div className="inline-block px-10 py-8 sm:px-16 sm:py-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50">
              <span className="block text-white">Walk the Clouds</span>
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent font-bold">
                Summit the Skies
              </span>
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-lg sm:text-xl text-white/70 leading-relaxed"
          >
            Explore breathtaking Himalayan adventures across Uttarakhand, Himachal Pradesh, Kashmir, Spiti and Ladakh with expert local guides.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              variant="primary"
              size="xl"
              className="w-full max-w-xs gap-3"
              onClick={() => scrollToSection("#treks")}
            >
              Explore Treks
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full max-w-xs border-2 border-white/30 hover:border-white/50 hover:bg-white/5"
              onClick={() => scrollToSection("#contact")}
            >
              Book Now
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm text-white/60"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-2 text-accent">
                  <item.icon className="h-5 w-5" />
                  <span className="font-display text-2xl font-bold text-white">{item.value}</span>
                  {item.suffix && <span className="font-normal text-lg text-white/50">{item.suffix}</span>}
                </div>
                <span className="hidden sm:block text-white/50">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            aria-hidden="true"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-14 w-14 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20"
              onClick={() => scrollToSection("#treks")}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all duration-500",
              index === currentIndex
                ? "bg-accent w-8 shadow-lg shadow-accent/50"
                : "bg-white/30 hover:bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  )
}