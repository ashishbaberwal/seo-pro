import { Heading } from '@/components/native/heading'
import { Separator } from '@/components/native/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'About',
   description:
      'About the Crawl-Smart Catalogue: a class SEO prototype for sustainable desk accessories with transactions disabled.',
   alternates: { canonical: '/about' },
}

export default function About() {
   return (
      <>
         <Heading
            title="About this catalogue"
            description="What Crawl-Smart is, who it is for, and why nothing here can be bought."
         />
         <Separator className="my-4" />
         <div className="max-w-3xl space-y-4 text-sm leading-6 text-justify">
            <p>
               Crawl-Smart Catalogue is a class prototype built by three
               university students to learn technical SEO on a realistic
               catalogue: bamboo laptop stands, recycled paper organizers,
               cork desk mats, and cable and lighting accessories for small
               hostel and home desks.
            </p>
            <p>
               Every product, price, review-free description and guide on this
               site is fictional demo data written for the project. There is
               no cart, no checkout and no payment processing anywhere on this
               site — catalogue browsing is the entire functionality, and
               every page carries a prototype notice to that effect.
            </p>
            <p>
               The catalogue exists to demonstrate crawlable architecture,
               one-intent-per-page mapping, internal linking, structured data
               and Core Web Vitals measurement. Questions about the project
               can be sent via the contact page.
            </p>
         </div>
      </>
   )
}
