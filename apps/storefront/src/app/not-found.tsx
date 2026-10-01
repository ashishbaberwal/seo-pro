import Link from 'next/link'

const links = [
   { href: '/', label: 'Home' },
   { href: '/products', label: 'All products' },
   { href: '/categories', label: 'Categories' },
   { href: '/blog', label: 'Buying guides' },
]

export default function NotFound() {
   return (
      <div className="mx-auto flex max-w-2xl flex-col items-center py-24 text-center">
         <p className="text-sm font-medium text-muted-foreground">
            Crawl-Smart Catalogue · class prototype
         </p>
         <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Off the desk plan
         </h1>
         <p className="mt-4 text-muted-foreground">
            This page doesn&apos;t exist (or the demo item was moved). The
            catalogue below is fictional class-prototype data — pick a section
            to keep browsing.
         </p>
         <div className="mt-8 flex flex-wrap justify-center gap-2">
            {links.map(({ href, label }) => (
               <Link
                  key={href}
                  href={href}
                  className="rounded-md border px-4 py-2 text-sm font-medium transition hover:border-foreground/40"
               >
                  {label}
               </Link>
            ))}
         </div>
      </div>
   )
}
