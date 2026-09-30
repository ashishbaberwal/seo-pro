import Footer from '@/components/native/Footer'
import PrototypeNotice from '@/components/native/PrototypeNotice'
import Header from '@/components/native/nav/parent'

export const dynamic = 'force-dynamic'

export default async function DashboardLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <PrototypeNotice />
         <Header />
         <div className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
            {children}
         </div>
         <Footer />
      </>
   )
}
