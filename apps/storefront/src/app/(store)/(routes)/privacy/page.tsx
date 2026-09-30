import config from '@/config/site'

export default function PrivacyPolicy() {
   return (
      <main className="min-h-screen py-12">
         <div className="container mx-auto space-y-4 p-4">
            <h1 className="text-3xl font-semibold">Privacy Policy</h1>
            <p>This policy explains how {config.name} handles information needed to operate the store.</p>
            <h2 className="text-xl font-semibold">Information we collect</h2>
            <p>We collect account, contact, shipping, cart, and order information that you provide while using the store.</p>
            <h2 className="text-xl font-semibold">How we use information</h2>
            <p>We use it to authenticate users, fulfill orders, provide support, and communicate about account or order activity.</p>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>For privacy questions, contact the store operator through the support channel associated with {config.url}.</p>
         </div>
      </main>
   )
}
