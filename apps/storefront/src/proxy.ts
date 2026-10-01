import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Prisma cuid() ids look like "cmuoj1oev0009gw4876ccok2o": a leading "c"
// followed by 24 lowercase alphanumerics. Slugs always contain dashes,
// so this pattern only matches legacy id-based product URLs.
const LEGACY_PRODUCT_ID = /^c[a-z0-9]{24}$/

export async function proxy(request: NextRequest) {
   const segments = request.nextUrl.pathname.split('/').filter(Boolean)

   // Only single-segment /products/<id> URLs are candidates
   if (segments.length !== 2 || segments[0] !== 'products') {
      return NextResponse.next()
   }

   const id = segments[1]
   if (!LEGACY_PRODUCT_ID.test(id)) return NextResponse.next()

   try {
      const res = await fetch(
         new URL(`/api/products/${id}`, request.url),
         { cache: 'no-store' }
      )
      if (!res.ok) return NextResponse.next()
      const product = (await res.json()) as { slug?: string | null }
      if (!product?.slug) return NextResponse.next()
      return NextResponse.redirect(
         new URL(`/products/${product.slug}`, request.url),
         { status: 308 }
      )
   } catch {
      return NextResponse.next()
   }
}

export const config = {
   matcher: '/products/:path*',
}
