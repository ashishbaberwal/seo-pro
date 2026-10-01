import { ProductGrid } from '@/components/native/Product'
import { Heading } from '@/components/native/heading'
import { Separator } from '@/components/native/separator'
import prisma from '@/lib/prisma'
import { ChevronRightIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
   const categories = await prisma.category.findMany({
      where: { slug: { not: null } },
      select: { slug: true },
   })
   return categories
      .filter((c) => c.slug)
      .map((c) => ({ slug: c.slug as string }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params
   const category = await prisma.category.findUnique({
      where: { slug },
   })

   if (!category) return { title: 'Category not found' }

   return {
      title: category.title,
      description: category.description ?? undefined,
      alternates: { canonical: `/categories/${category.slug}` },
   }
}

export default async function CategoryPage({ params }: Props) {
   const { slug } = await params
   const category = await prisma.category.findUnique({
      where: { slug },
      include: {
         products: {
            where: { isAvailable: true },
            include: { brand: true, categories: true },
         },
      },
   })

   if (!category) notFound()

   return (
      <>
         <nav className="flex text-muted-foreground" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2">
               <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium">
                     Home
                  </Link>
               </li>
               <li>
                  <div className="flex items-center gap-2">
                     <ChevronRightIcon className="h-4" />
                     <Link className="text-sm font-medium" href="/categories">
                        Categories
                     </Link>
                  </div>
               </li>
               <li aria-current="page">
                  <div className="flex items-center gap-2">
                     <ChevronRightIcon className="h-4" />
                     <span className="text-sm font-medium">{category.title}</span>
                  </div>
               </li>
            </ol>
         </nav>
         <Heading title={category.title} description={category.description ?? ''} />
         <Separator className="my-4" />
         {category.products.length ? (
            <ProductGrid products={category.products} />
         ) : (
            <p className="text-sm text-muted-foreground">
               No prototype products in this section yet.
            </p>
         )}
      </>
   )
}
