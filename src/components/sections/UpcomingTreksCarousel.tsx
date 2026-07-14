"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Mountain, Clock, Star, ArrowRight } from "lucide-react"
import { getUpcomingTreks } from "@/data/treks"
import { Carousel } from "@/components/ui/Carousel"

const upcomingTreks = getUpcomingTreks()

export function UpcomingTreksCarousel() {
  return (
    <section id="upcoming-treks" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Badge variant="secondary" className="mb-4 inline-block">
                <span className="relative flex h-1.5 w-1.5 mr-2">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                  <span className="relative rounded-full bg-accent" />
                </span>
                Upcoming Departures
              </Badge>
              <h2 className="heading-2 mb-3">Treks Departing Soon</h2>
              <p className="body-lg text-white/60 max-w-xl">
                Limited spots available. Book early to secure your place on these guaranteed departures.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-accent" />
                  <span>5000+ Trekkers</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <Carousel
          items={upcomingTreks}
          itemsPerView={3}
          showPagination={true}
          showNavigation={true}
          autoPlay={false}
          renderItem={(trek) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TrekCard trek={trek} />
            </motion.article>
          )}
        />
      </div>
    </section>
  )
}

function TrekCard({ trek }: { trek: typeof upcomingTreks[0] }) {
  return (
    <article className="card-premium card-premium-hover h-full flex flex-col group relative overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <Image
          src={trek.image}
          alt={trek.title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row gap-2 justify-between">
          <Badge
            variant={trek.featured ? "premium" : "default"}
            className="font-medium"
          >
            {trek.featured ? "Popular" : "Available"}
          </Badge>
          <Badge variant="outline" className="text-xs px-3 py-1">
            {trek.startDates[0]} · {trek.startDates.length > 1 ? `+${trek.startDates.length - 1} more` : "Departure"}
          </Badge>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge
            variant="default"
            className={cn(
              "px-3 py-1.5 text-xs font-medium",
              trek.difficultyColor,
              trek.difficultyBg
            )}
          >
            {trek.difficulty}
          </Badge>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full">
          <Clock className="h-3.5 w-3.5 text-accent" />
          <span className="text-sm font-medium text-white">{trek.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
            {trek.region}
          </span>
        </div>

        <h3 className="heading-4 mb-2 text-white group-hover:text-accent transition-colors line-clamp-1">
          {trek.title}
        </h3>

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
              <span>Max Altitude</span>
            </div>
            <p className="font-medium text-sm text-white">{trek.maxAltitude}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
              <Users className="h-3 w-3" />
              <span>Group Size</span>
            </div>
            <p className="font-medium text-sm text-white">{trek.groupSize}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
              <Calendar className="h-3 w-3" />
              <span>Best Season</span>
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
    </article>
  )
}