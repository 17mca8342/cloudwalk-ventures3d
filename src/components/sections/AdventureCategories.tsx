"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Mountain, Sparkles, Compass, Tent, Sunrise } from "lucide-react"

const categories = [
  {
    id: "weekend-trips",
    title: "Weekend Trips",
    description: "Quick escapes for busy professionals. 1-2 night treks near major cities with maximum adventure per hour.",
    image: "/images/landing-1.jpg",
    icon: Sunrise,
    color: "from-amber-500 to-orange-500",
    treks: ["Triund", "Nag Tibba", "Tosh Valley", "Kareri Lake"],
    duration: "1-2 Nights",
    difficulty: "Easy",
    href: "/treks?category=weekend",
  },
  {
    id: "himalayan-treks",
    title: "Himalayan Treks",
    description: "Classic multi-day treks through pristine valleys, alpine meadows, and high mountain passes.",
    image: "/images/landing-3.jpg",
    icon: Mountain,
    color: "from-blue-500 to-cyan-500",
    treks: ["Kedarkantha", "Har Ki Dun", "Kuari Pass", "Brahmatal", "Dayara Bugyal"],
    duration: "4-7 Nights",
    difficulty: "Easy-Moderate",
    href: "/treks?category=himalayan",
  },
  {
    id: "expeditions",
    title: "Expeditions",
    description: "Technical high-altitude expeditions for experienced mountaineers seeking ultimate challenges.",
    image: "/images/landing-5.jpg",
    icon: Compass,
    color: "from-purple-500 to-pink-500",
    treks: ["Pin Parvati Pass", "Roopkund", "Stok Kangri", "Kang Yatse"],
    duration: "8-12 Nights",
    difficulty: "Challenging-Strenuous",
    href: "/treks?category=expeditions",
  },
  {
    id: "custom-trips",
    title: "Custom Trips",
    description: "Tailor-made adventures for groups, corporates, and families. Your dates, your pace, your dream trek.",
    image: "/images/landing-7.jpg",
    icon: Tent,
    color: "from-green-500 to-teal-500",
    treks: ["Private Groups", "Corporate Retreats", "Family Adventures", "Photography Tours"],
    duration: "Flexible",
    difficulty: "Any Level",
    href: "/custom-trips",
  },
]

export function AdventureCategories() {
  return (
    <section id="categories" className="relative section-padding overflow-hidden">
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
            Adventure Categories
          </Badge>
          <h2 className="heading-display mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Adventure Style</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            From weekend getaways to epic expeditions, find the perfect Himalayan experience tailored to your time, fitness, and dreams.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Color Accent Border */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500",
                    "bg-gradient-to-r",
                    category.color
                  )}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Icon & Badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div className={cn("p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10")}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.treks.length} Treks
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="heading-3 mb-3 text-white group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="body-sm text-white/60 mb-6 line-clamp-2 flex-1">
                  {category.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{category.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Mountain className="h-4 w-4 text-accent" />
                    <span>{category.difficulty}</span>
                  </div>
                </div>

                {/* Popular Treks */}
                <div className="mb-6">
                  <p className="caption text-white/50 mb-2">Popular treks:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.treks.slice(0, 3).map((trek) => (
                      <Badge key={trek} variant="secondary" className="text-xs px-2.5 py-1">
                        {trek}
                      </Badge>
                    ))}
                    {category.treks.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2.5 py-1">
                        +{category.treks.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300"
                  asChild
                >
                  <a href={category.href}>
                    Explore {category.title}
                    <Sparkles className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Hover State */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0"
                style={{ background: category.color }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}