"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Mountain, Compass, Tent, Sunrise, Heart, Truck, Users, Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Expert Trek Leaders",
    description: "Certified mountaineers with 10+ years of Himalayan experience and wilderness first responder training.",
    icon: Mountain,
    stat: "50+",
  },
  {
    title: "Certified Guides",
    description: "NIM & HMI certified local guides who know every trail, weather pattern, and hidden gem.",
    icon: Compass,
    stat: "100%",
  },
  {
    title: "Premium Camps",
    description: "Spacious 3-season tents, insulated sleeping mats, warm blankets, and heated dining tents at high altitude.",
    icon: Tent,
    stat: "4★",
  },
  {
    title: "Healthy Meals",
    description: "Nutritious vegetarian meals with local ingredients, hot soups, energy bars, and dietary accommodations.",
    icon: Sunrise,
    stat: "3+",
  },
  {
    title: "Medical Support",
    description: "Comprehensive first aid kits, oxygen cylinders, pulse oximeters, and emergency evacuation protocols.",
    icon: Heart,
    stat: "24/7",
  },
  {
    title: "Safe Transport",
    description: "Well-maintained vehicles with experienced mountain drivers, GPS tracking, and backup vehicles.",
    icon: Truck,
    stat: "100%",
  },
  {
    title: "Small Groups",
    description: "Maximum 12-15 trekkers per group for personalized attention, better acclimatization, and minimal impact.",
    icon: Users,
    stat: "12-15",
  },
  {
    title: "Eco Friendly",
    description: "Leave No Trace principles, waste segregation, solar lighting, and support for local conservation projects.",
    icon: Leaf,
    stat: "100%",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative section-padding overflow-hidden">
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
            Why CloudWalk Ventures
          </Badge>
          <h2 className="heading-display mb-6">
            Trek with
            <br />
            <span className="gradient-text">Confidence</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Every detail is crafted for your safety, comfort, and unforgettable memories. Here's why thousands choose us for their Himalayan adventures.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-premium card-premium-hover p-8 relative overflow-hidden"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
              </motion.div>

              {/* Stat */}
              <div className="mb-4">
                <p className="font-display text-2xl font-bold text-accent">{feature.stat}</p>
              </div>

              {/* Title */}
              <h3 className="heading-4 mb-3 text-white group-hover:text-accent transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="body-sm text-white/50">
                {feature.description}
              </p>

              {/* Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                className="mt-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
              />

              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.article>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={5000} suffix="+" label="Happy Trekkers" />
            <StatCounter value={100} suffix="+" label="Expeditions Completed" />
            <StatCounter value={15} suffix="+" label="Signature Treks" />
            <StatCounter value={4.9} suffix="/5" label="Average Rating" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animateCount = () => {
    const duration = 2000
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (value - startValue) * eased
      setCount(Number(current.toFixed(value % 1 === 0 ? 0 : 1)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    animate()
  }

  return (
    <div ref={ref} className="text-center p-4 relative">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl" />
        <div className="relative">
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            {count}{suffix}
          </p>
        </div>
      </div>
      <p className="mt-2 body-sm text-white/50">{label}</p>
    </div>
  )
}