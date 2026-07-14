"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Mountain, Users, Calendar, MapPin, ArrowRight } from "lucide-react"

interface TrekCardProps {
  trek: {
    id: string
    slug: string
    title: string
    description: string
    region: string
    state: string
    duration: string
    difficulty: string
    maxAltitude: string
    price: number
    originalPrice?: number
    image: string
    emoji: string
    highlights: string[]
    featured: boolean
    upcoming: boolean
    startDates: string[]
    groupSize: string
    bestSeason: string[]
    gallery: string[]
    latitude: number
    longitude: number
    difficultyColor: string
    difficultyBg: string
    category: string
  }
  variant?: "default" | "compact"
  priority?: boolean
}

export function TrekCard({ trek, variant = "default", priority = false }: TrekCardProps) {
  const difficultyStyles: Record<string, { color: string; bg: string }> = {
    Easy: { color: "text-green-400", bg: "bg-green-500/10" },
    "Easy-Moderate": { color: "text-lime-400", bg: "bg-lime-500/10" },
    Moderate: { color: "text-yellow-400", bg: "bg-yellow-500/10" },
    "Moderate-Difficult": { color: "text-orange-400", bg: "bg-orange-500/10" },
    Difficult: { color: "text-orange-400", bg: "bg-orange-500/10" },
    Challenging: { color: "text-red-400", bg: "bg-red-500/10" },
    Strenuous: { color: "text-red-400", bg: "bg-red-500/10" },
  }

  const diffStyle = difficultyStyles[trek.difficulty] || { color: "text-white/70", bg: "bg-white/10" }

  if (variant === "compact") {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(92,184,255,0.3)] hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={trek.image}
            alt={trek.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <Badge variant={trek.featured ? "success" : "secondary"} className="text-xs">
              {trek.featured ? "Popular" : "Available"}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {trek.duration}
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            <Badge variant="premium" className={cn("text-xs", diffStyle.color, diffStyle.bg)}>
              {trek.difficulty}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white mb-1 line-clamp-1 group-hover:text-accent transition-colors">
            {trek.title}
          </h3>
          <p className="text-white/50 text-sm mb-3 line-clamp-2">{trek.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {trek.highlights.slice(0, 2).map((h) => (
              <Badge key={h} variant="secondary" className="text-[0.6rem] px-1.5 py-0.5">
                {h}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div>
              {trek.originalPrice && (
                <p className="text-xs line-through text-white/30">₹{trek.originalPrice.toLocaleString()}</p>
              )}
              <p className="text-lg font-bold text-accent">₹{trek.price.toLocaleString()}</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href={`/treks/${trek.slug}`}>View Details</a>
            </Button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(92,184,255,0.3)] hover:-translate-y-1 hover:scale-[1.01]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant={trek.featured ? "success" : "secondary"} className="text-xs">
              {trek.featured ? "Popular" : "Available"}
            </Badge>
            {trek.upcoming && (
              <Badge variant="accent" className="text-xs">
                Upcoming
              </Badge>
            )}
          </div>
          <Badge variant="outline" className="text-xs">
            {trek.duration}
          </Badge>
        </div>

        {/* Bottom Left - Difficulty */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <Badge variant="premium" className={cn("text-xs", diffStyle.color, diffStyle.bg)}>
            {trek.difficulty}
          </Badge>
        </div>

        {/* Bottom Right - Duration */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full">
          <Clock className="h-3.5 w-3.5 text-accent" />
          <span className="text-sm font-medium text-white">{trek.duration}</span>
        </div>

        {/* Category */}
        <div className="absolute top-4 left-4">
          <Badge variant="primary" className="text-xs">
            {trek.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Region Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
            {trek.region}
          </span>
        </div>

        {/* Title */}
        <h3 className="heading-4 mb-2 text-white group-hover:text-accent transition-colors line-clamp-1">
          {trek.title}
        </h3>

        {/* Description */}
        <p className="body-sm text-white/50 mb-4 line-clamp-2 flex-1">
          {trek.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {trek.highlights.slice(0, 3).map((highlight) => (
            <Badge key={highlight} variant="secondary" className="text-[0.65rem] px-2 py-0.5">
              {highlight}
            </Badge>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-white/10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
              <Mountain className="h-3 w-3" />
              <span>Altitude</span>
            </div>
            <p className="font-medium text-sm text-white">{trek.maxAltitude}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
              <Users className="h-3 w-3" />
              <span>Group</span>
            </div>
            <p className="font-medium text-sm text-white">{trek.groupSize}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
              <Calendar className="h-3 w-3" />
              <span>Season</span>
            </div>
            <p className="font-medium text-sm text-white text-[0.7rem]">
              {trek.bestSeason[0]}–{trek.bestSeason[trek.bestSeason.length - 1]}
            </p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
          <div>
            {trek.originalPrice && (
              <p className="text-sm line-through text-white/30">₹{trek.originalPrice.toLocaleString()}</p>
            )}
            <p className="text-2xl font-bold text-accent">₹{trek.price.toLocaleString()}</p>
            <p className="text-xs text-white/40">per person</p>
          </div>
          <Button
            variant="primary"
            className="w-auto px-6 py-3"
            asChild
          >
            <a href={`/treks/${trek.slug}`}>
              View Trek
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}