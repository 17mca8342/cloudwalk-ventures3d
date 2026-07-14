"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Label } from "@/components/ui/Label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, MessageCircle, Send, Loader2, CheckCircle, AlertCircle, Map, Mountain, Sun, Users, Shield, Zap } from "lucide-react"

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  trekInterest: z.string().optional(),
  groupSize: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("submitting")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus("success")
        reset()
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: "CloudWalk Ventures, Dehradun, Uttarakhand 248001",
      subtext: "Mon-Sat: 9AM - 7PM IST",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtext: "WhatsApp: +91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@cloudwalkventures.com",
      subtext: "bookings@cloudwalkventures.com",
    },
  ]

  const quickStats = [
    { icon: Mountain, value: "15+", label: "Destinations" },
    { icon: Users, value: "5000+", label: "Happy Trekkers" },
    { icon: Shield, value: "100%", label: "Safety Record" },
    { icon: Sun, value: "24/7", label: "Support" },
  ]

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
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
            <MessageCircle className="h-4 w-4 mr-2" />
            Get in Touch
          </Badge>
          <h2 className="heading-display mb-6">
            Start Your
            <br />
            <span className="gradient-text">Adventure</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Have questions? Want a custom itinerary? Our trek experts are ready to help plan your perfect Himalayan journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm mb-1">{item.details}</p>
                  <p className="text-white/50 text-xs">{item.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-4 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/50 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card-premium p-8"
            >
              <h3 className="heading-3 mb-6">Send Us a Message</h3>

              <AnimatePresence mode="wait">
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-400">Message Sent Successfully!</p>
                      <p className="text-green-400/80 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-400">Something went wrong</p>
                      <p className="text-red-400/80 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="John"
                      className="mt-2"
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Doe"
                      className="mt-2"
                      aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className="mt-2"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="mt-2"
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="trekInterest">Interested Trek</Label>
                    <Input
                      id="trekInterest"
                      {...register("trekInterest")}
                      placeholder="e.g., Kedarkantha, Hampta Pass"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="groupSize">Group Size</Label>
                    <Input
                      id="groupSize"
                      {...register("groupSize")}
                      placeholder="e.g., 4 people"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      {...register("preferredDate")}
                      placeholder="e.g., March 2025"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your dream trek, any special requirements, or questions..."
                    rows={5}
                    className="mt-2"
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto justify-center gap-3"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right: Map & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="card-premium overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.123456789!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092e1234567890%3A0x1234567890abcdef!2sCloudWalk%20Ventures!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">CloudWalk Ventures</p>
                      <p className="text-white/60 text-sm">Dehradun, Uttarakhand 248001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20CloudWalk%20Ventures%2C%20I%27m%20interested%20in%20booking%20a%20trek.%20Can%20you%20help%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium p-6 group hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-600/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/30 group-hover:border-green-500/50 transition-all duration-300">
                  <MessageCircle className="h-7 w-7 text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Chat on WhatsApp</h4>
                  <p className="text-white/60 text-sm mb-3">Get instant answers from our trek experts. Available 9AM-9PM IST.</p>
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Secure
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Quick Reply
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Expert Advice
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Office Hours */}
            <div className="card-premium p-6">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Sun className="h-5 w-5 text-accent" />
                Office Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Monday - Saturday</span>
                  <span className="text-white">9:00 AM - 7:00 PM IST</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Sunday</span>
                  <span className="text-white">Closed (Emergency: 24/7)</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Trek Support</span>
                  <span className="text-white">24/7 During Treks</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}