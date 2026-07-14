"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, CheckCircle, AlertCircle, Clock, MapPin, ArrowRight, Shield, Star } from "lucide-react"

const departures = [
  { batch: "Batch 1", start: "Dec 15, 2024", end: "Dec 19, 2024", seats: 8, status: "filling", price: 9999, originalPrice: 11999 },
  { batch: "Batch 2", start: "Dec 28, 2024", end: "Jan 1, 2025", seats: 12, status: "available", price: 9999, originalPrice: 11999 },
  { batch: "Batch 3", start: "Jan 11, 2025", end: "Jan 15, 2025", seats: 15, status: "available", price: 9999, originalPrice: 11999 },
  { batch: "Batch 4", start: "Jan 25, 2025", end: "Jan 29, 2025", seats: 10, status: "available", price: 9999, originalPrice: 11999 },
  { batch: "Batch 5", start: "Feb 8, 2025", end: "Feb 12, 2025", seats: 14, status: "available", price: 9999, originalPrice: 11999 },
  { batch: "Batch 6", start: "Mar 1, 2025", end: "Mar 5, 2025", seats: 6, status: "limited", price: 9999, originalPrice: 11999 },
  { batch: "Batch 7", start: "Mar 15, 2025", end: "Mar 19, 2025", seats: 15, status: "available", price: 9999, originalPrice: 11999 },
  { batch: "Batch 8", start: "Apr 5, 2025", end: "Apr 9, 2025", seats: 12, status: "available", price: 9999, originalPrice: 11999 },
]

const statusConfig = {
  available: { label: "Available", color: "bg-green-500/20 text-green-400 border-green-500/30", icon: CheckCircle },
  filling: { label: "Filling Fast", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: AlertCircle },
  limited: { label: "Limited Seats", color: "bg-orange-500/20 text-orange-400 border-orange-500/30", icon: AlertCircle },
  full: { label: "Sold Out", color: "bg-red-500/20 text-red-400 border-red-500/30", icon: AlertCircle },
} as const

type DepartureStatus = keyof typeof statusConfig

export function DepartureTable() {
  return (
    <section id="departures" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden="true" />
      <div className="noise-overlay opacity-30" aria-hidden="true" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
            Upcoming Departures
          </span>
          <h2 className="heading-display mb-6">
            Choose Your <span className="gradient-text">Dates</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Fixed departure batches with guaranteed small groups. Book early to secure your preferred dates.
          </p>
        </motion.div>

        <div className="space-y-6">
          {departures.map((departure, index) => {
            const status = departure.status as DepartureStatus
            const config = statusConfig[status]
            const Icon = config.icon
            return (
              <motion.article
                key={departure.batch}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={cn(
                  "relative glass-card rounded-2xl overflow-hidden group",
                  "border border-white/10 hover:border-primary/30",
                  "transition-all duration-300"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />

                <div className="relative p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xl font-bold text-white">{departure.batch.replace("Batch ", "")}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{departure.batch}</h3>
                      <p className="text-white/50 text-sm">4 Nights / 5 Days</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{departure.start} – {departure.end}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-accent" />
                        <span>{departure.seats} seats left</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "gap-1.5",
                          config.color,
                          "border"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {config.label}
                      </Badge>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <div className="text-right">
                          {departure.originalPrice && (
                            <p className="text-sm line-through text-white/30">₹{departure.originalPrice.toLocaleString()}</p>
                          )}
                          <p className="font-display text-2xl font-bold text-accent">₹{departure.price.toLocaleString()}</p>
                          <p className="text-xs text-white/50">per person</p>
                        </div>
                        <Button
                          variant={departure.status === "full" ? "outline" : "primary"}
                          size="lg"
                          className="gap-2"
                          disabled={departure.status === "full"}
                        >
                          {departure.status === "full" ? "Sold Out" : "Book Now"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden border-t border-white/10 pt-6 mt-6"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FeatureItem icon={Shield} label="Safety First" value="1:5 guide ratio" />
                    <FeatureItem icon={Star} label="4.9/5 Rating" value="5000+ reviews" />
                    <FeatureItem icon={MapPin} label="Pickup Points" value="Dehradun / Delhi" />
                    <FeatureItem icon={Clock} label="Departure Time" value="6:00 AM from Dehradun" />
                  </div>
                </motion.div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card p-8 rounded-3xl text-center">
            <h3 className="heading-3 mb-3">Need Custom Dates?</h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Private group? Corporate team? Family trip? We customize dates, itinerary, and pace for groups of 4+.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="xl" className="gap-2" asChild>
                <a href="/custom-trips">
                  Design Your Trip
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="gap-2 border-2 border-white/30 hover:border-white/50" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  )
}