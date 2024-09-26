import { branding, type Logo } from './branding'

// Config
// ------------
// Description: The configuration file for the website.

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
  siteTitle: string
  siteDescription: string
  ogImage: string
  logo: Logo
  canonical: boolean
  noindex: boolean
  mode: Mode
  scrollAnimations: boolean
}

export const configData: Config = {
  siteTitle: branding.shortName,
  siteDescription: branding.description,
  // update public/og.png for social media 'previews'
  ogImage: '/og.png',
  logo: branding.logo,
  canonical: true,
  noindex: false,
  mode: 'auto',
  scrollAnimations: true,
}
