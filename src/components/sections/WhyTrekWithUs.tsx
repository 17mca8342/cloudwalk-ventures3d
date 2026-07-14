"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Shield,
  UserCheck,
  Users,
  MapPin,
  Star,
  Heart,
  Award,
  Truck,
} from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Safety First, Always",
    description: "Wilderness First Responder certified leads, 1:5 lead-to-trekker ratio, satellite communicators on every trek, and comprehensive risk assessments.",
  },
  {
    icon: UserCheck,
    title: "Expert Trek Leads",
    description: "Our leads are mountaineers, not guides. 10+ years Himalayan experience, NIM/ABVIMAS certified, and passionate about teaching mountain skills.",
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description: "Max 15-18 trekkers per group. Intimate experience, less environmental impact, personalized attention, and genuine connections with fellow trekkers.",
  },
  {
    icon: MapPin,
    title: "Handcrafted Itineraries",
    description: "Every route personally scouted. Optimal acclimatization, hidden viewpoints, cultural immersion, and flexible pacing — no cookie-cutter packages.",
  },
  {
    icon: Star,
    title: "Transparent Pricing",
    description: "No hidden costs. Price includes transport from base city, all meals, quality camping gear, permits, insurance, and certified leads. What you see is what you pay.",
  },
  {
    icon: Heart,
    title: "Solo-Friendly Community",
    description: "60% of our trekkers join solo. Pre-trek WhatsApp groups, roommate matching, and a culture that turns strangers into trek family by day two.",
  },
  {
    icon: Award,
    title: "Leave No Trace Ethics",
    description: "Zero single-use plastic, waste segregation, eco-toilets on high-altitude treks, and community-based tourism supporting local homestays and porters.",
  },
  {
    icon: Truck,
    title: "Door-to-Door Logistics",
    description: "Pickup from nearest airport/railway, comfortable vehicles, quality gear provided (sleeping bags, mats, gaiters), and drop-off after trek — zero hassle.",
  },
]

export function WhyTrekWithUs() {
  return (
    <section id="why-trek-with-us" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4 inline-block">
            Why Trek With Cloudwalk?
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Not Just a Trek. An Experience Crafted with Care.
          </h2>
          <p className="text-muted-foreground text-lg">
            500+ trekkers, 4.9/5 rating, and countless summit stories. Here's what makes us different.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <Card
              key={point.title}
              className={cn(
                "border-border/50 hover:border-primary/30 transition-all duration-300",
                "h-full"
              )}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">
              🏔️
            </div>
          </div>
          <div>
            <Badge variant="secondary" className="mb-4 inline-block">
              Our Promise
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Every Trek, Every Trekker, Every Detail — We Sweat the Small Stuff.
            </h3>
            <p className="text-muted-foreground mb-6">
              From the moment you inquire to the post-trek photo share, we're obsessed with making your
              Himalayan experience seamless, safe, and unforgettable. That's why trekkers return season after season.
            </p>
            <ul className="space-y-3">
              {[
                "Pre-trek fitness & packing guidance",
                "24/7 support line during trek",
                "Professional trek photos included",
                "Alumni community & future trek discounts",
                "Flexible rescheduling policy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}