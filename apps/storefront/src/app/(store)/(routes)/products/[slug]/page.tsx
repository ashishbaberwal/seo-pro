import Carousel from '@/components/native/Carousel'
import prisma from '@/lib/prisma'
import { ChevronRightIcon } from 'lucide-react'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'

import { DataSection } from './components/data'

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
   const product = await prisma.product.findUnique({
      where: { slug },
      include: { brand: true, categories: true },
   })
   if (product) return product

   // Legacy cuid URLs (/products/cmx...) permanently redirect to the slug URL
   const legacy = await prisma.product.findUnique({
      where: { id: slug },
      select: { slug: true },
   })
   if (legacy?.slug) permanentRedirect(`/products/${legacy.slug}`)
   return null
}

export async function generateMetadata(
   { params }: Props,
   parent: ResolvingMetadata
): Promise<Metadata> {
   const { slug } = await params
   const product = await getProduct(slug)

   if (!product) {
      return {
         title: 'Product not found',
      }
   }

   return {
      title: product.title,
      description: product.description ?? undefined,
      keywords: product.keywords,
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
