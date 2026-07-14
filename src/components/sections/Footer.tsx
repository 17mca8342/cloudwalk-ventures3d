"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Mountain,
  MapPin,
  Calendar,
  Heart,
  Shield,
  Truck,
  Users,
  Leaf,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Press & Media", href: "/press" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Blog", href: "/blog" },
  ],
  treks: [
    { label: "All Treks", href: "/treks" },
    { label: "Weekend Trips", href: "/treks?category=weekend" },
    { label: "Himalayan Treks", href: "/treks?category=himalayan" },
    { label: "Expeditions", href: "/treks?category=expeditions" },
    { label: "Custom Trips", href: "/custom-trips" },
    { label: "Upcoming Departures", href: "#upcoming-treks" },
  ],
  destinations: [
    { label: "Uttarakhand", href: "/destinations/uttarakhand" },
    { label: "Himachal Pradesh", href: "/destinations/himachal-pradesh" },
    { label: "Kashmir", href: "/destinations/kashmir" },
    { label: "Spiti Valley", href: "/destinations/spiti-valley" },
    { label: "Ladakh", href: "/destinations/ladakh" },
    { label: "View All", href: "#destinations" },
  ],
  support: [
    { label: "FAQs", href: "#faq" },
    { label: "Booking Terms", href: "/terms" },
    { label: "Cancellation Policy", href: "/cancellation" },
    { label: "Safety Protocols", href: "/safety" },
    { label: "Gear Rental", href: "/gear-rental" },
    { label: "Contact Us", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/cloudwalkventures", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@cloudwalkventures", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com/cloudwalkventures", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/cloudwalkventures", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/cloudwalktreks", label: "Twitter" },
]

const trustBadges = [
  { icon: Shield, label: "100% Safety Record" },
  { icon: Heart, label: "4.9/5 Rating" },
  { icon: Users, label: "5000+ Trekkers" },
  { icon: Leaf, label: "Eco-Conscious" },
  { icon: Mountain, label: "15+ Destinations" },
  { icon: Sparkles, label: "Expert Guides" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background/50 border-t border-white/10 overflow-hidden">
      <div className="relative container-custom py-20 lg:py-28">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-5 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-2 max-w-xs"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6" aria-label="CloudWalk Ventures Home">
              <div className="relative">
                <svg
                  className="h-10 w-10 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5L25.5 9 16 13.5 6.5 9 16 4.5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13.5V22M10 18h12M16 13.5v8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-accent" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">CloudWalk</span>
            </Link>

            <p className="text-white/60 mb-8 leading-relaxed max-w-sm">
              Premium Himalayan trekking experiences across Uttarakhand, Himachal, Kashmir, Spiti & Ladakh. Walk the Clouds. Summit the Skies.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full"
                >
                  <badge.icon className="h-3.5 w-3.5 text-accent" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Contact Quick */}
            <div className="space-y-3 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <a href="mailto:info@cloudwalkventures.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                info@cloudwalkventures.com
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-5">Company</h4>
            <nav className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Treks Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-5">Treks</h4>
            <nav className="space-y-3">
              {footerLinks.treks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Destinations Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-5">Destinations</h4>
            <nav className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-white mb-5">Support</h4>
            <nav className="space-y-3">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-white/50 text-sm mb-4">Follow Our Journey</p>
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-center"
          >
            <p className="text-white/50 text-sm">
              © {currentYear} CloudWalk Ventures. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Premium Himalayan Trekking Experiences
            </p>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-right"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 text-xs text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="#home"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <Mountain className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}