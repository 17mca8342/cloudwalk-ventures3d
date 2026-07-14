"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Calendar, Clock, ArrowRight, ExternalLink, MapPin, Heart, MessageCircle } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    slug: "essential-packing-list-himalayan-trek",
    title: "Essential Packing List for Your First Himalayan Trek",
    excerpt: "Don't let forgotten gear ruin your adventure. Our comprehensive guide covers everything from base layers to emergency essentials for treks across Uttarakhand and Himachal.",
    image: "/images/landing-2.jpg",
    author: {
      name: "Arjun Sharma",
      avatar: "/images/avatar-arjun.jpg",
      role: "Senior Trek Leader",
    },
    publishedAt: "2025-01-15",
    readTime: "8 min read",
    tags: ["Packing", "Beginners", "Essentials"],
    featured: true,
  },
  {
    id: "2",
    slug: "altitude-sickness-prevention-treatment",
    title: "Altitude Sickness: Prevention, Recognition & Treatment",
    excerpt: "AMS can affect anyone above 2,500m. Learn the early warning signs, prevention strategies, and what to do if symptoms develop during your Himalayan trek.",
    image: "/images/landing-4.jpg",
    author: {
      name: "Dr. Priya Mehta",
      avatar: "/images/avatar-priya.jpg",
      role: "Expedition Doctor",
    },
    publishedAt: "2025-01-08",
    readTime: "12 min read",
    tags: ["Health", "Safety", "High Altitude"],
    featured: false,
  },
  {
    id: "3",
    slug: "winter-trekking-guide-uttarakhand",
    title: "Complete Guide to Winter Trekking in Uttarakhand",
    excerpt: "Snow-covered trails, frozen lakes, and crystal-clear views. Discover the best winter treks, gear requirements, and safety tips for December through March.",
    image: "/images/landing-6.jpg",
    author: {
      name: "Vikram Singh",
      avatar: "/images/avatar-vikram.jpg",
      role: "Winter Trek Specialist",
    },
    publishedAt: "2025-01-01",
    readTime: "10 min read",
    tags: ["Winter", "Uttarakhand", "Snow Trekking"],
    featured: false,
  },
  {
    id: "4",
    slug: "best-himalayan-treks-beginners-2025",
    title: "7 Best Himalayan Treks for Beginners in 2025",
    excerpt: "New to trekking? We've curated the perfect starter treks with gentle gradients, stunning rewards, and expert support. Your Himalayan journey begins here.",
    image: "/images/landing-8.jpg",
    author: {
      name: "Neha Gupta",
      avatar: "/images/avatar-neha.jpg",
      role: "Trek Coordinator",
    },
    publishedAt: "2024-12-28",
    readTime: "7 min read",
    tags: ["Beginners", "Easy Treks", "2025"],
    featured: false,
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="relative section-padding overflow-hidden">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
              Mountain Wisdom
            </span>
            <h2 className="heading-2 mb-3">Latest from Our Blog</h2>
            <p className="body-lg text-white/60 max-w-xl">
              Expert tips, trek guides, and inspiring stories from the trails. Written by our certified trek leaders and mountain experts.
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <article className="group relative rounded-3xl overflow-hidden bg-white/5">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto min-h-[400px]">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                {/* Category Badge */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {blogPosts[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Author */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {blogPosts[0].author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{blogPosts[0].author.name}</p>
                    <p className="text-white/60 text-sm">{blogPosts[0].author.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h3 className="heading-2 mb-4 text-white group-hover:text-accent transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="body-lg text-white/60 mb-8">
                  {blogPosts[0].excerpt}
                </p>
                <a
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
                >
                  Read More
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        </motion.div>

        {/* Other Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[0.65rem] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="heading-4 mb-3 text-white group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="body-sm text-white/50 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{post.author.name}</p>
                      <p className="text-white/50 text-xs">{post.author.role}</p>
                    </div>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}