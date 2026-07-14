"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel } from "@/components/ui/Carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Mountain, MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import { getTreksByRegion, Trek } from "@/data/treks"

interface RegionTrekRowsProps {
  region: "Uttarakhand" | "Himachal Pradesh" | "Kashmir" | "Spiti" | "Ladakh";
}

export function RegionTrekRows({ region }: RegionTrekRowsProps) {
  const treks = getTreksByRegion(region)

  const regionDescriptions: Record<string, string> = {
    "Uttarakhand": "From the Valley of Flowers to Kedarkantha — Uttarakhand's diverse trails offer something for every trekker.",
    "Himachal Pradesh": "From weekend getaways like Triund to epic crossovers like Pin Parvati — Himachal's trails span every difficulty.",
    "Kashmir": "The crown of India with pristine alpine lakes, meadows of wildflowers, and towering Himalayan peaks.",
    "Spiti": "Cold desert landscapes, ancient monasteries, and high-altitude villages frozen in time.",
    "Ladakh": "Moon-like landscapes, high mountain passes, and Buddhist culture at the roof of the world.",
  }

  return (
    <section id={`${region.toLowerCase().replace(" ", "-")}-treks`} className="relative section-padding overflow-hidden">
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
                {region} Treks
              </Badge>
              <h2 className="heading-2 mb-3">
                Explore {region}
              </h2>
              <p className="body-lg text-white/60 max-w-xl">
                {regionDescriptions[region]}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <Carousel
          items={treks}
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

function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Card className={cn("card-premium card-premium-hover h-full flex flex-col group relative overflow-hidden")}>
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
          <Calendar className="h-3.5 w-3.5 text-accent" />
          <span className="text-sm font-medium text-white">{trek.duration}</span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex-1 flex flex-col p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
            {trek.region}
          </span>
        </div>

        <CardTitle className="text-xl mb-2 text-white group-hover:text-accent transition-colors line-clamp-1">
          {trek.title}
        </CardTitle>

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
      </CardContent>
    </Card>
  )
}