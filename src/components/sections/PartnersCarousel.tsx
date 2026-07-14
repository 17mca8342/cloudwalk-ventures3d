"use client"

import { Carousel } from "@/components/ui/Carousel"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const partners = [
  { id: "iim-ahmedabad", name: "IIM Ahmedabad", category: "Education" },
  { id: "iit-delhi", name: "IIT Delhi", category: "Education" },
  { id: "iit-bombay", name: "IIT Bombay", category: "Education" },
  { id: "bits-pilani", name: "BITS Pilani", category: "Education" },
  { id: "google", name: "Google India", category: "Corporate" },
  { id: "microsoft", name: "Microsoft", category: "Corporate" },
  { id: "amazon", name: "Amazon", category: "Corporate" },
  { id: "flipkart", name: "Flipkart", category: "Corporate" },
  { id: "zomato", name: "Zomato", category: "Corporate" },
  { id: "cred", name: "CRED", category: "Startup" },
  { id: "razorpay", name: "Razorpay", category: "Startup" },
  { id: "unacademy", name: "Unacademy", category: "EdTech" },
  { id: "atlas-copco", name: "Atlas Copco", category: "Manufacturing" },
  { id: "bosch", name: "Bosch", category: "Manufacturing" },
  { id: "mahindra", name: "Mahindra Group", category: "Conglomerate" },
  { id: "tata", name: "Tata Motors", category: "Conglomerate" },
  { id: "adobe", name: "Adobe", category: "Tech" },
  { id: "salesforce", name: "Salesforce", category: "Tech" },
]

const categoryColors: Record<string, string> = {
  Education: "bg-blue-100 text-blue-700",
  Corporate: "bg-purple-100 text-purple-700",
  Startup: "bg-green-100 text-green-700",
  EdTech: "bg-indigo-100 text-indigo-700",
  Manufacturing: "bg-orange-100 text-orange-700",
  Conglomerate: "bg-red-100 text-red-700",
  Tech: "bg-cyan-100 text-cyan-700",
}

export function PartnersCarousel() {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4 inline-block">
            Proudly Collaborated & Recognized
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground text-lg">
            From premier institutes to global corporations — 200+ organizations have chosen Cloudwalk
            for their outdoor experiences.
          </p>
        </div>

        <Carousel
          items={partners}
          itemsPerView={5}
          showPagination={true}
          showNavigation={true}
          autoPlay={true}
          autoPlayInterval={4000}
          renderItem={(partner) => (
            <Card
              className={cn(
                "h-full transition-all duration-300 hover:shadow-lg",
                "border-border/50 hover:border-primary/30",
                "flex flex-col items-center justify-center p-6 min-h-[140px]"
              )}
            >
              <CardContent className="flex flex-col items-center justify-center w-full">
                <div className="w-28 h-28 flex items-center justify-center mb-3 bg-muted/50 rounded-xl">
                  <span className="text-3xl font-bold text-primary">{partner.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-center text-lg">{partner.name}</h4>
                <Badge
                  variant="secondary"
                  className={cn("mt-2 text-xs", categoryColors[partner.category] || "bg-muted text-muted-foreground")}
                >
                  {partner.category}
                </Badge>
              </CardContent>
            </Card>
          )}
        />
      </div>
    </section>
  )
}