"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps<T> {
  items: T[]
  itemsPerView?: number
  showPagination?: boolean
  showNavigation?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  renderItem: (item: T, index: number) => React.ReactNode
  className?: string
  loop?: boolean
  align?: "start" | "center" | "end"
}

export function Carousel<T>({
  items,
  itemsPerView = 3,
  showPagination = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  renderItem,
  className,
  loop = true,
  align = "start",
}: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align,
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    watchDrag: true,
    watchSlides: true,
    watchResize: true,
  })

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [scrollProgress, setScrollProgress] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    const onScroll = () => setScrollProgress(emblaApi.scrollProgress())
    const onResize = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("init", onInit)
    emblaApi.on("select", onSelect)
    emblaApi.on("scroll", onScroll)
    emblaApi.on("resize", onResize)

    onInit()

    return () => {
      emblaApi.off("init", onInit)
      emblaApi.off("select", onSelect)
      emblaApi.off("scroll", onScroll)
      emblaApi.off("resize", onResize)
    }
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi || !autoPlay) return
    const interval = setInterval(() => {
      if (emblaApi.scrollSnapList().length > 1) {
        emblaApi.scrollNext()
      }
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [emblaApi, autoPlay, autoPlayInterval])

  const totalPages = scrollSnaps.length
  const visibleItems = items.slice(
    selectedIndex * itemsPerView,
    (selectedIndex + 1) * itemsPerView
  )

  return (
    <div className={cn("relative", className)} ref={emblaRef}>
      <div className="overflow-hidden">
        <div className="flex" style={{ transform: `translate3d(${-scrollProgress * 100}%, 0, 0)` }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {showNavigation && totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300"
            onClick={scrollPrev}
            disabled={!loop && selectedIndex === 0}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {showPagination && (
            <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pages">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    i === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-white/20 hover:bg-white/30"
                  )}
                />
              ))}
            </div>
          )}

          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300"
            onClick={scrollNext}
            disabled={!loop && selectedIndex === totalPages - 1}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  )
}