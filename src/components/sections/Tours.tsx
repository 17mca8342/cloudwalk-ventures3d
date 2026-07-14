"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const tours = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    description: "Journey to the foot of the world's highest peak through Sherpa villages and ancient monasteries.",
    duration: "14 Days",
    difficulty: "Challenging",
    altitude: "5,364m",
    price: "$2,899",
    image: "🏔️",
    highlights: ["Kala Patthar sunrise", "Tengboche Monastery", "Namche Bazaar", "Sagarmatha National Park"],
    featured: true,
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    description: "Circle the Annapurna massif through diverse landscapes from subtropical to arctic.",
    duration: "18 Days",
    difficulty: "Strenuous",
    altitude: "5,416m",
    price: "$3,299",
    image: "🏔️",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Valley", "Poon Hill sunrise"],
    featured: false,
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley Trek",
    description: "Explore the 'Valley of Glaciers' with stunning mountain views and rich Tamang culture.",
    duration: "10 Days",
    difficulty: "Moderate",
    altitude: "4,984m",
    price: "$1,799",
    image: "🏞️",
    highlights: ["Kyanjin Gompa", "Langtang Glacier", "Tserko Ri", "Local cheese factory"],
    featured: false,
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    description: "Remote trek around the 8th highest peak with authentic Tibetan culture.",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$2,599",
    image: "⛰️",
    highlights: ["Larkya La Pass", "Samagaon Village", "Pungyen Gompa", "Birendra Lake"],
    featured: false,
  },
  {
    id: "upper-mustang",
    title: "Upper Mustang Trek",
    description: "Discover the forbidden kingdom with its unique desert landscapes and ancient caves.",
    duration: "14 Days",
    difficulty: "Moderate",
    altitude: "4,200m",
    price: "$3,499",
    image: "🏜️",
    highlights: ["Lo Manthang", "Ancient caves", "Tibetan culture", "Muktinath"],
    featured: true,
  },
  {
    id: "ghorepani-poon-hill",
    title: "Ghorepani Poon Hill Trek",
    description: "Short and scenic trek perfect for beginners with iconic Himalayan sunrise views.",
    duration: "5 Days",
    difficulty: "Easy",
    altitude: "3,210m",
    price: "$899",
    image: "🌄",
    highlights: ["Poon Hill sunrise", "Rhododendron forests", "Gurung villages", "Annapurna views"],
    featured: false,
  },
]

export function Tours() {
  return (
    <section id="tours" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Adventures
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Curated Himalayan Expeditions
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked treks for every level. From gentle valleys to high-altitude challenges,
            each journey is crafted for unforgettable experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className={cn(
                "overflow-hidden transition-all duration-300 hover:shadow-xl",
                tour.featured && "ring-2 ring-primary/50"
              )}
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-6xl">
                {tour.image}
                {tour.featured && (
                  <Badge className="absolute top-3 left-3" variant="success">
                    Featured
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {tour.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{tour.duration}</span>
                </div>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{tour.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.slice(0, 2).map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Max Altitude</span>
                    <p className="font-medium">{tour.altitude}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <p className="text-xl font-bold text-primary">{tour.price}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`#contact?tours=${tour.id}`}>View Details</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">View All Adventures</a>
          </Button>
        </div>
      </div>
    </section>
  )
}