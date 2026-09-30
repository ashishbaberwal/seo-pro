import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`

async function main() {
   // ---------- Brands ----------
   const brands = [
      {
         title: 'BambooCraft',
         description:
            'Laptop stands and risers machined from fast-growing moso bamboo for small study desks.',
      },
      {
         title: 'ReDesk',
         description:
            'Desk organizers pressed from 100% recycled paper and board, plastic-free packaging.',
      },
      {
         title: 'CorkLine',
         description:
            'Natural cork desk mats that protect hostel desks and add warm, non-slip workspace.',
      },
      {
         title: 'EcoLoop',
         description:
            'Cable management and lighting accessories built from bamboo, cork offcuts and recycled plastics.',
      },
   ]
   for (const b of brands) {
      await prisma.brand.upsert({
         where: { title: b.title },
         update: { description: b.description },
         create: b,
      })
   }

   // ---------- Categories ----------
   const categories = [
      {
         title: 'Bamboo Laptop Stands',
         slug: 'laptop-stands',
         description:
            'Foldable and fixed bamboo laptop stands for 13 to 16 inch laptops. Raise your screen to eye level on a crowded hostel desk and free the space underneath for notebooks and chargers.',
      },
      {
         title: 'Recycled Desk Organizers',
         slug: 'desk-organizers',
         description:
            'Pen holders, drawer trays and paper organizers made from recycled board. Keep a small study table tidy without buying new plastic.',
      },
      {
         title: 'Cork Desk Mats',
         slug: 'desk-mats',
         description:
            'Natural cork desk mats in hostel-friendly sizes. Heat-resistant, water-repellent and kind to shared wooden desks.',
      },
      {
         title: 'Cable Management',
         slug: 'cable-management',
         description:
            'Cable boxes, clips and under-desk trays that hide charger sprawl on study tables with a single wall socket.',
      },
      {
         title: 'Desk Lighting',
         slug: 'desk-lighting',
         description:
            'Low-wattage LED study lights with warm modes for late-night hostel rooms and small home desks.',
      },
   ]
   for (const c of categories) {
      await prisma.category.upsert({
         where: { title: c.title },
         update: { slug: c.slug, description: c.description },
         create: c,
      })
   }

   // ---------- Products ----------
   const products = [
      {
         title: 'Bamboo Fold Laptop Stand (13–16 inch)',
         description:
            'A fold-flat bamboo laptop stand that lifts 13 to 16 inch laptops to a comfortable viewing height. Folds to 3 cm so it slides into a backpack side pocket between library sessions.',
         brand: 'BambooCraft',
         categories: ['laptop-stands'],
         price: 1499, discount: 200, stock: 40,
         isAvailable: true, isFeatured: true,
         keywords: ['bamboo laptop stand', 'foldable laptop stand', 'laptop stand for small desk', 'ergonomic laptop riser'],
         metadata: { material: 'Moso bamboo', dimensions: '26 x 22 x 15 cm (open)', weight: '820 g', compatibility: '13–16 inch laptops up to 5 kg' },
      },
      {
         title: 'Bamboo Riser Shelf with Phone Dock',
         description:
            'A two-tier bamboo riser that lifts your monitor or laptop while the lower shelf holds a keyboard. A side groove docks your phone for video-call study groups.',
         brand: 'BambooCraft',
         categories: ['laptop-stands'],
         price: 1899, discount: 0, stock: 25,
         isAvailable: true, isFeatured: false,
         keywords: ['bamboo monitor riser', 'laptop riser shelf', 'desk riser with phone dock'],
         metadata: { material: 'Moso bamboo', dimensions: '42 x 24 x 12 cm', weight: '1.4 kg', compatibility: 'Laptops and monitors up to 10 kg' },
      },
      {
         title: 'Recycled Paper Drawer Organizer (A4)',
         description:
            'A three-drawer A4 organizer pressed from recycled board. Sorts admit cards, notebooks and stationery on desks too small for a drawer unit.',
         brand: 'ReDesk',
         categories: ['desk-organizers'],
         price: 799, discount: 100, stock: 60,
         isAvailable: true, isFeatured: true,
         keywords: ['recycled desk organizer', 'paper drawer organizer', 'A4 desk tray', 'plastic-free organizer'],
         metadata: { material: '100% recycled board', dimensions: '34 x 26 x 18 cm', weight: '900 g', compatibility: 'A4 papers and standard stationery' },
      },
      {
         title: 'Recycled Pen and Gadget Caddy',
         description:
            'A compact five-slot caddy for pens, highlighters, earphones and USB drives. Keeps daily study tools upright on a 60 cm wide hostel desk.',
         brand: 'ReDesk',
         categories: ['desk-organizers'],
         price: 499, discount: 0, stock: 80,
         isAvailable: true, isFeatured: false,
         keywords: ['pen holder', 'desk caddy', 'recycled pen stand', 'gadget organizer'],
         metadata: { material: '100% recycled board', dimensions: '14 x 10 x 12 cm', weight: '280 g', compatibility: 'Pens, markers, earphones, USB drives' },
      },
      {
         title: 'Large Cork Desk Mat (90 x 40 cm)',
         description:
            'A full-desk natural cork mat that fits a laptop, keyboard and mouse with room to spare. Protects shared hostel furniture from heat rings and scratches.',
         brand: 'CorkLine',
         categories: ['desk-mats'],
         price: 1299, discount: 150, stock: 35,
         isAvailable: true, isFeatured: true,
         keywords: ['cork desk mat', 'large desk mat', 'natural desk pad', 'eco desk mat'],
         metadata: { material: 'Natural cork, 3 mm', dimensions: '90 x 40 x 0.3 cm', weight: '700 g', compatibility: 'Full-desk coverage for laptop setups' },
      },
      {
         title: 'Small Cork Desk Mat (60 x 30 cm)',
         description:
            'A half-desk cork mat sized for laptop-only setups in tight hostel rooms. Rolls up for holidays and unrolls flat in seconds.',
         brand: 'CorkLine',
         categories: ['desk-mats'],
         price: 899, discount: 0, stock: 50,
         isAvailable: true, isFeatured: false,
         keywords: ['small cork desk mat', 'laptop desk pad', 'roll-up desk mat'],
         metadata: { material: 'Natural cork, 3 mm', dimensions: '60 x 30 x 0.3 cm', weight: '420 g', compatibility: 'Laptop-only desk setups' },
      },
      {
         title: 'Bamboo Cable Box with Clips (Set of 8)',
         description:
            'A ventilated bamboo box that hides a 6-socket spike guard plus eight adhesive cable clips. Ends charger sprawl behind a study table with one wall socket.',
         brand: 'EcoLoop',
         categories: ['cable-management'],
         price: 699, discount: 100, stock: 70,
         isAvailable: true, isFeatured: true,
         keywords: ['cable management box', 'bamboo cable organizer', 'cable clips for desk', 'hide charger cables'],
         metadata: { material: 'Bamboo box, recycled plastic clips', dimensions: '32 x 14 x 13 cm box', weight: '650 g', compatibility: 'Standard 6-socket spike guards' },
      },
      {
         title: 'Under-Desk Bamboo Cable Tray',
         description:
            'A screw-free clamp tray that hangs under the desk edge and carries adapters, hubs and excess cable length. Frees the tabletop completely.',
         brand: 'EcoLoop',
         categories: ['cable-management'],
         price: 1099, discount: 0, stock: 30,
         isAvailable: true, isFeatured: false,
         keywords: ['under desk cable tray', 'cable management tray', 'no-drill cable organizer'],
         metadata: { material: 'Bamboo slats with steel clamps', dimensions: '40 x 12 x 10 cm', weight: '800 g', compatibility: 'Desk edges 2–5 cm thick' },
      },
      {
         title: 'USB Rechargeable Bamboo Desk Lamp',
         description:
            'A warm-to-cool LED lamp with a bamboo stem and touch dimmer. Runs 8 hours on battery, so it survives hostel power cuts during exam week.',
         brand: 'EcoLoop',
         categories: ['desk-lighting'],
         price: 1699, discount: 250, stock: 28,
         isAvailable: true, isFeatured: false,
         keywords: ['bamboo desk lamp', 'rechargeable study lamp', 'LED desk light for hostel'],
         metadata: { material: 'Bamboo stem, recycled plastic head', dimensions: '15 x 15 x 38 cm', weight: '1.1 kg', compatibility: 'USB-C charging, 3 colour modes' },
      },
      {
         title: 'Clip-On LED Study Light',
         description:
            'A clip-on LED bar that grips shelves, bunks and laptop lids. Three brightness levels for shared rooms where the tube light must stay off.',
         brand: 'EcoLoop',
         categories: ['desk-lighting'],
         price: 999, discount: 0, stock: 45,
         isAvailable: true, isFeatured: false,
         keywords: ['clip on study light', 'LED reading light', 'hostel desk light'],
         metadata: { material: 'Recycled ABS with metal clip', dimensions: '28 x 4 x 3 cm', weight: '180 g', compatibility: 'Clips onto edges up to 4 cm' },
      },
   ]
   for (const p of products) {
      const slugSeed = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      await prisma.product.create({
         data: {
            title: p.title,
            description: p.description,
            images: [img(`${slugSeed}-1`), img(`${slugSeed}-2`)],
            keywords: p.keywords,
            metadata: p.metadata,
            price: p.price,
            discount: p.discount,
            stock: p.stock,
            isAvailable: p.isAvailable,
            isFeatured: p.isFeatured,
            brand: { connect: { title: p.brand } },
            categories: { connect: p.categories.map((s) => ({ slug: s })) },
         },
      })
   }

   // ---------- Banners ----------
   const banners = [
      { label: 'Sustainable desk upgrades for small spaces', image: img('banner-desk') },
      { label: 'Bamboo laptop stands — prototype showcase', image: img('banner-bamboo') },
      { label: 'Cable management for hostel rooms', image: img('banner-cables') },
   ]
   for (const b of banners) {
      await prisma.banner.create({ data: b })
   }

   // ---------- Author + Blogs ----------
   await prisma.author.upsert({
      where: { email: 'team@crawl-smart.example' },
      update: {},
      create: { email: 'team@crawl-smart.example', name: 'Crawl-Smart Team' },
   })
   const author = await prisma.author.findUniqueOrThrow({
      where: { email: 'team@crawl-smart.example' },
   })

   const blogs = [
      {
         slug: 'how-to-organize-cables-on-a-small-study-table',
         title: 'How to Organize Cables on a Small Study Table',
         image: img('blog-cables'),
         description:
            'A five-step method to hide charger sprawl on a study table with a single wall socket — no drilling, hostel-safe.',
         categories: ['cable-management', 'guides'],
         keywords: ['how to organize cables', 'cable management study table', 'hide charger cables hostel'],
         content: `## The one-socket problem

