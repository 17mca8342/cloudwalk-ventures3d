"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Search, X, ChevronLeft, ChevronRight, Maximize2, Download } from "lucide-react"
import { useState } from "react"

const galleryImages = [
  { src: "/images/gallery/kedarkantha-summit.jpg", alt: "Kedarkantha summit sunrise", category: "Summit" },
  { src: "/images/gallery/juda-talab-frozen.jpg", alt: "Frozen Juda ka Talab", category: "Lake" },
  { src: "/images/gallery/pine-forest-trail.jpg", alt: "Pine forest trail", category: "Forest" },
  { src: "/images/gallery/base-camp-meadow.jpg", alt: "Base camp meadow", category: "Camp" },
  { src: "/images/gallery/swargarohini-view.jpg", alt: "Swargarohini range view", category: "Views" },
  { src: "/images/gallery/camping-night.jpg", alt: "Night camping under stars", category: "Camp" },
  { src: "/images/gallery/rhododendron-bloom.jpg", alt: "Rhododendron in bloom", category: "Flora" },
  { src: "/images/gallery/summit-group.jpg", alt: "Group at summit", category: "People" },
  { src: "/images/gallery/sankri-village.jpg", alt: "Sankri village", category: "Culture" },
  { src: "/images/gallery/milky-way.jpg", alt: "Milky Way over camp", category: "Night" },
  { src: "/images/gallery/sunrise-panorama.jpg", alt: "Sunrise panorama", category: "Views" },
  { src: "/images/gallery/trail-morning.jpg", alt: "Morning trail mist", category: "Forest" },
]

const categories = ["All", "Summit", "Lake", "Forest", "Camp", "Views", "Flora", "People", "Culture", "Night"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    const actualIndex = galleryImages.findIndex(img => img.src === filteredImages[index].src)
    setLightboxIndex(actualIndex)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < galleryImages.length - 1) {
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
      <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden="true" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
            Photo Gallery
          </span>
          <h2 className="heading-display mb-6">
            Moments from the
            <br />
            <span className="gradient-text">Trail</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Real moments captured by our trekkers — every frame tells a story of adventure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === cat
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
          }}
          role="list"
          aria-label="Gallery images"
        >
          {filteredImages.map((image, index) => (
            <motion.article
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              role="listitem"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{image.alt}</p>
                    <span className="px-2 py-0.5 text-xs bg-white/20 backdrop-blur-sm rounded-full text-white/80">
                      {image.category}
                    </span>
                  </div>
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <p className="text-white/60">No images found for this category</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <Download className="h-5 w-5" />
            Download Full Gallery (2.4 GB)
          </button>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image fullscreen view"
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Previous image"
            disabled={lightboxIndex === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Next image"
            disabled={lightboxIndex === galleryImages.length - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-6xl max-h-[85vh] w-full px-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute -bottom-14 left-0 right-0 text-center text-white">
              <h3 className="text-xl font-semibold mb-1">{galleryImages[lightboxIndex].alt}</h3>
              <p className="text-white/70">{galleryImages[lightboxIndex].category}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}