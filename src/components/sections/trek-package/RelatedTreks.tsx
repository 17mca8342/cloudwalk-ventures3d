"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel } from "@/components/ui/Carousel"
import { Card, CardContent, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Mountain, MapPin, Calendar, Users, ArrowRight, Sparkles } from "lucide-react"

interface RelatedTreksProps {
  relatedTreks: Array<{
    id: string
    title: string
    description: string
    region: string
    duration: string
    difficulty: string
    maxAltitude: string
    price: number
    originalPrice?: number
    image: string
    bestSeason: string[]
    groupSize: string
    featured: boolean
    slug: string
  }>
}

export function RelatedTreks({ relatedTreks }: RelatedTreksProps) {
  return (
    <section id="related-treks" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden="true" />
      <div className="noise-overlay opacity-30" aria-hidden="true" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <Badge variant="secondary" className="mb-4 inline-block">
                <Sparkles className="h-4 w-4 mr-2" />
                You May Also Like
              </Badge>
              <h2 className="heading-2 mb-3">Explore More Himalayan Adventures</h2>
              <p className="body-lg text-white/60 max-w-xl">
                Each trek offers unique landscapes and experiences. From alpine meadows to high passes, there's a trail for every dream.
              </p>
            </div>
          </div>
        </motion.div>

        <Carousel
          items={relatedTreks}
          itemsPerView={3}
          showPagination={true}
          showNavigation={true}
          autoPlay={false}
          renderItem={(trek) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={cn("card-premium card-premium-hover h-full flex flex-col")}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={trek.image}
                    alt={trek.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row gap-2 justify-between">
                    <Badge variant={trek.featured ? "premium" : "secondary"} className="text-xs">
                      {trek.featured ? "Popular" : "Available"}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {trek.bestSeason[0]}–{trek.bestSeason[trek.bestSeason.length - 1]}
                    </Badge>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{trek.region}</span>
                  </div>

                  <CardTitle className="text-xl mb-2 text-white group-hover:text-accent transition-colors line-clamp-1">
                    {trek.title}
                  </CardTitle>

                  <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-1">
                    {trek.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2.5 py-1 text-[0.65rem] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                      {trek.duration}
                    </span>
                    <span className="px-2.5 py-1 text-[0.65rem] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                      {trek.difficulty}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-5 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
                        <Mountain className="h-3 w-3" />
                        <span>Max Altitude</span>
                      </div>
                      <p className="font-medium text-sm text-white">{trek.maxAltitude}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
                        <Users className="h-3 w-3" />
                        <span>Group Size</span>
                      </div>
                      <p className="font-medium text-sm text-white">{trek.groupSize}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[0.65rem] text-white/40 mb-1">
                        <Calendar className="h-3 w-3" />
                        <span>Season</span>
                      </div>
                      <p className="font-medium text-sm text-white text-[0.7rem]">
                        {trek.bestSeason[0]}–{trek.bestSeason[trek.bestSeason.length - 1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div>
                      {trek.originalPrice && (
                        <p className="text-sm line-through text-white/30">₹{trek.originalPrice.toLocaleString()}</p>
                      )}
                      <p className="text-2xl font-bold text-accent">₹{trek.price.toLocaleString()}</p>
                      <p className="text-xs text-white/40">per person</p>
                    </div>
                    <Button
                      variant="primary"
                      className="w-auto px-6 py-3"
                      asChild
                    >
                      <a href={`/treks/${trek.slug}`}>
                        View Trek
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          )}
        />
      </div>
    </section>
  )
}