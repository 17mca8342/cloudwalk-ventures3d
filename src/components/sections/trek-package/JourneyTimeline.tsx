"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MapPin, Calendar, Sun, Moon, Utensils, Car, Mountain, Footprints, Home, Camera } from "lucide-react"

const journeyDays = [
  {
    day: 1,
    title: "Arrival at Sankri",
    subtitle: "Drive from Dehradun (210 km, 8-9 hrs)",
    altitude: "1,950 m / 6,400 ft",
    image: "/images/journey/day1-sankri.jpg",
    accommodation: "Guest House / Homestay",
    meals: ["Dinner"],
    drive: "210 km / 8-9 hrs",
    trek: "—",
    activities: ["Scenic mountain drive via Mussoorie", "Cross Yamuna river at Nainbagh", "Welcome briefing & gear check", "Early rest for acclimatization"],
    notes: "Network available (Jio/Airtel). ATMs in Purola (30 km before)."
  },
  {
    day: 2,
    title: "Sankri to Juda ka Talab",
    subtitle: "Trek through pine forests to frozen lake",
    altitude: "2,780 m / 9,120 ft",
    image: "/images/journey/day2-juda-talab.jpg",
    accommodation: "Tents (Twin Sharing)",
    meals: ["Breakfast", "Lunch", "Evening Snacks", "Dinner"],
    drive: "—",
    trek: "4 km / 3-4 hrs",
    activities: ["Gradual ascent through oak & pine", "Cross seasonal streams", "Camp by frozen Juda ka Talab", "Evening acclimatization walk", "Star gazing session"],
    notes: "First high-altitude camp. Stay hydrated. Carry 2L water."
  },
  {
    day: 3,
    title: "Juda ka Talab to Kedarkantha Base",
    subtitle: "Steeper climb to base camp meadow",
    altitude: "3,400 m / 11,150 ft",
    image: "/images/journey/day3-base-camp.jpg",
    accommodation: "Tents (Twin Sharing)",
    meals: ["Breakfast", "Lunch", "Evening Snacks", "Dinner"],
    drive: "—",
    trek: "3 km / 3-4 hrs",
    activities: ["Steep climb through rhododendron", "Views of Swargarohini range", "Base camp setup on meadow", "Medical check (SpO2/HR)", "Sunset photography session"],
    notes: "Critical acclimatization day. Report any AMS symptoms immediately."
  },
  {
    day: 4,
    title: "Summit Day - Kedarkantha Peak & Return to Base",
    subtitle: "Pre-dawn ascent for sunrise summit",
    altitude: "3,810 m / 12,500 ft (Summit)",
    image: "/images/journey/day4-summit.jpg",
    accommodation: "Tents (Twin Sharing)",
    meals: ["Early Breakfast", "Lunch", "Evening Snacks", "Dinner"],
    drive: "—",
    trek: "6 km / 6-7 hrs",
    activities: ["2:30 AM wake-up", "3:00 AM summit push", "360° Himalayan sunrise", "Summit celebration & photos", "Descend to base camp", "Rest & recovery"],
    notes: "Most challenging day. Layer up. Carry headlamp, gloves, hot water. Summit temp: -5°C to -10°C."
  },
  {
    day: 5,
    title: "Base Camp to Sankri - Departure",
    subtitle: "Descend through forests to Sankri",
    altitude: "1,950 m / 6,400 ft",
    image: "/images/journey/day5-descent.jpg",
    accommodation: "—",
    meals: ["Breakfast", "Lunch"],
    drive: "—",
    trek: "7 km / 4-5 hrs",
    activities: ["Leisurely descent", "Final forest walk", "Certificate distribution", "Lunch at Sankri", "Drive to Dehradun (arrive 7-8 PM)"],
    notes: "Buffer day for weather. Drop at Dehradun railway station/airport."
  }
]

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden="true" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
            5 Days Journey
          </span>
          <h2 className="heading-display mb-6">
            Complete
            <br />
            <span className="gradient-text">Itinerary</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Day-by-day breakdown of your Kedarkantha adventure — from arrival to summit triumph.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-12">
            {journeyDays.map((day, index) => (
              <motion.article
                key={day.day}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={cn(
                  "relative lg:w-1/2",
                  index % 2 === 0 ? "lg:pl-20" : "lg:pr-20 lg:ml-auto"
                )}
              >
                <div className="relative">
                  <div className="absolute lg:left-full lg:-left-6 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background flex items-center justify-center z-10 shadow-xl shadow-primary/30">
                    <span className="font-display text-xl font-bold text-primary-foreground">{day.day}</span>
                  </div>

                  <div className="card-premium card-premium-hover p-8 h-full">
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={day.image}
                        alt={`Day ${day.day} - ${day.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                          <MapPin className="h-3.5 w-3.5" />
                          {day.altitude}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-3">
                        {day.subtitle}
                      </span>
                      <h3 className="heading-3 text-white mb-2">{day.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
                      <InfoCard icon={Home} label="Stay" value={day.accommodation} />
                      <InfoCard icon={Utensils} label="Meals" value={day.meals.join(", ")} />
                      <InfoCard icon={Car} label="Drive" value={day.drive} />
                      <InfoCard icon={Footprints} label="Trek" value={day.trek} />
                    </div>

                    <div className="space-y-3 mb-6">
                      {day.activities.map((activity, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 text-white/70 text-sm"
                        >
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          </span>
                          <span>{activity}</span>
                        </motion.div>
                      ))}
                    </div>

                    {day.notes && (
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="flex-shrink-0 text-accent">
                            <Camera className="h-5 w-5" />
                          </span>
                          <p className="text-white/60 text-sm">{day.notes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
      <Icon className="h-4 w-4 text-accent mx-auto mb-1" />
      <p className="text-[0.65rem] text-white/40 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-medium text-white/80 truncate">{value}</p>
    </div>
  )
}