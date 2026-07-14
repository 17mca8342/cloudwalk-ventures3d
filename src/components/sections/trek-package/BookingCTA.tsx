"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowRight, Shield, Star, Users, Mountain, Sparkles, MessageCircle, Clock, Calendar, Check } from "lucide-react"

export function BookingCTA() {
  const benefits = [
    { icon: Shield, title: "100% Safety Record", desc: "Zero incidents in 15+ years of operations" },
    { icon: Star, title: "4.9/5 Rating", desc: "From 5000+ verified trekker reviews" },
    { icon: Users, title: "Small Groups", desc: "Maximum 12-15 trekkers per batch" },
    { icon: Mountain, title: "Expert Guides", desc: "NIM/HMI certified with 10+ years exp" },
    { icon: Sparkles, title: "All-Inclusive", desc: "No hidden costs, transparent pricing" },
    { icon: MessageCircle, title: "24/7 Support", desc: "WhatsApp assistance before & during trek" },
  ]

  const inclusions = [
    "4 nights premium camping + 1 night homestay",
    "All meals (Day 1 dinner to Day 5 lunch)",
    "Dehradun ↔ Sankri return transport",
    "Certified trek leader + local guide",
    "Forest permits & entry fees",
    "4-season tents, -10°C sleeping bags",
    "Insulated mats, hot water bottles",
    "Oxygen cylinder, medical kit, SpO2 monitoring",
    "Trek completion certificate",
    "Group photos & videos",
  ]

  return (
    <section id="booking" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/booking-cta-bg.jpg"
          alt="Kedarkantha mountain landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/90" />
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 inline-block">
              <Sparkles className="h-4 w-4 mr-2" />
              Limited Seats Available
            </Badge>
            <h2 className="heading-display mb-6 text-white">
              Ready for Your
              <br />
              <span className="gradient-text-cta">Himalayan Adventure?</span>
            </h2>
            <p className="body-lg text-white/80 mb-8 max-w-xl">
              Join 5000+ trekkers who've walked the clouds and summited the skies with CloudWalk Ventures. Secure your spot for the Kedarkantha Winter Trek — India's most beautiful winter summit.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{benefit.title}</p>
                    <p className="text-sm text-white/60">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="xl"
                className="w-full sm:w-auto gap-3 py-4 text-lg"
                asChild
              >
                <a href="/treks/kedarkantha-trek/booking">
                  Book Your Trek Now
                  <ArrowRight className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto gap-3 py-4 text-lg border-white/30 hover:border-white/50 hover:bg-white/5"
                asChild
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6" />
                  Talk on WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Upcoming Departures
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Dec 15", "Dec 28", "Jan 11", "Jan 25"].map((date, i) => (
                  <motion.div
                    key={date}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="glass-card p-4 rounded-xl text-center group"
                  >
                    <p className="text-xs text-white/50 uppercase tracking-wider">Departure</p>
                    <p className="font-display text-xl font-bold text-white">{date}</p>
                    <p className="text-xs text-green-400 mt-1">Seats Available</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Secure Booking</h3>
                  <p className="text-white/50 text-sm">Protected payments, instant confirmation</p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="First Name" placeholder="John" required />
                  <FormField label="Last Name" placeholder="Doe" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Email" type="email" placeholder="john@example.com" required />
                  <FormField label="Phone / WhatsApp" type="tel" placeholder="+91 98765 43210" required />
                </div>
                <FormField label="Preferred Departure" placeholder="Select date" required />
                <FormField label="Group Size" placeholder="e.g., 2 people" required />

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-0.5 rounded border-white/30 text-primary bg-white/5 focus:ring-primary focus:ring-2"
                      required
                    />
                    <span className="text-sm text-white/80 leading-relaxed">
                      I agree to the <a href="/terms" className="text-accent hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>. I confirm I have read the <a href="/treks/kedarkantha-trek" className="text-accent hover:underline">trek details</a> including fitness requirements.
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full gap-3 py-4 text-lg"
                >
                  Reserve My Spot
                  <ArrowRight className="h-6 w-6" />
                </Button>

                <p className="text-center text-white/50 text-sm">
                  Secure SSL payment • Instant confirmation • Free cancellation 30+ days prior
                </p>
              </form>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-400" />
                  What Happens After Booking?
                </h4>
                <ol className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">1</span>
                    <span>Instant email confirmation with booking ID & payment receipt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">2</span>
                    <span>Welcome kit with detailed packing list, fitness guide & trek brief sent within 24 hrs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">3</span>
                    <span>Pre-trek call from your trek leader 7 days before departure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">4</span>
                    <span>WhatsApp group created for your batch — connect with fellow trekkers</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="heading-3 mb-4 text-white">Still Have Questions?</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Our trek experts are available 9 AM - 9 PM IST to help you choose the right dates, discuss fitness preparation, or customize a private group trek.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="xl"
                className="w-full sm:w-auto gap-3 py-4 text-lg"
                asChild
              >
                <a href="#contact">
                  Contact Us
                  <ArrowRight className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto gap-3 py-4 text-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/5"
                asChild
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp Us
                </a>
              </Button>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  9 AM - 9 PM IST
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Mon-Sat
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FormField({ label, type = "text", placeholder, required, children }: { label: string; type?: string; placeholder: string; required?: boolean; children?: React.ReactNode }) {
  return (
    <div className="relative">
      {children ? (
        <select
          className="w-full px-4 py-4 pr-10 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-white/20"
          required={required}
        >
          <option value="" disabled>{placeholder}</option>
          {children}
        </select>
      ) : (
        <>
          <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-white/20"
            required={required}
          />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-1/2 peer-focus:-translate-y-1/2 peer-focus:text-primary">
            {label}
          </label>
        </>
      )}
    </div>
  )
}