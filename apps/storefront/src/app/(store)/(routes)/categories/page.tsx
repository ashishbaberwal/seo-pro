import { Heading } from '@/components/native/heading'
import { Separator } from '@/components/native/separator'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
   title: 'Categories',
   description:
      'Browse sustainable desk accessory categories: bamboo laptop stands, recycled organizers, cork desk mats, cable management and desk lighting.',
   alternates: { canonical: '/categories' },
}

export default async function Categories() {
   const categories = await prisma.category.findMany({
      include: { _count: { select: { products: true } } },
      orderBy: { title: 'asc' },
   })

   return (
      <>
         <Heading
            title="Categories"
            description="Five catalogue sections, one per search intent. Pick a section to see its products."
            level={1}
         />
         <Separator className="my-4" />
         <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3">
            {categories
               .filter((c) => c.slug)
               .map((category) => (
                  <Link key={category.slug} href={`/categories/${category.slug}`}>
                     <Card className="h-full hover:border-foreground/40 transition">
                        <CardHeader>
                           <CardTitle>{category.title}</CardTitle>
                           <CardDescription className="line-clamp-3">
                              {category.description}
                           </CardDescription>
                           <p className="pt-2 text-xs text-muted-foreground">
                              {category._count.products} prototype product
                              {category._count.products === 1 ? '' : 's'}
                           </p>
                        </CardHeader>
                     </Card>
                  </Link>
               ))}
         </div>
      </>
   )
}
