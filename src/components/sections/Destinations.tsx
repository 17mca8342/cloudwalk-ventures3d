"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Mountain, Calendar, MapPin, ArrowRight } from "lucide-react"

const destinations = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    slug: "uttarakhand",
    image: "/images/landing-1.jpg",
    altitude: "3,810m",
    bestTime: "Dec–Apr",
    trekCount: 8,
    description: "Land of Gods with diverse trails from easy weekend treks to challenging expeditions.",
    region: "Garhwal & Kumaon",
    coordinates: [30.0668, 79.0193] as [number, number],
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    image: "/images/landing-3.jpg",
    altitude: "5,319m",
    bestTime: "Jun–Sep",
    trekCount: 7,
    description: "From Dhauladhar range to Spiti valley - Himachal offers incredible variety for all levels.",
    region: "Kullu, Kangra, Lahaul, Spiti",
    coordinates: [31.1048, 77.1734] as [number, number],
  },
  {
    id: "kashmir",
    name: "Kashmir",
    slug: "kashmir",
    image: "/images/landing-5.jpg",
    altitude: "4,200m",
    bestTime: "Jul–Sep",
    trekCount: 5,
    description: "Paradise on Earth with alpine lakes, meadows of flowers, and towering peaks.",
    region: "Kashmir Valley",
    coordinates: [34.0837, 74.7973] as [number, number],
  },
  {
    id: "spiti",
    name: "Spiti Valley",
    slug: "spiti-valley",
    image: "/images/landing-7.jpg",
    altitude: "4,500m",
    bestTime: "Jun–Oct",
    trekCount: 4,
    description: "Cold desert landscapes, ancient monasteries, and high-altitude villages frozen in time.",
    region: "Lahaul & Spiti",
    coordinates: [32.2677, 78.0100] as [number, number],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    slug: "ladakh",
    image: "/images/landing-9.jpg",
    altitude: "5,602m",
    bestTime: "Jun–Sep",
    trekCount: 6,
    description: "Moon-like landscapes, high mountain passes, and rich Buddhist culture at the roof of the world.",
    region: "Leh, Nubra, Zanskar",
    coordinates: [34.1526, 77.5770] as [number, number],
  },
  {
    id: "garhwal",
    name: "Garhwal Himalaya",
    slug: "garhwal-himalaya",
    image: "/images/landing-11.jpg",
    altitude: "7,816m",
    bestTime: "May–Jun, Sep–Oct",
    trekCount: 4,
    description: "Home to Nanda Devi, Kamet, and Trishul - the crown jewels of Indian Himalaya.",
    region: "Chamoli, Uttarkashi",
    coordinates: [30.5500, 79.5500] as [number, number],
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="relative section-padding overflow-hidden">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 inline-block">
            <span className="relative flex h-1.5 w-1.5 mr-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative rounded-full bg-accent" />
            </span>
            Our Destinations
          </Badge>
          <h2 className="heading-display mb-6">
            Explore the
            <br />
            <span className="gradient-text">Himalayas</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Discover breathtaking regions across the Indian Himalaya. Each destination offers unique landscapes, cultures, and adventures.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Color Accent Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/50 to-accent/50" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Region Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                      {destination.region}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="heading-3 mb-3 text-white group-hover:text-accent transition-colors">
                    {destination.name}
                  </h3>

                  {/* Description */}
                  <p className="body-sm text-white/60 mb-6 line-clamp-2 flex-1">
                    {destination.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-white/70 text-sm">
                      <Mountain className="h-4 w-4 text-accent" />
                      <span>{destination.altitude} max</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-sm">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-sm">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{destination.trekCount} treks</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2 text-accent font-medium hover:text-white">
                    Explore {destination.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            View All Destinations
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}