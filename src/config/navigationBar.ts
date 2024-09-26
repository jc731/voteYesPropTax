import { branding } from './branding'

// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
  src: string
  alt: string
  text: string
}

export interface NavSubItem {
  name: string
  link: string
}

export interface NavItem {
  name: string
  link: string
  submenu?: NavSubItem[]
}

export interface NavAction {
  name: string
  link: string
  style: string
  size: string
}

export interface NavData {
  logo: Logo
  navItems: NavItem[]
  navActions: NavAction[]
}

export const navigationBarData: NavData = {
  logo: branding.logo,
  navItems: [
    { name: 'Home', link: '/' },
    {
      name: 'FAQs',
      link: '/faq',
    },
    { name: 'Portfolio', link: '/blog/tags/portfolio' },
  ],
  navActions: [{ name: 'Get In Touch', link: '/contact', style: 'primary', size: 'lg' }],
}
