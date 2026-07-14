import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { AdventureCategories } from '@/components/sections/AdventureCategories'
import { UpcomingTreksCarousel } from '@/components/sections/UpcomingTreksCarousel'
import { RegionTrekRows } from '@/components/sections/RegionTrekRows'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Destinations } from '@/components/sections/Destinations'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { Testimonials } from '@/components/sections/Testimonials'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <AdventureCategories />
        <UpcomingTreksCarousel />
        <RegionTrekRows region="Uttarakhand" />
        <RegionTrekRows region="Himachal Pradesh" />
        <WhyChooseUs />
        <Destinations />
        <InstagramFeed />
        <Testimonials />
        <BlogPreview />
        <FAQAccordion />
        <Contact />
      </main>
      <Footer />
    </>
  )
}