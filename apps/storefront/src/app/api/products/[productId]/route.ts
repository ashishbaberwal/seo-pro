import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
   req: Request,
   { params }: { params: Promise<{ productId: string }> }
) {
   try {
      const { productId } = await params
      if (!productId) {
         return new NextResponse('Product id is required', { status: 400 })
      }

      const product = await prisma.product.findUnique({
         where: { id: productId },
         include: {
            categories: true,
            brand: true,
         },
      })

      if (!product) {
         return new NextResponse('Product not found', { status: 404 })
      }

      return NextResponse.json(product)
   } catch (error) {
      console.error('[PRODUCT_GET]', error)
      return new NextResponse('Internal error', { status: 500 })
   }
}
