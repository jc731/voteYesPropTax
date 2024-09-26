// Branding
// ------------
// Description: The branding information for the website including logo, colors, fonts, and text relating to the company.

export interface Logo {
  src: string
  alt: string
  text: string
}

export interface SocialHandle {
  name: string
  handle: string
}

interface Branding {
  name: string
  shortName: string
  title: string
  description: string
  altDescription?: string
  logo: Logo
}
// short name isn't used yet
export const branding: Branding = {
  name: 'UniSyn Technologies',
  shortName: 'UniSyn',
  title: 'Websites Made Beautiful',
  description:
    'UniSyn Technologies is a web development company that specializes in beautiful and easy to use websites. Our team of experienced developers is dedicated to providing high-quality, responsive designs that enhance the user experience and drive conversions.',
  // alt description used for footer and to mix up copy on the site. it can be similar to main description or don't use one at all.
  altDescription:
    'UniSyn Technologiess is a web development company that specializes in beautiful and easy to use websites. Our team of experienced developers is dedicated to providing high-quality, responsive designs that enhance the user experience and drive conversions.',
  logo: {
    src: '/logo.svg',
    alt: 'UniSyn Logo',
    text: 'UNISYN',
  },
}
export const socialHandles: SocialHandle[] = [
  { name: 'facebook', handle: 'UnisynTechnologies' },
  { name: 'x', handle: 'unisyntech' },
  { name: 'linkedin', handle: 'unisyntechnologies' },
  { name: 'github', handle: 'unisyntech' },
  { name: 'reddit', handle: 'unisyntech' },
]
