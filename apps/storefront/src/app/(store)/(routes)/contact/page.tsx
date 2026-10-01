import { Heading } from '@/components/native/heading'
import { Separator } from '@/components/native/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Contact',
   description:
      'Contact the student team behind the Crawl-Smart Catalogue class prototype.',
   alternates: { canonical: '/contact' },
}

export default function Contact() {
   return (
      <>
         <Heading
            title="Contact"
            description="Reach the student team behind this class prototype."
         />
         <Separator className="my-4" />
         <div className="max-w-3xl space-y-4 text-sm leading-6 text-justify">
            <p>
               This site is a coursework prototype with no store, no orders
               and no customer support desk. For questions about the project,
               methodology or data, contact the team through your course
               channel and reference the domain and dates of the milestone
               report.
            </p>
            <p>
               Please do not attempt to purchase anything here — transactions
               are disabled by design, and all catalogue content is fictional
               demo data.
            </p>
         </div>
      </>
   )
}
