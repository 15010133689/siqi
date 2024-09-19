'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
    useReportWebVitals((metric) => {
        //Time to First Byte (TTFB)
        // First Contentful Paint (FCP)
        // Largest Contentful Paint (LCP)
        // First Input Delay (FID)
        // Cumulative Layout Shift (CLS)
        // Interaction to Next Paint (INP)
        const body = JSON.stringify(metric)
        switch (metric.name) {
            case 'FCP': {
                console.log('FCP:'+body)
            }
            case 'LCP': {
                console.log('LCP:'+body)
            }
        }
    })
}