import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/components/QueryProvider'
import { Toaster } from 'sonner'
import { LenisProvider } from '@/components/LenisProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'CloudWalk Ventures | Himalayan Treks & Adventure Experiences',
    template: '%s | CloudWalk Ventures',
  },
  description: 'CloudWalk Ventures offers premium trekking experiences across Uttarakhand, Himachal Pradesh, Kashmir, Spiti and Ladakh. Walk the Clouds. Summit the Skies.',
  keywords: [
    'Himalayan treks',
    'adventure tourism',
    'trekking India',
    'Uttarakhand treks',
    'Himachal treks',
    'Kashmir treks',
    'Spiti treks',
    'Ladakh treks',
    'guided trekking',
    'mountain expeditions',
    'CloudWalk Ventures',
  ],
  authors: [{ name: 'CloudWalk Ventures' }],
  creator: 'CloudWalk Ventures',
  publisher: 'CloudWalk Ventures',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudwalkventures.com',
    siteName: 'CloudWalk Ventures',
    title: 'CloudWalk Ventures | Himalayan Treks & Adventure Experiences',
    description: 'Walk the Clouds. Summit the Skies. Premium Himalayan trekking experiences with expert local guides.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1920,
        height: 1080,
        alt: 'CloudWalk Ventures - Himalayan Trekking Adventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudWalk Ventures | Himalayan Treks & Adventure Experiences',
    description: 'Walk the Clouds. Summit the Skies. Premium Himalayan trekking experiences with expert local guides.',
    images: ['/images/og-image.jpg'],
    creator: '@cloudwalkventures',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'theme-color': '#0A2744',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A2744',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable + ' ' + bebasNeue.variable + ' scroll-smooth'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://assets.zyrosite.com" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'CloudWalk Ventures',
              url: 'https://cloudwalkventures.com',
              logo: 'https://cloudwalkventures.com/images/logo.png',
              description: 'CloudWalk Ventures offers premium trekking experiences across Uttarakhand, Himachal Pradesh, Kashmir, Spiti and Ladakh.',
              telephone: '+91-9876543210',
              email: 'info@cloudwalkventures.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'CloudWalk Ventures',
                addressLocality: 'Dehradun',
                addressRegion: 'Uttarakhand',
                postalCode: '248001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.3165,
                longitude: 78.0322,
              },
              sameAs: [
                'https://instagram.com/cloudwalkventures',
                'https://youtube.com/@cloudwalkventures',
                'https://facebook.com/cloudwalkventures',
                'https://linkedin.com/company/cloudwalkventures',
              ],
              priceRange: '$$$',
              paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
              currenciesAccepted: 'INR, USD, EUR',
              areaServed: [
                'Uttarakhand',
                'Himachal Pradesh',
                'Jammu & Kashmir',
                'Ladakh',
                'Spiti Valley',
              ],
            }),
          }}
        />
        <QueryProvider>
          <LenisProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                className: 'bg-dark-900/95 backdrop-blur-xl border border-dark-700/50 text-white',
                duration: 5000,
                style: {
                  borderRadius: '1rem',
                  padding: '1rem 1.5rem',
                },
              }}
            />
          </LenisProvider>
        </QueryProvider>
      </body>
    </html>
  )
}