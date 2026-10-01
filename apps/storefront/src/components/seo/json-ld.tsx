export const SITE_URL =
   process.env.NEXT_PUBLIC_URL || 'https://seo-pro-ashishbaberwal.vercel.app'

type JsonValue =
   | string
   | number
   | boolean
   | null
   | JsonValue[]
   | { [key: string]: JsonValue }

export function JsonLd({ data }: { data: JsonValue }) {
   return (
      <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
   )
}

export function breadcrumbList(
   items: { name: string; path: string }[]
): JsonValue {
   return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
         '@type': 'ListItem',
         position: i + 1,
         name: item.name,
         item: `${SITE_URL}${item.path}`,
      })),
   }
}

export function organization(): JsonValue {
   return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Crawl-Smart Catalogue',
      url: SITE_URL,
      logo: `${SITE_URL}/opengraph-image`,
   }
}

export function webSite(): JsonValue {
   return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Crawl-Smart Catalogue',
      url: SITE_URL,
   }
}
