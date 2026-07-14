import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTrekBySlug, getTreksByRegion, Trek } from '@/data/treks'
import { Navigation } from '@/components/sections/Navigation'
import { PackageHero } from '@/components/sections/trek-package/PackageHero'
import { OverviewSection } from '@/components/sections/trek-package/OverviewSection'
import { HighlightsGrid } from '@/components/sections/trek-package/HighlightsGrid'
import { JourneyTimeline } from '@/components/sections/trek-package/JourneyTimeline'
import { GallerySection } from '@/components/sections/trek-package/GallerySection'
import { InfoCards } from '@/components/sections/trek-package/InfoCards'
import { IncludedExcluded } from '@/components/sections/trek-package/IncludedExcluded'
import { PackingChecklist } from '@/components/sections/trek-package/PackingChecklist'
import { RouteMap } from '@/components/sections/trek-package/RouteMap'
import { DepartureTable } from '@/components/sections/trek-package/DepartureTable'
import { TestimonialsSection } from '@/components/sections/trek-package/TestimonialsSection'
import { FAQAccordion } from '@/components/sections/trek-package/FAQAccordion'
import { RelatedTreks } from '@/components/sections/trek-package/RelatedTreks'
import { BookingCTA } from '@/components/sections/trek-package/BookingCTA'
import { Footer } from '@/components/sections/Footer'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const trek = getTrekBySlug(slug)

  if (!trek) {
    return {
      title: 'Trek Not Found | CloudWalk Ventures',
    }
  }

  const baseUrl = 'https://cloudwalkventures.com'
  const pageUrl = `${baseUrl}/treks/${slug}`

  return {
    title: `${trek.title} | CloudWalk Ventures`,
    description: trek.description,
    keywords: [
      trek.title,
      trek.region,
      trek.state,
      'Himalayan trek',
      'winter trek',
      'guided trekking',
      'CloudWalk Ventures',
      trek.difficulty,
    ],
    authors: [{ name: 'CloudWalk Ventures' }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      title: `${trek.title} | CloudWalk Ventures`,
      description: trek.description,
      siteName: 'CloudWalk Ventures',
      images: [
        {
          url: `${baseUrl}${trek.image}`,
          width: 1200,
          height: 630,
          alt: `${trek.title} - Himalayan Trekking Adventure`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${trek.title} | CloudWalk Ventures`,
      description: trek.description,
      images: [`${baseUrl}${trek.image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'theme-color': '#0A2744',
    },
  }
}

function generateStructuredData(trek: Trek) {
  const baseUrl = 'https://cloudwalkventures.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: trek.title,
    description: trek.description,
    image: `${baseUrl}${trek.image}`,
    url: `${baseUrl}/treks/${trek.slug}`,
    tourProvider: {
      '@type': 'Organization',
      name: 'CloudWalk Ventures',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      telephone: '+91-9876543210',
      email: 'info@cloudwalkventures.com',
    },
    offers: {
      '@type': 'Offer',
      name: trek.title,
      price: trek.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Arrival at Sankri',
          description: 'Drive from Dehradun to Sankri (210 km, 8-9 hrs)',
          url: `${baseUrl}/treks/${trek.slug}#day-1`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sankri to Juda ka Talab',
          description: 'Trek through pine forests to frozen lake (4 km, 3-4 hrs)',
          url: `${baseUrl}/treks/${trek.slug}#day-2`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Juda ka Talab to Kedarkantha Base',
          description: 'Steeper climb to base camp meadow (3 km, 3-4 hrs)',
          url: `${baseUrl}/treks/${trek.slug}#day-3`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Summit Day - Kedarkantha Peak',
          description: 'Pre-dawn ascent to 3,810m summit for sunrise (6 km, 6-7 hrs)',
          url: `${baseUrl}/treks/${trek.slug}#day-4`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Base Camp to Sankri - Departure',
          description: 'Descend through forests to Sankri, drive to Dehradun',
          url: `${baseUrl}/treks/${trek.slug}#day-5`,
        },
      ],
    },
    includes: [
      'Certified Trek Leader (NIM/HMI Certified)',
      'Local Guide with 10+ years experience',
      'All accommodation (tents + guesthouse)',
      'All meals (vegetarian, nutritious)',
      'Dehradun-Sankri-Dehradun transport',
      'Forest permits & entry fees',
      'Safety equipment (oxygen, medical kit, sat phone)',
      'Trek completion certificate',
    ],
    excludes: [
      'Travel insurance (mandatory)',
      'Personal gear & equipment',
      'Personal porter (₹350/day)',
      'Backpack offloading (₹300/day)',
      'Alcohol & personal snacks',
      'Emergency evacuation costs',
    ],
    duration: 'P5D',
    difficulty: trek.difficulty,
    maxAltitude: trek.maxAltitude,
    bestSeason: trek.bestSeason.join(', '),
    groupSize: trek.groupSize,
    startLocation: 'Dehradun, Uttarakhand',
    endLocation: 'Dehradun, Uttarakhand',
  }
}

export default async function TrekPackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trek = getTrekBySlug(slug)

  if (!trek) {
    notFound()
  }

  const relatedTreks = getTreksByRegion(trek.region).filter(t => t.slug !== trek.slug).slice(0, 4)

  const structuredData = generateStructuredData(trek)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />

      <main className="min-h-screen">
        <PackageHero trek={trek} />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Treks', href: '/treks' },
            { label: trek.title, href: `/treks/${trek.slug}`, current: true },
          ]}
        />

        <OverviewSection trek={trek} />
        <HighlightsGrid />
        <JourneyTimeline />
        <GallerySection />
        <InfoCards />
        <IncludedExcluded />
        <PackingChecklist />
        <RouteMap />
        <DepartureTable />
        <TestimonialsSection />
        <FAQAccordion />
        <RelatedTreks relatedTreks={relatedTreks} />
        <BookingCTA />
      </main>

      <Footer />
    </>
  )
}