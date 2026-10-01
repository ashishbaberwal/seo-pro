import { Prisma } from '@prisma/client'

export type ProductWithIncludes = Prisma.ProductGetPayload<{
   include: {
      brand: true
      categories: true
   }
}>
