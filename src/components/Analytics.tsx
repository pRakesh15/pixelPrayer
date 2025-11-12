'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: Array<Record<string, unknown>>
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
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_path: path,
        page_title: document.title,
      } as Record<string, unknown>)
    }
  }, [pathname, searchParams, measurementId])

  return null
}
