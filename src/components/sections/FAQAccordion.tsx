"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { cn } from "@/lib/utils"
import { ChevronDown, HelpCircle, Mountain, Shield, Utensils, Truck, Users, Leaf, Calendar, MapPin, Star, Heart, Sun, Moon, Zap, Droplets, Wind, Thermometer, Camera } from "lucide-react"

const faqCategories = [
  {
    category: "Booking & Preparation",
    icon: Calendar,
    items: [
      {
        question: "How far in advance should I book my trek?",
        answer: "We recommend booking 30-60 days ahead for popular treks (Kedarkantha, Valley of Flowers, Hampta Pass) to secure preferred dates and allow fitness preparation time. Weekend treks like Triund can be booked 1-2 weeks ahead. Early booking also helps with group coordination and permit processing.",
      },
      {
        question: "What fitness level do I need for Himalayan treks?",
        answer: "Varies by difficulty: Easy treks (Triund, Nag Tibba) need basic fitness - ability to walk 5-6 hours with light pack. Moderate (Kedarkantha, Brahmatal) require cardio fitness and some hiking experience. Challenging (Pin Parvati, Roopkund) demand excellent fitness, prior high-altitude experience, and dedicated training. We provide detailed fitness guides per trek.",
      },
      {
        question: "Can solo trekkers join your groups?",
        answer: "Absolutely! Most of our trekkers join solo. Our fixed-departure groups (max 12-15) are perfect for solo adventurers - you'll meet like-minded people and often form lasting friendships. For private groups (4+), we offer custom dates/itineraries. Corporate/school groups welcome with special rates.",
      },
      {
        question: "What's included in the trek price?",
        answer: "All-inclusive: certified trek leader, local guides, accommodation (tents/homestays), all vegetarian meals, permits & forest fees, transport from pickup city, safety gear (oxygen, first aid, GPS, satellite phone), trek certificate. Excludes: personal gear, travel insurance, tips, transport to pickup city, personal expenses.",
      },
      {
        question: "Do I need travel insurance?",
        answer: "Yes, mandatory for all treks. Must cover high-altitude trekking up to 6000m, emergency helicopter evacuation, medical treatment, and trip cancellation. We recommend providers like World Nomads, SafetyWing, or Indian insurers with adventure coverage. Carry policy documents on trek.",
      },
    ],
  },
  {
    category: "On the Trek",
    icon: Mountain,
    items: [
      {
        question: "What food is served during treks?",
        answer: "Nutritious vegetarian meals for high-altitude energy: breakfast (porridge, eggs, parathas, tea/coffee), lunch (rice, dal, sabzi, roti, pickle), evening snacks (soup, pakoras, biscuits), dinner (similar to lunch + dessert). Vegan, gluten-free, Jain options available with advance notice. Fresh, locally-sourced ingredients.",
      },
      {
        question: "What are the sleeping arrangements?",
        answer: "Premium 3-season tents (2-person sharing) with thick insulated sleeping mats, -10°C rated sleeping bags, clean liners. Higher camps use 4-season expedition tents. Some treks include homestay nights. All campsites have toilet tents and dining tents with tables/chairs. Warm blankets provided.",
      },
      {
        question: "How do you handle altitude sickness (AMS)?",
        answer: "Safety first. Guides are Wilderness First Responder certified. We carry: pulse oximeters (daily SpO2 checks), oxygen cylinders, portable altitude chambers (Gamow bags), comprehensive medical kits, satellite phones. Itineraries include acclimatization days. Guides monitor each trekker closely and make evidence-based continue/descent decisions.",
      },
      {
        question: "What transport is provided?",
        answer: "Comfortable AC tempo travellers/SUVs with experienced mountain drivers. Door-to-door pickup from major hubs (Dehradun, Delhi, Chandigarh, Manali). GPS-tracked vehicles, backup vehicle on multi-day treks. Airport/railway station pickup available on request.",
      },
      {
        question: "Is there mobile network on treks?",
        answer: "Intermittent. Lower camps often have Jio/Airtel connectivity. Higher altitudes (3500m+) usually have no signal. Guides carry satellite phones for emergencies. We recommend informing family of limited connectivity. Emergency contacts provided at booking.",
      },
    ],
  },
  {
    category: "Gear & Packing",
    icon: Camera,
    items: [
      {
        question: "What essential gear do I need to bring?",
        answer: "Personal essentials: broken-in trekking boots, layered clothing (base, mid, outer), warm jacket, gloves, beanie, sunglasses, sunscreen, water bottles (2L), headlamp, personal medicines, toiletries. We provide detailed packing list per trek. Rental available for jackets, boots, poles, gaiters.",
      },
      {
        question: "Can I rent trekking gear?",
        answer: "Yes! Available at base: down jackets (₹300/day), trekking boots (₹200/day), poles (₹100/day), gaiters (₹100/day), sleeping bags (₹150/day), rucksacks (₹150/day). Pre-book at booking or 7 days before. Sizes limited - early reservation recommended.",
      },
      {
        question: "What about electronics charging?",
        answer: "Solar charging stations at base camps and some higher camps (weather dependent). Power banks recommended (20000mAh+). Cold drains batteries fast - keep devices warm in sleeping bag at night. Limited sockets in dining tents for essential charging only.",
      },
    ],
  },
  {
    category: "Safety & Policies",
    icon: Shield,
    items: [
      {
        question: "What's your cancellation policy?",
        answer: "More than 30 days: 90% refund. 15-30 days: 70% refund. 7-14 days: 50% refund. Less than 7 days: no refund (but can reschedule within 12 months with 20% admin fee). Force majeure (weather, govt orders): full credit for future trek. Travel insurance covers unforeseen cancellations.",
      },
      {
        question: "What if weather forces trek cancellation?",
        answer: "Safety is non-negotiable. If authorities close trails or conditions are dangerous, we: 1) Delay start by 1-2 days if possible, 2) Modify route to safer alternative, 3) Cancel with full credit for any future trek within 18 months. No cash refunds for weather - this is standard industry practice.",
      },
      {
        question: "Are your guides certified?",
        answer: "All lead guides: NIM (Nehru Institute of Mountaineering) or HMI (Himalayan Mountaineering Institute) certified, Wilderness First Responder (WFR) trained, 10+ years Himalayan experience. Local guides: born in region, know every trail/weather pattern/culture. Guide:trekker ratio 1:5 (better than industry standard 1:8).",
      },
      {
        question: "What's the minimum age for treks?",
        answer: "Easy weekend treks: 10+ years (with parent). Moderate treks: 14+ years. Challenging/Expedition: 18+ years. No upper age limit - fitness matters more than age. Oldest trekker: 72 years (Kedarkantha). Senior trekkers (60+) need doctor's fitness certificate.",
      },
      {
        question: "How do you practice sustainable trekking?",
        answer: "Leave No Trace principles: pack out all waste (including biodegradable), segregated waste disposal, solar lights at camps, no single-use plastics, eco-toilets with waste treatment, employ local staff/porters, support village homestays, contribute to local conservation funds. Carbon-neutral operations since 2023.",
      },
    ],
  },
]

export function FAQAccordion() {
  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
            Frequently Asked
          </span>
          <h2 className="heading-display mb-6">
            Your Questions,
            <br />
            <span className="gradient-text">Answered</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Everything you need to know before walking the clouds. Can't find your answer? Contact us directly.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-3">{category.category}</h3>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className={cn(
                      "flex items-center gap-4 px-6 py-5 text-left font-medium text-white bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                      "data-[state=open]:bg-white/10 data-[state=open]:border-primary/30"
                    )}>
                      <span className="flex-1 text-base leading-relaxed">{item.question}</span>
                      <ChevronDown className="h-5 w-5 text-white/50 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                    <AccordionContent className="overflow-hidden text-sm text-white/60 leading-relaxed">
                      <div className="px-6 pb-6 pt-2">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <HelpCircle className="h-7 w-7 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">Still have questions?</p>
              <p className="text-white/60 text-sm">Our trek experts are happy to help</p>
            </div>
            <a
              href="#contact"
              className="ml-auto px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}