"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mountain, Calendar, Users, Sun, Sparkles, Download, ChevronDown } from "lucide-react"
import Link from "next/link"

interface PackageHeroProps {
  trek: {
    title: string
    subtitle: string
    image: string
    duration: string
    maxAltitude: string
    difficulty: string
    region: string
    bestSeason: string[]
    groupSize: string
    price: number
    originalPrice?: number
    slug: string
  }
}

export function PackageHero({ trek }: PackageHeroProps) {
  const quickInfo = [
    { icon: Calendar, label: "Duration", value: trek.duration },
    { icon: Mountain, label: "Max Altitude", value: trek.maxAltitude },
    { icon: Sparkles, label: "Difficulty", value: trek.difficulty },
    { icon: MapPin, label: "Region", value: trek.region },
    { icon: Sun, label: "Best Season", value: trek.bestSeason.join(" – ") },
    { icon: Users, label: "Group Size", value: trek.groupSize },
    { icon: Sparkles, label: "Price", value: `₹${trek.price.toLocaleString()}` },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={trek.image}
          alt={trek.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full py-16 lg:py-24">
        <div className="container-custom">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-3 text-white/70 text-sm"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronDown className="h-4 w-4" />
            <Link href="/treks" className="hover:text-white transition-colors">Treks</Link>
            <ChevronDown className="h-4 w-4" />
            <span className="text-white font-medium">{trek.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="premium" className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" />
                Winter Special Departure
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
                {trek.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                {trek.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-[480px]"
            >
              <div className="glass-card p-6 sm:p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {quickInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-xs text-white/60 uppercase tracking-wider">{item.label}</p>
                      <p className="font-semibold text-white text-sm sm:text-base">{item.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button
                    variant="primary"
                    size="xl"
                    className="w-full justify-center gap-3 py-4 text-lg"
                    asChild
                  >
                    <Link href={`/treks/${trek.slug}/booking`}>
                      Book Now
                      <Sparkles className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-center gap-3 py-3 border-white/30 hover:border-white/50 text-white hover:bg-white/5"
                    asChild
                  >
                    <Link href={`/treks/${trek.slug}/itinerary.pdf`} download>
                      <Download className="h-5 w-5" />
                      Download Itinerary
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
            <ChevronDown className="h-6 w-6 text-white/70" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}