Most hostel study tables sit far from the room's single wall socket. Chargers, a lamp and earphones fight for space, and the cable pile grows every semester.

<Callout emoji="💡">This is a class-prototype guide. Product names are fictional demo data.</Callout>

<Step number="1" title="Unplug everything and sort" />

Pull every cable off the desk. Keep chargers you use daily; box the rest. If two cables do the same job, keep one.

<Step number="2" title="Park the spike guard in a cable box" />

A ventilated cable box hides the bulky spike guard and leaves only short runs visible. See our [cable management](/categories/cable-management) catalogue for the prototype box.

<Step number="3" title="Route with clips, not tape" />

Adhesive cable clips hold charging cables along the desk edge. Tape leaves residue that hostel wardens notice at checkout time.

<Step number="4" title="Hang the excess under the desk" />

An under-desk tray carries adapters and spare cable length. The tabletop should hold only what your hands touch daily.

<Step number="5" title="Label both ends" />

Masking tape flags with "laptop", "phone" and "lamp" save ten minutes every time you pack for home.

## What to buy first

If you buy one thing, make it the cable box: it removes the biggest visual mess in a single step. Clips come second, the tray third.`,
      },
      {
         slug: 'cork-desk-mat-vs-plastic-desk-mat',
         title: 'Cork Desk Mat vs Plastic Desk Mat: Which Suits a Hostel Desk?',
         image: img('blog-cork'),
         description:
            'Comparing cork and plastic desk mats on heat resistance, grip, durability and hostel-friendliness before you choose.',
         categories: ['desk-mats', 'comparisons'],
         keywords: ['cork desk mat vs plastic', 'cork vs plastic desk pad', 'best desk mat for hostel'],
         content: `## Short answer

