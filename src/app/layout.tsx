import './globals.css'
import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics'
import ClientOnly from '../components/ClientOnly'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bloghives.in'),
  title: {
    default: 'bloghives – Read, Learn, Explore',
    template: '%s | bloghives',
  },
  description:
    'bloghives is a minimal blog sharing thoughts on tech, travel, devotion, gaming, and more — all in a clean black & white theme.',
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
  authors: [{ name: 'bloghives Team' }],
  openGraph: {
    title: 'bloghives – Read, Learn, Explore',
    description:
      'Explore inspiring stories and blogs on tech, travel, and lifestyle with bloghives.',
    url: 'https://www.bloghives.in',
    siteName: 'bloghives',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'bloghives Blog OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bloghives – Read, Learn, Explore',
    description:
      'Discover minimal, inspiring blogs about tech, travel, and more on bloghives.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.bloghives.in',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },

    ]
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

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
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1975694576406901"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-1975694576406901" />

        {/* Google Analytics 4 - add only if NEXT_PUBLIC_GA_MEASUREMENT_ID is set */}
        {GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script
              // safe inline gtag configuration
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  // we will send page_view manually to avoid duplicate SPA hits
                  gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        <Navbar />
        <ClientOnly>
          {/* Analytics client component tracks route changes and fires page_view */}
          {GA_MEASUREMENT_ID && <Analytics />}
        </ClientOnly>
        <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
