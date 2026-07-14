"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"

const instagramPosts = [
  { id: "1", image: "/images/landing-1.jpg", likes: 1243, comments: 89, location: "Kedarkantha Summit" },
  { id: "2", image: "/images/landing-2.jpg", likes: 987, comments: 67, location: "Valley of Flowers" },
  { id: "3", image: "/images/landing-3.jpg", likes: 1567, comments: 123, location: "Hampta Pass" },
  { id: "4", image: "/images/landing-4.jpg", likes: 2103, comments: 187, location: "Brahmatal Lake" },
  { id: "5", image: "/images/landing-5.jpg", likes: 876, comments: 54, location: "Roopkund Mystery Lake" },
  { id: "6", image: "/images/landing-6.jpg", likes: 1432, comments: 98, location: "Dayara Bugyal Meadows" },
  { id: "7", image: "/images/landing-7.jpg", likes: 1987, comments: 156, location: "Chandrashila Summit" },
  { id: "8", image: "/images/landing-8.jpg", likes: 1123, comments: 78, location: "Kareri Lake Camp" },
  { id: "9", image: "/images/landing-9.jpg", likes: 1654, comments: 112, location: "Pin Parvati Pass" },
  { id: "10", image: "/images/landing-10.jpg", likes: 789, comments: 45, location: "Triund Sunset" },
  { id: "11", image: "/images/landing-11.jpg", likes: 2341, comments: 234, location: "Tosh Valley" },
  { id: "12", image: "/images/landing-12.jpg", likes: 945, comments: 67, location: "Har Ki Dun Valley" },
]

export function InstagramFeed() {
  return (
    <section id="instagram" className="relative section-padding overflow-hidden">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="h-8 w-8 text-gradient" />
            <Badge variant="secondary" className="text-sm">
              @cloudwalkventures
            </Badge>
          </div>
          <h2 className="heading-display mb-6">
            Follow Our
            <br />
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="mx-auto max-w-3xl body-lg text-white/60">
            Real moments from real treks. Tag #cloudwalkventures for a chance to be featured.
          </p>
        </motion.div>

        {/* Instagram Grid - Pinterest Layout */}
        <div className="grid gap-3">
          {/* Row 1: 2-1-2 */}
          <div className="grid grid-cols-2 gap-3">
            <InstagramPost post={instagramPosts[0]} index={0} size="large" />
            <InstagramPost post={instagramPosts[1]} index={1} size="large" />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <InstagramPost post={instagramPosts[2]} index={2} size="full" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InstagramPost post={instagramPosts[3]} index={3} size="large" />
            <InstagramPost post={instagramPosts[4]} index={4} size="large" />
          </div>

          {/* Row 2: 1-2-1 */}
          <div className="grid grid-cols-1 gap-3">
            <InstagramPost post={instagramPosts[5]} index={5} size="full" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InstagramPost post={instagramPosts[6]} index={6} size="large" />
            <InstagramPost post={instagramPosts[7]} index={7} size="large" />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <InstagramPost post={instagramPosts[8]} index={8} size="full" />
          </div>

          {/* Row 3: 2-1-2 */}
          <div className="grid grid-cols-2 gap-3">
            <InstagramPost post={instagramPosts[9]} index={9} size="large" />
            <InstagramPost post={instagramPosts[10]} index={10} size="large" />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <InstagramPost post={instagramPosts[11]} index={11} size="full" />
          </div>
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/cloudwalkventures"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Instagram className="h-5 w-5" />
            Follow @cloudwalkventures
            <ExternalLink className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function InstagramPost({ post, index, size }: { post: typeof instagramPosts[0]; index: number; size: "large" | "full" }) {
  const aspectRatio = size === "large" ? "aspect-[4/5]" : "aspect-[16/9]"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "relative group overflow-hidden rounded-2xl bg-white/5 cursor-pointer",
        aspectRatio
      )}
    >
      <Image
        src={post.image}
        alt={`Instagram post from ${post.location}`}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
        sizes={size === "large" ? "(max-width: 768px) 50vw, 25vw" : "(max-width: 768px) 100vw, 50vw"}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Stats */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-4 text-white">
          <span className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 fill-current text-red-400" />
            {post.likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4" />
            {post.comments}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs font-medium text-white">
            {post.location}
          </span>
        </div>
      </div>
      {/* View on Instagram */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        <a
          href="https://instagram.com/cloudwalkventures"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}