Cork wins on shared wooden desks: it resists heat rings, grips without adhesive and rolls away at checkout. Plastic wins on waterproofing and printed designs.

<ProsCard title="a cork desk mat" pros={["No heat rings from chai cups and mess tiffins", "Stays put without glue or tape", "Rolls up flat for semester breaks", "Softer wrist feel during long typing sessions"]} />

<ConsCard title="a cork desk mat" cons={["Not fully waterproof — wipe spills quickly", "Fewer colour and print options", "Edges can fray if dragged across rough wood daily"]} />

## When plastic makes sense

Pick a plastic or PU mat if your desk sits near a washbasin, you eat every meal at the desk, or you want a stitched-edge gaming look. For everyone else on a shared wooden desk, cork is the lower-regret choice.

Browse both sizes in our [cork desk mats](/categories/desk-mats) catalogue. All products shown are fictional prototype entries.`,
      },
      {
         slug: 'small-desk-setup-ideas-for-hostel-rooms',
         title: 'Small Desk Setup Ideas for Hostel Rooms (Under ₹5,000)',
         image: img('blog-setup'),
         description:
            'Three complete small-desk setups — focus, budget and eco picks — built from bamboo, cork and recycled accessories.',
         categories: ['desk-lighting', 'guides'],
         keywords: ['small desk setup ideas', 'hostel room desk setup', 'budget study desk setup India'],
         content: `## The constraints

