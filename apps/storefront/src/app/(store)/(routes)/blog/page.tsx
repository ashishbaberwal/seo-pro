import { BlogPostCard } from '@/components/native/BlogCard'
import prisma from '@/lib/prisma'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
   title: 'Buying guides',
   description:
      'Short, honest buying guides for small-desk setups: cable organization, cork vs plastic mats, and hostel-room desk ideas.',
   alternates: { canonical: '/blog' },
}

export default async function Index() {
   const blogs = await prisma.blog.findMany({
      include: { author: true },
   })

   return (
      <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
         <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
            Blog Posts
         </h3>
         <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {blogs.map((post) => (
               <BlogPostCard key={post.slug} post={post} />
            ))}
         </div>
      </div>
   )
}
