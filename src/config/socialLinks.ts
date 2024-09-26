import { socialHandles } from './branding'

// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
  name: string
  link: string
  icon: string
}

// Define a map for expanding @handles into full URLs
const socialURLMap: Record<string, string> = {
  facebook: 'https://www.facebook.com/',
  x: 'https://x.com/',
  pinterest: 'https://www.pinterest.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/company/',
  github: 'https://github.com/',
  coffee: 'https://www.buymeacoffee.com/',
  discord: 'https://discord.gg/',
  patreon: 'https://www.patreon.com/',
  reddit: 'https://www.reddit.com/user/',
  rss: 'https://www.rss.com/',
  telegram: 'https://t.me/',
  spotify: 'https://open.spotify.com/user/',
  tiktok: 'https://www.tiktok.com/@',
}

// Define a map of icons for each social platform
const socialIcons: Record<string, string> = {
  facebook: 'line-md:facebook',
  x: 'line-md:twitter-x',
  instagram: 'line-md:instagram',
  linkedin: 'line-md:linkedin',
  github: 'line-md:github-loop',
  coffee: 'line-md:buy-me-a-coffee',
  discord: 'line-md:discord',
  patreon: 'line-md:patreon',
  reddit: 'line-md:reddit-loop',
  rss: 'line-md:rss',
  telegram: 'line-md:telegram',
  spotify: 'line-md:spotify',
  tiktok: 'line-md:tiktok',
  // Add more mappings as needed
}

// Populate the socialLinks array, expanding the handle to the full URL and adding the icon
export const socialLinks: SocialLink[] = socialHandles.map((socialHandle) => ({
  name: socialHandle.name,
  link: socialURLMap[socialHandle.name] + socialHandle.handle,
  icon: socialIcons[socialHandle.name] || 'line-md:compass-loop', // fallback to 'default-icon' if not found
}))
