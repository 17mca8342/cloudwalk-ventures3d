"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel } from "@/components/ui/Carousel"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Star, Users, MapPin, Calendar, Shield, Heart, Award, MessageCircle, Verified, Camera, Mountain } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "/images/avatars/priya.jpg",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    date: "January 2025",
    verified: true,
    content: "Absolutely life-changing experience! The Kedarkantha summit sunrise over the Himalayas took my breath away. Our guide Arjun was incredible — knowledgeable, caring, and made sure everyone acclimatized properly. The campsites were cozy with hot water bottles in sleeping bags, meals were delicious and plentiful. CloudWalk's attention to detail and safety protocols gave me complete confidence. Already planning my next trek with them!",
    highlights: ["Summit Sunrise", "Expert Guide", "Safety Protocols", "Delicious Food"],
    photos: ["/images/testimonials/priya-summit.jpg", "/images/testimonials/priya-camp.jpg"]
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    avatar: "/images/avatars/rajesh.jpg",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    date: "December 2024",
    verified: true,
    content: "First winter trek and CloudWalk made it perfect. The Juda ka Talab frozen lake camping was surreal — waking up to mountain reflections in ice. Small group of 12 meant personalized attention. Medical checks every morning, oxygen saturation monitoring, and the guide adjusted pace perfectly. Hot parathas at 12,000ft were a highlight! The team's professionalism and warmth made this unforgettable.",
    highlights: ["Frozen Lake Camping", "Small Group", "Medical Monitoring", "Hot Meals"],
    photos: ["/images/testimonials/rajesh-lake.jpg"]
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "/images/avatars/sarah.jpg",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    date: "February 2025",
    verified: true,
    content: "As an international trekker, I was nervous about logistics and altitude. CloudWalk handled everything — airport pickup, permits, gear rental, even dietary preferences. The 360° Himalayan views from Kedarkantha summit (Swargarohini, Bandarpoonch, Black Peak) were worth every step. Our guide shared fascinating local culture and ecology. Felt safe throughout with daily SpO2 checks and emergency protocols. Highly recommend for international travelers!",
    highlights: ["International Support", "360° Views", "Cultural Insights", "Safety First"],
    photos: ["/images/testimonials/sarah-view.jpg", "/images/testimonials/sarah-group.jpg"]
  },
  {
    id: 4,
    name: "Amit & Priya Patel",
    location: "Ahmedabad, Gujarat",
    avatar: "/images/avatars/amit-priya.jpg",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    date: "January 2025",
    verified: true,
    content: "Perfect couple's adventure! The frozen Juda ka Talab campsite was romantic — stargazing from our tent with the Milky Way above. CloudWalk's couple-friendly setup with private tent option was thoughtful. Our guide captured amazing photos of us at summit. The descent through pine forests was peaceful. Great value for money with all inclusions. We've already booked Hampta Pass for next summer!",
    highlights: ["Couple Friendly", "Stargazing", "Private Tent", "Photography"],
    photos: ["/images/testimonials/amit-priya.jpg"]
  },
  {
    id: 5,
    name: "Thomas Anderson",
    location: "Sydney, Australia",
    avatar: "/images/avatars/thomas.jpg",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    date: "March 2025",
    verified: true,
    content: "Came solo, left with friends! The group dynamic CloudWalk fosters is amazing — 12 strangers became a family by summit day. Summit push at 3 AM was challenging but the sunrise over Swargarohini range made it all worth it. Guides carried hot ginger soup at 3 AM — that care makes all the difference. CloudWalk's eco-practices (waste segregation, solar lights, local employment) align with my values. Will return for Roopkund!",
    highlights: ["Group Bonding", "Summit Push", "Eco Practices", "Solo Friendly"],
    photos: ["/images/testimonials/thomas-group.jpg"]
  },
  {
    id: 6,
    name: "Neha Gupta",
    location: "Delhi, NCR",
    avatar: "/images/avatars/neha.jpg",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    date: "December 2024",
    verified: true,
    content: "Weekend warrior's dream trek! Did this over a long weekend — left Friday night, back Monday night. Perfect for working professionals. The 4N/5D format with buffer day is smart. CloudWalk's Sankri homestay was comfortable, transport from Dehradun was smooth. Our group had mixed fitness levels and the guide managed pace beautifully. Best decision: booking early for group discount!",
    highlights: ["Weekend Friendly", "Buffer Day", "Mixed Fitness", "Group Discount"],
    photos: ["/images/testimonials/neha-weekend.jpg"]
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="h-6 w-6 fill-current text-accent" />
              ))}
            </div>
            <Badge variant="secondary" className="text-sm">
              4.9/5 Rating from 5000+ Trekkers
            </Badge>
          </div>
          <h2 className="heading-display mb-6">
            Stories from the
            <br />
            <span className="gradient-text">Trail</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Real experiences from adventurers who walked the clouds and summited the skies with CloudWalk Ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-6 w-6 fill-current text-accent" />
                  ))}
                </div>
                <Badge variant="secondary" className="text-sm">
                  4.9/5 Average Rating
                </Badge>
              </div>
              <h3 className="heading-3 mb-4 text-white">"The summit sunrise changed my perspective on life. CloudWalk made it possible."</h3>
              <p className="text-white/70 mb-6 text-lg leading-relaxed max-w-xl">
                From the moment I landed in Dehradun to the final goodbye, every detail was flawless. The guides became friends, the mountains became teachers, and the memories became treasures.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                  PK
                </div>
                <div>
                  <p className="font-semibold text-white">Priya Sharma</p>
                  <p className="text-white/50 text-sm">Kedarkantha, Jan 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {[
            { icon: Star, value: "4.9/5", label: "Average Rating" },
            { icon: Users, value: "5000+", label: "Happy Trekkers" },
            { icon: Shield, value: "100%", label: "Safety Record" },
            { icon: Award, value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <Carousel
          items={testimonials}
          itemsPerView={1}
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
              <Card className={cn("card-premium card-premium-hover h-full flex flex-col")}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="flex items-center gap-1 text-white/50 text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {testimonial.verified && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                        <Verified className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-accent" />
                  ))}
                </div>

                <p className="text-white/80 mb-4 leading-relaxed flex-1">
                  "{testimonial.content}"
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.highlights.map((h) => (
                    <Badge key={h} variant="secondary" className="text-xs">
                      {h}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{testimonial.date}</span>
                    <span className="px-2">·</span>
                    <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs">
                      {testimonial.trek}
                    </span>
                  </div>
                  {testimonial.photos.length > 0 && (
                    <div className="flex gap-1">
                      {testimonial.photos.map((photo, i) => (
                        <div key={i} className="w-12 h-12 rounded-lg overflow-hidden bg-white/5">
                          <Image src={photo} alt={`${testimonial.name} photo ${i+1}`} fill className="object-cover" sizes="(max-width: 48px) 48px" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.article>
          )}
        />
      </div>
    </section>
  )
}