A hostel desk is roughly 90 cm wide, shared with a roommate's noise, and inspected at checkout. Every item must earn its footprint — or hang, fold or roll away.

<Callout emoji="📌">Prices below are fictional prototype data in INR, shown for catalogue realism. Transactions are disabled.</Callout>

## Setup 1: The focus build

A foldable bamboo laptop stand plus a clip-on LED light. Screen at eye level, light where you read, zero permanent changes to the room.

## Setup 2: The tidy build

Add a recycled drawer organizer and a cable box. Papers leave the desktop, chargers leave the floor, and cleaning takes two minutes before warden rounds.

## Setup 3: The eco build

Swap the plastic mat for a large cork desk mat and light the desk with a rechargeable bamboo lamp. Fully reversible, fully recyclable packaging.

<Step number="1" title="Measure your desk" />

Note width, depth and socket distance before shortlisting anything.

<Step number="2" title="Go vertical first" />

Stands, risers and trays free surface area faster than any organizer.

<Step number="3" title="Light last" />

Once the layout is fixed, place the lamp opposite your writing hand to kill shadows.`,
      },
   ]
   for (const b of blogs) {
      await prisma.blog.create({
         data: {
            slug: b.slug,
            title: b.title,
            image: b.image,
            description: b.description,
            content: b.content,
            categories: b.categories,
            keywords: b.keywords,
            authorId: author.id,
         },
      })
   }

   console.log('Seed complete.')
}

main()
   .catch((e) => {
      console.error(e)
      process.exit(1)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
