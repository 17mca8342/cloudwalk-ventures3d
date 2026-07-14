"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Snowflake, Tent, Sun, UserCheck, Utensils, Trees, Camera, Flame } from "lucide-react"

const highlights = [
  { icon: Snowflake, title: "Snow Trek", description: "Pristine snow-covered trails through pine forests with fresh powder underfoot", color: "from-blue-500 to-cyan-500" },
  { icon: Tent, title: "Alpine Camping", description: "Premium 4-season tents with insulated mats, warm blankets, and hot water bottles at 3 campsites", color: "from-amber-500 to-orange-500" },
  { icon: Sun, title: "Summit Sunrise", description: "Early morning ascent to Kedarkantha peak for 360° Himalayan sunrise over Swargarohini & Bandarpoonch", color: "from-yellow-500 to-amber-500" },
  { icon: UserCheck, title: "Certified Leader", description: "NIM/HMI certified trek leader with Wilderness First Responder training and 10+ years Himalayan experience", color: "from-green-500 to-emerald-500" },
  { icon: Utensils, title: "Nutritious Meals", description: "Fresh vegetarian meals with local ingredients - hot breakfast, packed lunch, evening soup & snacks, dinner", color: "from-red-500 to-rose-500" },
  { icon: Trees, title: "Forest Trails", description: "Dense oak, pine & rhododendron forests rich in birdlife - Himalayan monal, koklass pheasant, woodpeckers", color: "from-emerald-500 to-teal-500" },
  { icon: Camera, title: "Photography", description: "Dedicated photo sessions at key viewpoints - Juda ka Talab reflections, summit panoramas, star trails", color: "from-purple-500 to-pink-500" },
  { icon: Flame, title: "Evening Bonfire", description: "Cozy bonfires with hot chocolate, local folk stories, stargazing sessions, and Milky Way photography", color: "from-orange-500 to-red-500" },
]

export function HighlightsGrid() {
  return (
    <section id="highlights" className="relative section-padding overflow-hidden">
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
            Trek Highlights
          </span>
          <h2 className="heading-display mb-6">
            What Makes This Trek
            <br />
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Every detail is crafted for an immersive Himalayan experience — from summit sunrises to starlit bonfires.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="card-premium card-premium-hover p-8 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-5 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${highlight.color}`}>
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </motion.div>

                <h3 className="heading-4 mb-3 text-white group-hover:text-accent transition-colors">
                  {highlight.title}
                </h3>

                <p className="body-sm text-white/50 leading-relaxed">
                  {highlight.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  className="mt-6 h-0.5 bg-gradient-to-r rounded-full"
                  style={{ background: highlight.color }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: highlight.color }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}