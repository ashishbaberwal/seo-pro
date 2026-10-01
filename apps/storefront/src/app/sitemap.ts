import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:7777'

export default async function sitemap() {
   const products = (await prisma.product.findMany())
      .filter((p) => p.slug)
      .map(({ slug, updatedAt }) => ({
         url: `${URL}/products/${slug}`,
         lastModified: updatedAt,
      }))

   const categories = (await prisma.category.findMany())
      .filter((c) => c.slug)
      .map(({ slug, updatedAt }) => ({
         url: `${URL}/categories/${slug}`,
         lastModified: updatedAt,
      }))

   const blogs = (await prisma.blog.findMany()).map(({ slug, updatedAt }) => ({
      url: `${URL}/blog/${slug}`,
      lastModified: updatedAt,
   }))

   const routes = ['', '/products', '/categories', '/blog', '/about', '/contact'].map(
      (route) => ({
         url: `${URL}${route}`,
         lastModified: new Date().toISOString(),
      })
   )

   return [...routes, ...categories, ...products, ...blogs]
}
