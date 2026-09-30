import { NavItem } from '@/types/nav'

interface DocsConfig {
   mainNav: NavItem[]
   sidebarNav: NavItem[]
}

export const docsConfig: DocsConfig = {
   mainNav: [
      {
         title: 'Products',
         href: '/products',
      },
      {
         title: 'Categories',
         href: '/categories',
      },
      {
         title: 'Blog',
         href: '/blog',
      },
      {
         title: 'About',
         href: '/about',
      },
   ],
   sidebarNav: [
      {
         title: 'Products',
         href: '/products',
      },
      {
         title: 'Categories',
         href: '/categories',
      },
      {
         title: 'Blog',
         href: '/blog',
      },
      {
         title: 'About',
         href: '/about',
      },
   ],
}
