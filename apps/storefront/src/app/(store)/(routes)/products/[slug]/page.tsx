import Carousel from '@/components/native/Carousel'
import prisma from '@/lib/prisma'
import { ChevronRightIcon } from 'lucide-react'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { DataSection } from './components/data'

export const dynamicParams = false

type Props = {
   params: Promise<{ slug: string }>
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
   const products = await prisma.product.findMany({
      where: { slug: { not: null } },
      select: { slug: true },
   })
   return products
      .filter((p) => p.slug)
      .map((p) => ({ slug: p.slug as string }))
}

async function getProduct(slug: string) {
   // Legacy cuid URLs (/products/cmx...) are 308-redirected by src/proxy.ts,
   // so by the time we render here `slug` is always a real slug.
   return prisma.product.findUnique({
      where: { slug },
      include: { brand: true, categories: true },
   })
}

export async function generateMetadata(
   { params }: Props,
   parent: ResolvingMetadata
): Promise<Metadata> {
   const { slug } = await params
   // NOTE: no redirect here — redirect() is not supported in generateMetadata.
   // Legacy cuid URLs are handled by the page component below.
   const product = await prisma.product.findUnique({
      where: { slug },
   })

   if (!product) {
      return {
         title: 'Product not found',
      }
   }

   return {
      title: product.title,
      description: product.description ?? undefined,
      keywords: product.keywords,
      alternates: { canonical: `/products/${product.slug}` },
      openGraph: {
         images: product.images,
      },
   }
}

export default async function Product({ params }: Props) {
   const { slug } = await params
   const product = await getProduct(slug)

   if (!product) notFound()

   return (
      <>
         <Breadcrumbs product={product} />
         <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3">
            <ImageColumn product={product} />
            <DataSection product={product} />
         </div>
      </>
   )
}

const ImageColumn = ({ product }) => {
   return (
      <div className="relative min-h-[50vh] w-full col-span-1">
         <Carousel images={product?.images} />
      </div>
   )
}

const Breadcrumbs = ({ product }) => {
   return (
      <nav className="flex text-muted-foreground" aria-label="Breadcrumb">
         <ol className="inline-flex items-center gap-2">
            <li className="inline-flex items-center">
               <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium"
               >
                  Home
               </Link>
            </li>
            <li>
               <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-4" />
                  <Link className="text-sm font-medium" href="/products">
                     Products
                  </Link>
               </div>
            </li>
            <li aria-current="page">
               <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-4" />
                  <span className="text-sm font-medium">{product?.title}</span>
               </div>
            </li>
         </ol>
      </nav>
   )
}
