'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!measurementId) return

    const path = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: path,
        page_title: document.title,
      })
    } else {
      // fallback push into dataLayer (gtag will read this when loaded)
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_path: path,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams, measurementId])

  return null
}
