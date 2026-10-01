import {
   BlogPostCard,
   BlogPostGrid,
   BlogPostSkeletonGrid,
} from '@/components/native/BlogCard'
import Carousel from '@/components/native/Carousel'
import { ProductGrid, ProductSkeletonGrid } from '@/components/native/Product'
import { Heading } from '@/components/native/heading'
import { Separator } from '@/components/native/separator'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma'
import { isVariableValid } from '@/lib/utils'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
   alternates: { canonical: '/' },
}

export default async function Index() {
   const featured = await prisma.product.findMany({
      where: { isFeatured: true, isAvailable: true },
      include: { brand: true, categories: true },
      take: 4,
   })

   const categories = await prisma.category.findMany({
      include: { _count: { select: { products: true } } },
      orderBy: { title: 'asc' },
   })

   const blogs = await prisma.blog.findMany({
      include: { author: true },
      take: 3,
      orderBy: { createdAt: 'desc' },
   })

   const banners = await prisma.banner.findMany()

   return (
      <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
         {banners.length > 0 && (
            <Carousel images={banners.map((obj) => obj.image)} />
         )}
         <div className="my-8 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight">
               Sustainable desk accessories for small spaces
            </h1>
            <p className="mt-3 text-muted-foreground">
               Crawl-Smart Catalogue is a class prototype showcasing bamboo
               laptop stands, recycled organizers, cork desk mats and low-waste
               cable and lighting accessories for hostel and home desks.
               Browsing only — transactions are disabled and all content is
               fictional demo data.
            </p>
         </div>
         <Separator className="mb-8" />
         <Heading
            title="Shop by category"
            description="Five sections, each targeting one search intent."
         />
         <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3">
            {categories
               .filter((c) => c.slug)
               .map((category) => (
                  <Link key={category.slug} href={`/categories/${category.slug}`}>
                     <Card className="h-full hover:border-foreground/40 transition">
                        <CardHeader>
                           <CardTitle>{category.title}</CardTitle>
                           <CardDescription className="line-clamp-2">
                              {category.description}
                           </CardDescription>
                        </CardHeader>
                     </Card>
                  </Link>
               ))}
         </div>
         <Separator className="my-8" />
         <Heading
            title="Featured products"
            description="Hand-picked prototype entries from each section."
         />
         {isVariableValid(featured) && featured.length ? (
            <ProductGrid products={featured} />
         ) : (
            <ProductSkeletonGrid />
         )}
         <Separator className="my-8" />
         <Heading
            title="Guides"
            description="Short, honest buying guidance for small-desk setups."
         />
         {isVariableValid(blogs) && blogs.length ? (
            <BlogPostGrid blogs={blogs} />
         ) : (
            <BlogPostSkeletonGrid />
         )}
      </div>
   )
}
