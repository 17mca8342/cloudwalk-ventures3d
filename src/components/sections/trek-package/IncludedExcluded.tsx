"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, X, Shield, Home, Utensils, Truck, UserCheck, MapPin, Tent, Coffee, Camera, Wifi, Battery, Heart, Star, Leaf, Map, Calendar } from "lucide-react"

const includedItems = [
  { category: "Accommodation", items: [
    { label: "4 nights premium camping (twin-sharing 4-season tents)", icon: Tent },
    { label: "1 night guest house/homestay at Sankri", icon: Home },
    { label: "Insulated sleeping mats & -10°C rated sleeping bags", icon: Shield },
    { label: "Hot water bottles for night comfort", icon: Coffee },
  ]},
  { category: "Meals", items: [
    { label: "All vegetarian meals (Day 1 dinner to Day 5 lunch)", icon: Utensils },
    { label: "Hot breakfast: porridge, eggs, parathas, tea/coffee", icon: Coffee },
    { label: "Packed lunch for trekking days", icon: Utensils },
    { label: "Evening soup, snacks & hot beverages", icon: Coffee },
    { label: "Dinner: soup, rice, dal, sabzi, roti, dessert", icon: Utensils },
    { label: "Dietary requirements catered (vegan, gluten-free, Jain)", icon: Leaf },
  ]},
  { category: "Transport", items: [
    { label: "Dehradun to Sankri return (AC Tempo Traveller)", icon: Truck },
    { label: "Experienced mountain drivers with GPS tracking", icon: Shield },
    { label: "Airport/railway station pickup & drop", icon: MapPin },
  ]},
  { category: "Expert Leadership", items: [
    { label: "NIM/HMI certified Trek Leader (1:8 ratio)", icon: UserCheck },
    { label: "Local guide with 15+ years regional experience", icon: Map },
    { label: "Wilderness First Responder certified", icon: Shield },
    { label: "Daily medical monitoring (SpO2, pulse, BP)", icon: Heart },
  ]},
  { category: "Permits & Safety", items: [
    { label: "Forest permits & entry fees", icon: Shield },
    { label: "Oxygen cylinder & comprehensive medical kit", icon: Heart },
    { label: "Emergency evacuation coordination", icon: Shield },
    { label: "Satellite phone for emergency communication", icon: Wifi },
  ]},
  { category: "Equipment", items: [
    { label: "Kitchen & dining tents with tables/chairs", icon: Tent },
    { label: "Toilet tents with eco-friendly waste management", icon: Leaf },
    { label: "Trekking poles & gaiters (on request)", icon: Map },
  ]},
]

const excludedItems = [
  { category: "Personal Expenses", items: [
    { label: "Travel insurance (mandatory)", icon: Shield },
    { label: "Personal snacks, chocolates, energy bars", icon: Coffee },
    { label: "Beverages (alcohol, soft drinks, packaged juice)", icon: Coffee },
    { label: "Laundry & phone calls", icon: Wifi },
  ]},
  { category: "Additional Services", items: [
    { label: "Personal porter (₹350/day + meals)", icon: UserCheck },
    { label: "Offloading backpack (₹300/day)", icon: UserCheck },
    { label: "Single tent supplement (₹1,500/night)", icon: Tent },
    { label: "Extra nights at Sankri/Dehradun", icon: Home },
  ]},
  { category: "Transport Extras", items: [
    { label: "Flights/trains to Dehradun", icon: MapPin },
    { label: "Airport transfer outside scheduled times", icon: Truck },
    { label: "Personal vehicle parking at Dehradun", icon: MapPin },
  ]},
  { category: "Emergency & Contingency", items: [
    { label: "Helicopter evacuation (if required)", icon: Shield },
    { label: "Medical treatment beyond first aid", icon: Heart },
    { label: "Extended stay due to weather/health", icon: Calendar },
    { label: "Route change/early return costs", icon: Map },
  ]},
]

export function IncludedExcluded() {
  return (
    <section id="inclusions" className="relative section-padding overflow-hidden">
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
            Package Details
          </span>
          <h2 className="heading-display mb-6">
            What's <span className="gradient-text">Included</span> & Excluded
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Transparent pricing with no hidden costs. Know exactly what you're paying for.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3 p-4 glass-card rounded-2xl bg-green-500/10 border-green-500/20">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Check className="h-7 w-7 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Included</h3>
                <p className="text-white/60 text-sm">All essentials covered for a worry-free trek</p>
              </div>
            </div>

            <div className="space-y-6">
              {includedItems.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-3 p-3 glass-card rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-400" />
                        </div>
                        <span className="text-white/80">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3 p-4 glass-card rounded-2xl bg-red-500/10 border-red-500/20">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <X className="h-7 w-7 text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Excluded</h3>
                <p className="text-white/60 text-sm">Additional costs you may need to budget for</p>
              </div>
            </div>

            <div className="space-y-6">
              {excludedItems.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-3 p-3 glass-card rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                          <X className="h-4 w-4 text-red-400" />
                        </div>
                        <span className="text-white/70">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 glass-card rounded-3xl bg-gradient-to-r from-primary/20 to-accent/10 border-primary/30"
        >
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            Important Notes
          </h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">✓ Package cost is per person on twin-sharing basis</li>
            <li className="flex items-center gap-2">✓ GST (5%) included in the price</li>
            <li className="flex items-center gap-2">✓ Single supplement: ₹1,500 per night (subject to availability)</li>
            <li className="flex items-center gap-2">✓ Group discounts: 5% off for 4+, 8% off for 8+</li>
            <li className="flex items-center gap-2">✓ Early bird: 5% off for bookings 60+ days prior</li>
            <li className="flex items-center gap-2">✓ Repeat trekker: 5% loyalty discount</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}