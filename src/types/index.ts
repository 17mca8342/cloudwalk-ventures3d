export interface Trek {
  id: string
  slug: string
  title: string
  description: string
  region: "Uttarakhand" | "Himachal Pradesh" | "Jammu & Kashmir" | "Ladakh" | "Spiti Valley"
  state: string
  duration: string
  difficulty: "Easy" | "Easy-Moderate" | "Moderate" | "Moderate-Challenging" | "Challenging" | "Strenuous"
  maxAltitude: string
  price: number
  originalPrice?: number
  image: string
  emoji: string
  highlights: string[]
  featured: boolean
  upcoming: boolean
  startDates: string[]
  groupSize: string
  bestSeason: string[]
  gallery: string[]
  latitude: number
  longitude: number
  difficultyColor: string
  difficultyBg: string
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  location: string
  category: "landscape" | "trekking" | "camping" | "wildlife" | "culture" | "summit"
}

export interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  content: string
  trek: string
  date: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  trekInterest?: string
  groupSize?: string
  preferredDate?: string
}

export interface NewsletterData {
  email: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface SocialLink {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Destination {
  id: string
  name: string
  slug: string
  image: string
  altitude: string
  bestTime: string
  trekCount: number
  description: string
  region: string
  coordinates: [number, number]
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export interface Stat {
  label: string
  value: string | number
  suffix?: string
  prefix?: string
}