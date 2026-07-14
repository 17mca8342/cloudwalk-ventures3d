"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Mountain,
  Users,
  Building2,
  MapPin,
  Compass,
} from "lucide-react"

const CampfireIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  </svg>
)

const travelStyles = [
  {
    id: "himalayan-treks",
    Icon: Mountain,
    title: "Himalayan Treks",
    description: "Uttarakhand & Himachal group treks — high-altitude lakes, valley walks, and summit pushes",
    highlights: ["High Altitude", "Group Treks", "Expert Guides"],
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "adventure-addons",
    Icon: Compass,
    title: "Adventure Add-ons",
    description: "Camping under stars, river crossings, summit attempts — curated extras for thrill seekers",
    highlights: ["Camping", "River Crossings", "Summit Pushes"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "community-vibes",
    Icon: CampfireIcon,
    title: "Community Vibes",
    description: "Bonfires, shared meals, trek-family energy — solo travelers leave as friends for life",
    highlights: ["Solo Friendly", "Group Bonding", "Local Culture"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "corporate-offsites",
    Icon: Building2,
    title: "Corporate Offsites",
    description: "Team treks and outdoor offsites designed for leadership, bonding, and breaking comfort zones",
    highlights: ["Team Building", "Leadership", "Custom Programs"],
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "custom-itineraries",
    Icon: MapPin,
    title: "Custom Itineraries",
    description: "Private groups, custom dates, tailored routes — your Himalaya, your way, your pace",
    highlights: ["Private Groups", "Flexible Dates", "Tailored Routes"],
    gradient: "from-green-500 to-teal-600",
  },
]

export function TravelStyleGrid() {
  return (
    <section id="travel-styles" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4 inline-block">
            Discover Your Travel Style
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How Do You Want to Experience the Himalayas?
          </h2>
          <p className="text-muted-foreground text-lg">
            Every trekker is different. Pick the style that matches your vibe — we handle the rest.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travelStyles.map((style) => (
            <Card
              key={style.id}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-xl",
                "border-border/50 hover:border-primary/30"
              )}
            >
              <div className={cn("absolute inset-0 opacity-5", style.gradient)}>
                <style.Icon className="absolute top-6 right-6 h-16 w-16" />
              </div>

              <CardContent className="relative p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("p-3 rounded-xl", style.gradient)}>
                    <style.Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{style.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4 flex-1">{style.description}</p>

                <div className="flex flex-wrap gap-2">
                  {style.highlights.map((highlight) => (
                    <Badge key={highlight} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}