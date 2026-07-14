"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, HelpCircle, Mountain, Shield, Utensils, Truck, Users, Leaf, Calendar, MapPin, Star, Heart, Sun, Snowflake, Wind, Thermometer, Camera, Wifi, Zap, Map, Stethoscope, Pill, CheckCircle, AlertCircle } from "lucide-react"

const faqCategories = [
  {
    category: "Booking & Preparation",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        question: "How far in advance should I book the Kedarkantha trek?",
        answer: "We recommend booking 30-60 days in advance for popular winter dates (Dec-Feb) to secure your preferred departure. Weekend batches fill up faster. Early bird discounts (5% off) apply for bookings 60+ days prior. Last-minute bookings are possible subject to availability — contact us directly."
      },
      {
        question: "What fitness level is required for Kedarkantha?",
        answer: "Kedarkantha is graded Easy — suitable for beginners with basic fitness. You should be able to walk 5-6 km comfortably with a light daypack. We recommend: 30 min jogging 3x/week, stair climbing, and weekend hikes for 4-6 weeks before the trek. No prior high-altitude experience needed. The gradual ascent profile (6 days) aids acclimatization."
      },
      {
        question: "Can I join as a solo trekker?",
        answer: "Absolutely! 60% of our trekkers join solo. You'll be grouped with like-minded adventurers (max 12-15 per batch). Many solo trekkers form lasting friendships. We ensure gender-separate tent sharing unless you book a private tent (₹1,500/night supplement)."
      },
      {
        question: "Is travel insurance mandatory?",
        answer: "Yes, comprehensive travel insurance covering high-altitude trekking up to 4,000m, emergency helicopter evacuation (min ₹10 lakh), medical expenses, and trip cancellation is mandatory. We verify insurance details before departure. Recommended providers: World Nomads, SafetyWing, or Indian insurers with adventure sports add-on."
      },
      {
        question: "What's your cancellation policy?",
        answer: "More than 30 days: 90% refund (10% admin fee). 15-30 days: 70% refund. 7-14 days: 50% refund. Less than 7 days: no refund but can reschedule within 12 months with 20% admin fee. Force majeure (weather, govt orders): full credit for any future trek within 18 months. Travel insurance covers unforeseen cancellations."
      },
    ]
  },
  {
    category: "On the Trek",
    icon: Mountain,
    color: "from-green-500 to-emerald-500",
    items: [
      {
        question: "What kind of food is served during the trek?",
        answer: "All vegetarian meals designed for high-altitude nutrition: Breakfast — porridge, eggs, parathas, tea/coffee. Lunch — packed (rice, dal, sabzi, roti, pickle, fruit). Evening — hot soup, pakoras/biscuits, tea. Dinner — soup, rice, dal, seasonal vegetables, roti, dessert. Vegan, gluten-free, Jain options available with advance notice. Ingredients are fresh, locally sourced."
      },
      {
        question: "What are the sleeping arrangements?",
        answer: "Premium 4-season twin-sharing tents with thick insulated sleeping mats, -10°C rated sleeping bags, fleece liners, and hot water bottles at night. Sankri night: comfortable guesthouse/homestay with attached bathrooms. All campsites have dining tents with tables/chairs, toilet tents with eco-friendly waste management, and solar lighting."
      },
      {
        question: "How do you handle altitude sickness (AMS)?",
        answer: "Safety first. Our WFR-certified leaders conduct daily SpO2/pulse checks. Itinerary includes acclimatization day at base camp. We carry: oxygen cylinders, portable altitude chamber (Gamow bag), comprehensive medical kit, satellite phone. Evidence-based decision making — immediate descent if symptoms worsen. Zero serious AMS incidents in 15+ years."
      },
      {
        question: "What transport is provided?",
        answer: "AC Tempo Traveller (12-15 seater) from Dehradun to Sankri return. Experienced mountain drivers, GPS tracking, backup vehicle on multi-day treks. Pickup from Dehradun airport/railway station/IBT. Journey: 210 km, 8-9 hrs via Mussoorie-Nainbagh-Purola. Scenic mountain roads with regular breaks."
      },
      {
        question: "Is there mobile network on the trek?",
        answer: "Jio/Airtel available at Sankri and Base Camp. Intermittent at Juda ka Talab. No network at Summit. Guides carry satellite phone for emergencies. We recommend informing family of limited connectivity. Emergency contacts provided at booking."
      },
    ]
  },
  {
    category: "Gear & Packing",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    items: [
      {
        question: "What essential gear do I need to bring?",
        answer: "Personal essentials: broken-in trekking boots, layered clothing (base/mid/outer), warm hat, gloves (waterproof + liner), sunglasses, sunscreen SPF 50+, lip balm SPF 30+, 2L water bottles, headlamp + spare batteries, personal medicines, toiletries. Detailed packing list sent after booking. Gear rental available: jacket ₹300/day, boots ₹200/day, poles ₹100/day."
      },
      {
        question: "Can I rent trekking gear?",
        answer: "Yes! Available at Sankri base: Down jacket (₹300/day), Trekking boots (₹200/day), Trekking poles (₹100/day), Gaiters (₹100/day), Sleeping bag (₹150/day), Rucksack (₹150/day). Pre-booking recommended (sizes limited). Payment on arrival. Quality checked before each season."
      },
      {
        question: "What about charging electronics?",
        answer: "Solar charging stations at Base Camp and Sankri (weather dependent). Power banks strongly recommended (20,000 mAh+). Cold drains batteries fast — keep phone/power bank in sleeping bag at night. Limited sockets in dining tent for essential charging only. Carry spare batteries for camera/GoPro."
      },
    ]
  },
  {
    category: "Health & Safety",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    items: [
      {
        question: "What medical conditions prevent participation?",
        answer: "Uncontrolled hypertension, severe asthma/COPD, recent heart surgery/stroke, uncontrolled diabetes, pregnancy, severe anemia (Hb <11), active infections. Age 45+ requires doctor's fitness certificate. We assess case-by-case — contact us to discuss. Safety is non-negotiable."
      },
      {
        question: "What if weather forces route changes?",
        answer: "Safety is non-negotiable. If authorities close trails or conditions are dangerous, we: 1) Delay start by 1-2 days, 2) Modify route to safer alternative, 3) Cancel with full credit for any future trek within 18 months. No cash refunds for weather — standard industry practice. Travel insurance covers weather disruptions."
      },
      {
        question: "Are your guides certified?",
        answer: "All lead guides: NIM (Nehru Institute of Mountaineering) or HMI (Himalayan Mountaineering Institute) certified, Wilderness First Responder (WFR) trained, 10+ years Himalayan experience. Local guides: born in region, know every trail/weather pattern/cultural nuance. Guide:trekker ratio 1:5 (industry standard 1:8). Regular skill refreshers."
      },
      {
        question: "What emergency protocols exist?",
        answer: "Comprehensive: Daily medical monitoring (SpO2, pulse, BP). Oxygen cylinders + Gamow bag on every trek. Satellite phone + 2-way radios. Trained in HAPE/HACE recognition & treatment. Evacuation plan with nearest helipads (Sankri, Purola). Hospital tie-ups: Uttarkashi District Hospital, Max Dehradun. 24/7 ops team support."
      },
    ]
  },
  {
    category: "Practical Details",
    icon: HelpCircle,
    color: "from-amber-500 to-orange-500",
    items: [
      {
        question: "What's the minimum age for this trek?",
        answer: "10 years (with parent/guardian). No upper age limit — oldest trekker was 72! Fitness matters more than age. Seniors (60+) need doctor's fitness certificate. Children 10-14 need parent accompaniment. We've had multi-generational families complete this trek."
      },
      {
        question: "What's the group size?",
        answer: "Maximum 12-15 trekkers per batch with 2-3 guides (1:5 ratio). Small groups = better experience, faster pace, less environmental impact, personalized attention. Private groups (4+) can book custom dates."
      },
      {
        question: "What's included in the price?",
        answer: "All-inclusive: Certified trek leader, local guides, accommodation (tents + Sankri guesthouse), all meals (Day 1 dinner to Day 5 lunch), forest permits, Dehradun-Sankri-Dehradun transport (AC Tempo Traveller), safety equipment (oxygen, medical kit, sat phone), trek completion certificate. Excludes: travel insurance, personal gear, tips, porter, alcohol, extra nights."
      },
      {
        question: "When is the best time for Kedarkantha?",
        answer: "Dec-Apr for snow experience (peak: Jan-Feb with 2-4 ft snow). Mar-Apr for rhododendron blooms & clearer skies. Dec for Christmas/New Year vibes. Avoid monsoon (Jul-Sep) — trail slippery, leeches, landslides. Summer (May-Jun) — no snow, but pleasant meadows."
      },
      {
        question: "How do I reach Dehradun?",
        answer: "By Air: Jolly Grant Airport (DED) — 30 km from city, flights from Delhi, Mumbai, Bangalore. By Train: Dehradun Station (DDN) — Shatabdi, Jan Shatabdi, Nanda Devi Express from Delhi. By Road: 250 km from Delhi (5-6 hrs via NH7). We provide pickup from airport/railway station."
      },
    ]
  }
]

export function FAQAccordion() {
  return (
    <section id="faq" className="relative section-padding overflow-hidden">
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
            Frequently Asked
          </span>
          <h2 className="heading-display mb-6">
            Your Questions,
            <br />
            <span className="gradient-text">Answered</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Everything you need to know before your Kedarkantha adventure. Can't find your answer? Our trek experts are a message away.
          </p>
        </motion.div>

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
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  `bg-gradient-to-br ${category.color}`
                )}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-3">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    delay={0.3 + itemIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-6 glass-card rounded-3xl">
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
      </div>
    </section>
  )
}

function FAQItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="glass-card rounded-2xl overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center gap-4 px-6 py-5 text-left font-medium text-white",
            "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
          )}
          aria-expanded={isOpen}
        >
          <span className="flex-1 text-base leading-relaxed">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="h-5 w-5 text-white/50 shrink-0 flex items-center justify-center"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 text-white/70 leading-relaxed">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}