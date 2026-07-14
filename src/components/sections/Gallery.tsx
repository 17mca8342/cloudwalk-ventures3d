"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { getFeaturedTreks } from "@/data/treks"

const galleryImages = getFeaturedTreks().flatMap((trek) =>
  trek.gallery.map((url, index) => ({
    id: `${trek.id}-${index}`,
    url,
    alt: `${trek.title} - ${trek.highlights[index] || "Mountain view"}`,
    location: trek.title,
    category: (["landscape", "trekking", "camping", "wildlife", "culture", "summit"] as const)[
      index % 6
    ],
  }))
)

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "landscape" | "trekking" | "camping" | "wildlife" | "culture" | "summit"
  >("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const categories = [
    "all",
    "landscape",
    "trekking",
    "camping",
    "wildlife",
    "culture",
    "summit",
  ] as const

  const filteredImages = galleryImages.filter((img) => {
    const matchesCategory =
      selectedCategory === "all" || img.category === selectedCategory
    const matchesSearch =
      img.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.alt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    }
  }

  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    }
  }

  return (
    <section id="gallery" className="relative section-padding overflow-hidden">
      <div className="relative container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Moments Captured
          </Badge>
          <h2 className="heading-2 mb-4">Gallery of Adventures</h2>
          <p className="text-white/60 text-lg">
            Relive the magic through lenses of our cloudwalkers. Every frame tells a story of mountains conquered and bonds
            forged.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search locations, treks, moments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder:text-white/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                )}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-white/60">
            Showing <span className="font-semibold text-white">{filteredImages.length}</span> of{" "}
            {galleryImages.length} moments
          </p>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "primary" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-5 h-5" />
            </Button>
            <Button
              variant={viewMode === "masonry" ? "primary" : "outline"}
              size="sm"
              onClick={() => setViewMode("masonry")}
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "grid gap-4",
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
          role="list"
          aria-label="Gallery images"
        >
          {filteredImages.map((img, index) => (
            <article
              key={img.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer transition-transform hover:scale-[1.02]"
              role="listitem"
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{img.location}</p>
                      <p className="text-white/70 text-sm">{img.category}</p>
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3" variant="default">
                  {img.category}
                </Badge>
              </div>
            </article>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <p className="text-white/60">No images found matching your criteria</p>
          </div>
        )}

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image fullscreen view"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Previous image"
              disabled={lightboxIndex === 0}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Next image"
              disabled={lightboxIndex === filteredImages.length - 1}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative max-w-5xl max-h-[85vh] w-full px-4" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-14 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-semibold mb-1">{filteredImages[lightboxIndex].location}</h3>
                <p className="text-white/70">{filteredImages[lightboxIndex].alt}</p>
                <Badge className="inline-block mt-2" variant="default">
                  {filteredImages[lightboxIndex].category}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}