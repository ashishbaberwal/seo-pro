import { ThemeProvider } from '@/providers/theme-provider'
import { JsonLd, organization, webSite } from '@/components/seo/json-ld'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata = {
   metadataBase: new URL('https://seo-pro-ashishbaberwal.vercel.app/'),
   ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
      : {}),
   title: {
      default: 'Crawl-Smart Catalogue | Sustainable Desk Accessories (Class Prototype)',
      template: '%s | Crawl-Smart Catalogue',
   },
   description:
      'Browse a class-prototype catalogue of sustainable desk accessories for small hostel and home desks: bamboo laptop stands, recycled paper organizers, cork desk mats, cable and lighting accessories. Transactions disabled.',
   keywords: [
      'bamboo laptop stand',
      'recycled desk organizer',
      'cork desk mat',
      'cable management',
      'sustainable desk accessories',
   ],
   authors: [{ name: 'Crawl-Smart Team' }],
   creator: 'Crawl-Smart Team',
   publisher: 'Crawl-Smart Team',
}

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body>
            <JsonLd data={organization()} />
            <JsonLd data={webSite()} />
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               {children}
               <Analytics />
               <SpeedInsights />
               {process.env.NEXT_PUBLIC_GA_ID ? (
                  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
               ) : null}
            </ThemeProvider>
         </body>
      </html>
   )
}
