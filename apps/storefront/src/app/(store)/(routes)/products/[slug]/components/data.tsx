import { Separator } from '@/components/native/separator'
import { Badge } from '@/components/ui/badge'
import type { ProductWithIncludes } from '@/types/prisma'
import Link from 'next/link'

export const DataSection = async ({
   product,
}: {
   product: ProductWithIncludes
}) => {
   function Price() {
      if (product?.discount > 0) {
         const price = product?.price - product?.discount
         const percentage = (product?.discount / product?.price) * 100
         return (
            <div className="flex gap-2 items-center">
               <Badge className="flex gap-4" variant="destructive">
                  <p className="line-through">₹{product?.price}</p>
                  <div>{percentage.toFixed(0)}% off</div>
               </Badge>
                <p className="">₹{price.toFixed(0)}</p>
             </div>
          )
       }

       return <p>₹{product?.price}</p>
   }

   const specs: Record<string, string> =
      (product?.metadata as Record<string, string> | null) ?? {}

   return (
      <div className="col-span-2 w-full rounded-lg bg-neutral-100 p-6 dark:bg-neutral-900">
         <h1 className="mb-4 text-xl font-medium">{product.title}</h1>
         <Separator />
         <div className="flex gap-2 mb-2 items-center">
            <p className="text-sm">Brand:</p>
            <Link href={`/products?brand=${product?.brand?.title}`}>
               <Badge variant="outline">{product?.brand?.title}</Badge>
            </Link>
         </div>
         <div className="flex gap-2 items-center flex-wrap">
            <p className="text-sm">Categories:</p>
            {product.categories.map(({ title, slug }) => (
               <Link
                  key={slug ?? title}
                  href={slug ? `/categories/${slug}` : `/products?category=${title}`}
               >
                  <Badge variant="outline">{title}</Badge>
               </Link>
            ))}
         </div>
         <Separator />
         <small>{product.description}</small>
         {Object.keys(specs).length > 0 && (
            <>
               <Separator />
               <h4 className="mb-2 text-sm font-medium">Specifications</h4>
               <dl className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
                  {Object.entries(specs).map(([key, value]) => (
                     <div key={key} className="flex gap-2">
                        <dt className="capitalize text-muted-foreground">{key}:</dt>
                        <dd>{value}</dd>
                     </div>
                  ))}
               </dl>
            </>
         )}
         <Separator />
         <div className="block space-y-2">
            <Price />
            <p className="text-xs text-muted-foreground">
               {product.stock > 0
                  ? `In stock (demo: ${product.stock} units).`
                  : 'Currently out of stock (demo data).'}{' '}
               Class prototype — this item cannot be purchased.
            </p>
         </div>
      </div>
   )
}
