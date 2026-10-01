import { ProductGrid, ProductSkeletonGrid } from '@/components/native/Product'
import { Heading } from '@/components/native/heading'
import { Separator } from '@/components/native/separator'
import prisma from '@/lib/prisma'
import { isVariableValid } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Products',
   description:
      'The full prototype catalogue: bamboo laptop stands, recycled organizers, cork desk mats, cable management and desk lighting. Filter by brand, category or availability.',
   alternates: { canonical: '/products' },
}

import {
   AvailableToggle,
   BrandCombobox,
   CategoriesCombobox,
   SortBy,
} from './components/options'

export default async function Products({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   const sp = (await searchParams) ?? {}
   const first = (v: string | string[] | undefined) =>
      Array.isArray(v) ? v[0] : v
   const sort = first(sp.sort)
   const isAvailable = first(sp.isAvailable)
   const brand = first(sp.brand)
   const category = first(sp.category)
   const pageNum = Number(first(sp.page)) || 1

   const orderBy = getOrderBy(sort)

   const brands = await prisma.brand.findMany()
   const categories = await prisma.category.findMany()
   const products = await prisma.product.findMany({
      where: {
         isAvailable: isAvailable == 'true' ? true : undefined,
         brand: {
            title: {
               contains: brand,
               mode: 'insensitive',
            },
         },
         categories: {
            some: {
               title: {
                  contains: category,
                  mode: 'insensitive',
               },
            },
         },
      },
      orderBy,
      skip: (pageNum - 1) * 12,
      take: 12,
      include: {
         brand: true,
         categories: true,
      },
   })

   return (
      <>
         <Heading
            title="Products"
            description="The full prototype catalogue. Use the filters to narrow by brand, category or availability."
            level={1}
         />
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
            <SortBy initialData={sort} />
            <CategoriesCombobox
               initialCategory={category}
               categories={categories}
            />
            <BrandCombobox initialBrand={brand} brands={brands} />
            <AvailableToggle initialData={isAvailable} />
         </div>
         <Separator />
         {isVariableValid(products) ? (
            <ProductGrid products={products} />
         ) : (
            <ProductSkeletonGrid />
         )}
      </>
   )
}

function getOrderBy(sort) {
   let orderBy

   switch (sort) {
      case 'featured':
         orderBy = {
            orders: {
               _count: 'desc',
            },
         }
         break
      case 'most_expensive':
         orderBy = {
            price: 'desc',
         }
         break
      case 'least_expensive':
         orderBy = {
            price: 'asc',
         }
         break

      default:
         orderBy = {
            orders: {
               _count: 'desc',
            },
         }
         break
   }

   return orderBy
}
