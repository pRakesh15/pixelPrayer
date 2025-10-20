import './globals.css'
import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // ✅ Replace from .env when deploying
  title: {
    default: 'PixelPrayer – Read, Learn, Explore',
    template: '%s | PixelPrayer',
  },
  description:
    'PixelPrayer is a minimal blog sharing thoughts on tech, travel, devotion, gaming, and more — all in a clean black & white theme.',
  keywords: [
    'blog',
    'travel',
    'nature',
    'devotion',
    'tech',
    'gaming',
    'lifestyle',
    'reading',
    'minimal blog',
  ],
  authors: [{ name: 'PixelPrayer Team' }],
  openGraph: {
    title: 'PixelPrayer – Read, Learn, Explore',
    description:
      'Explore inspiring stories and blogs on tech, travel, and lifestyle with PixelPrayer.',
    url: 'https://yourdomain.com',
    siteName: 'PixelPrayer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PixelPrayer Blog OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelPrayer – Read, Learn, Explore',
    description:
      'Discover minimal, inspiring blogs about tech, travel, and more on PixelPrayer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense (production only) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-ADSENSE-CLIENT-ID"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
