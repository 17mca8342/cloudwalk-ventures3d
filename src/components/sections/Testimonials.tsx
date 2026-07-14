"use client"

import { motion } from "framer-motion"
import { Carousel } from "@/components/ui/Carousel"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin, Calendar, Mountain, Heart, Shield, Award, ExternalLink } from "lucide-react"

const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "/images/avatar-sarah.jpg",
    rating: 5,
    trek: "Kedarkantha Trek",
    date: "January 2025",
    content: "Absolutely life-changing experience! The Kedarkantha summit sunrise over the Himalayas took my breath away. Our guide Arjun was incredible - knowledgeable, caring, and made sure everyone acclimatized properly. The campsites were cozy with hot water bottles in sleeping bags, meals were delicious and plentiful. CloudWalk's attention to detail and safety protocols gave me complete confidence. Already planning my next trek with them!",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Bangalore, India",
    avatar: "/images/avatar-rajesh.jpg",
    rating: 5,
    trek: "Hampta Pass Trek",
    date: "July 2024",
    content: "Hampta Pass was my first high-altitude crossover trek and CloudWalk made it seamless. The transition from lush Kullu valley to stark Lahaul desert was surreal. Chandratal Lake at 4300m was the highlight - camping by those turquoise waters under a million stars. Small group of 12 meant personalized attention. Medical checks every morning, oxygen saturation monitoring - their safety standards are world-class. Highly recommended!",
  },
  {
    id: "3",
    name: "Maria Gonzalez",
    location: "Madrid, Spain",
    avatar: "/images/avatar-maria.jpg",
    rating: 5,
    trek: "Valley of Flowers Trek",
    date: "August 2024",
    content: "The Valley of Flowers in full bloom is pure magic - 300+ species of wildflowers carpeting the valley floor with Himalayan peaks as backdrop. Hemkund Sahib gurudwara at 4329m was spiritually uplifting. Our guide Priya was a walking encyclopedia of flora/fauna. CloudWalk's eco-friendly approach (solar lights, waste segregation, local employment) made me feel good about my impact. The vegetarian meals were surprisingly diverse and delicious!",
  },
  {
    id: "4",
    name: "Amit & Priya Sharma",
    location: "Mumbai, India",
    avatar: "/images/avatar-amit.jpg",
    rating: 5,
    trek: "Triund Weekend Trek",
    date: "March 2025",
    content: "Perfect weekend escape from Mumbai! Triund offered stunning Dhauladhar views without extreme difficulty. CloudWalk handled everything - transport from Dharamshala, comfortable camping, bonfire with music, sunrise trek to Snowline. Our 8-year-old daughter completed it happily. The team's patience with kids and elderly trekkers was commendable. Great value for money. We've already booked Kareri Lake for next season!",
  },
  {
    id: "5",
    name: "Thomas Anderson",
    location: "Sydney, Australia",
    avatar: "/images/avatar-thomas.jpg",
    rating: 5,
    trek: "Pin Parvati Pass Expedition",
    date: "August 2023",
    content: "Pin Parvati is not for the faint-hearted - 11 days crossing 5319m pass from lush Parvati to arid Spiti. This was serious mountaineering and CloudWalk's expedition leadership was exemplary. Fixed ropes on technical sections, acclimatization schedule scientifically planned, satellite phone for emergencies, experienced Sherpa support. The cultural contrast between Hindu Parvati valley and Buddhist Spiti was profound. A true expedition, not just a trek.",
  },
  {
    id: "6",
    name: "Lisa Chen",
    location: "Singapore",
    avatar: "/images/avatar-lisa.jpg",
    rating: 5,
    trek: "Brahmatal Trek",
    date: "February 2024",
    content: "Winter wonderland at its finest! Brahmatal frozen lake with Mt. Trishul and Nanda Ghunti towering above - postcard perfect. Oak forests dusted with snow, camping on meadows under clear starry skies. CloudWalk's winter gear (4-season tents, -10°C rated sleeping bags, gaiters) kept us warm at -8°C nights. Hot garlic soup at 3am during summit push was a lifesaver. The small group (10) bonded like family. Already recommended to 5 friends!",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" aria-hidden="true" />
      <div className="noise-overlay opacity-30" aria-hidden="true" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-6 inline-block">
            <Star className="h-4 w-4 fill-current text-accent mr-2" />
            4.9/5 Rating from 5000+ Trekkers
          </Badge>
          <h2 className="heading-display mb-6">
            Stories from the
            <br />
            <span className="gradient-text">Trail</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Real experiences from adventurers who walked the clouds and summited the skies with CloudWalk Ventures.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <StatItem icon={Star} value="4.9/5" label="Average Rating" color="text-accent" />
          <StatItem icon={Users} value="5000+" label="Happy Trekkers" color="text-primary" />
          <StatItem icon={Award} value="100+" label="Expeditions" color="text-blue-400" />
          <StatItem icon={Shield} value="100%" label="Safety Record" color="text-green-400" />
        </motion.div>

        {/* Testimonials Carousel */}
        <Carousel
          items={testimonials}
          itemsPerView={3}
          showPagination={true}
          showNavigation={true}
          autoPlay={false}
          renderItem={(testimonial) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.article>
          )}
        />
      </div>
    </section>
  )
}

function StatItem({ icon: Icon, value, label, color }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string; color: string }) {
  return (
    <div className="text-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl" />
      <div className="relative">
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        <p className="font-display text-3xl sm:text-4xl font-bold text-white">{value}</p>
        <p className="body-sm text-white/50 mt-1">{label}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className={cn(
      "card-premium card-premium-hover p-6 h-full flex flex-col group relative overflow-hidden"
    )}>
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.721-9.57 9.011-9.891 1.442-.087 2.595.755 2.717 2.131.112 1.254-.765 2.374-1.974 2.529-2.993.383-5.429 2.952-5.429 6.231v7.391h-4.325zm-14.017 0v-7.391c0-5.704 3.713-9.57 9.003-9.89 1.442-.087 2.595.754 2.717 2.131.112 1.254-.764 2.374-1.974 2.529-2.993.383-5.429 2.952-5.429 6.231v7.391h-4.317z"/>
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="h-5 w-5 fill-current text-accent" />
        ))}
      </div>

      {/* Content */}
      <p className="body-lg text-white/80 mb-6 flex-1 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-white/50 text-sm">{testimonial.location}</p>
        </div>
      </div>

      {/* Trek Info */}
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-white/50">
        <span className="flex items-center gap-1">
          <Mountain className="h-3 w-3" />
          {testimonial.trek}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {testimonial.date}
        </span>
      </div>
    </div>
  )
}