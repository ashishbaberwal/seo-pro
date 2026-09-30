'use client'

import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import config from '@/config/site'
import Link from 'next/link'

const links = [
   { href: '/products', label: 'Products' },
   { href: '/categories', label: 'Categories' },
   { href: '/blog', label: 'Blog' },
   { href: '/about', label: 'About' },
]

export function MainNav() {
   return (
      <div className="hidden md:flex gap-4">
         <Link href="/" className="flex items-center">
            <span className="hidden font-medium sm:inline-block">
               {config.name}
            </span>
         </Link>
         <NavMenu />
      </div>
   )
}

export function NavMenu() {
   return (
      <NavigationMenu>
         <NavigationMenuList>
            {links.map(({ href, label }) => (
               <NavigationMenuItem key={href}>
                  <Link href={href} legacyBehavior passHref>
                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="font-normal text-foreground/70">
                           {label}
                        </div>
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
            ))}
         </NavigationMenuList>
      </NavigationMenu>
   )
}
