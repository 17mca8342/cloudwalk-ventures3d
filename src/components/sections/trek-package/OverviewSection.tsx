"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Sparkles, MapPin, Mountain, Sun, Users, Calendar, Star, Shield, Leaf, Heart } from "lucide-react"

interface OverviewSectionProps {
  trek: {
    title: string
    subtitle: string
    description: string
    longDescription?: string
    highlights: string[]
    image: string
    duration: string
    maxAltitude: string
    difficulty: string
    region: string
    bestSeason: string[]
    groupSize: string
    price: number
    startLocation?: string
    endLocation?: string
    distance?: string
    temperature?: string
  }
}

const quickInfo = (trek: OverviewSectionProps["trek"]) => [
  { label: "Duration", value: trek.duration, icon: Calendar },
  { label: "Max Altitude", value: trek.maxAltitude, icon: Mountain },
  { label: "Difficulty", value: trek.difficulty, icon: Sparkles },
  { label: "Region", value: trek.region, icon: MapPin },
  { label: "Best Season", value: trek.bestSeason.join(" - "), icon: Sun },
  { label: "Group Size", value: trek.groupSize, icon: Users },
  { label: "Distance", value: trek.distance || "25 km", icon: Sparkles },
  { label: "Temperature", value: trek.temperature || "-5°C to 15°C", icon: Sparkles },
]

export function OverviewSection({ trek }: OverviewSectionProps) {
  const features = [
    { icon: Star, title: "Summit Sunrise", desc: "Witness the first light of day paint the Himalayan peaks in gold from Kedarkantha summit." },
    { icon: Shield, title: "Expert Guides", desc: "NIM & HMI certified trek leaders with 10+ years experience and Wilderness First Responder training." },
    { icon: Leaf, title: "Eco-Conscious", desc: "Leave No Trace principles, waste segregation, solar-powered camps, and local community employment." },
    { icon: Heart, title: "Small Groups", desc: "Maximum 15 trekkers per batch for personalized attention, better acclimatization, and safety." },
    { icon: Mountain, title: "360° Views", desc: "Panoramic vistas of Swargarohini, Bandarpoonch, Black Peak, and the Gangotri range." },
    { icon: Sparkles, title: "Snow Camping", desc: "Experience magical nights in 4-season tents under star-filled skies with hot water bottles." },
  ]

  return (
    <section id="overview" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" aria-hidden="true" />
      <div className="noise-overlay opacity-30" aria-hidden="true" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            Trek Overview
          </span>
          <h2 className="heading-display mb-6">Discover the {trek.title} Experience</h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            {trek.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={trek.image}
                alt={trek.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {trek.highlights.slice(0, 3).map((highlight) => (
                  <span key={highlight} className="px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm text-white/90">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {quickInfo(trek).map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="glass-card p-5 rounded-2xl text-center group"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <item.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">{item.label}</p>
                  <p className="font-semibold text-white text-sm sm:text-base">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="body-lg text-white/70 leading-relaxed">
                {trek.longDescription}
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 group-hover:text-accent transition-colors">{feature.title}</h3>
                        <p className="text-white/60 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 glass-card rounded-2xl bg-gradient-to-r from-primary/20 to-accent/10 border-primary/30">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Why This Trek Stands Out
                </h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-center gap-2">✓ Gentle gradient perfect for first-time Himalayan trekkers</li>
                  <li className="flex items-center gap-2">✓ Summit climb on Day 3 with 360° panoramic views</li>
                  <li className="flex items-center gap-2">✓ Juda ka Talab frozen lake camping experience</li>
                  <li className="flex items-center gap-2">✓ Rich pine and oak forests with diverse birdlife</li>
                  <li className="flex items-center gap-2">✓ Cultural interaction with local shepherd communities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}