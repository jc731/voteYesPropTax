import { branding } from './branding'

// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
  src: string
  alt: string
  text: string
}

export interface FooterAbout {
  title: string
  aboutText: string
  logo: Logo
}

export interface SubCategory {
  subCategory: string
  subCategoryLink: string
}

export interface FooterColumn {
  category: string
  subCategories: SubCategory[]
}

export interface SubFooter {
  copywriteText: string
}

export interface FooterData {
  footerAbout: FooterAbout
  footerColumns: FooterColumn[]
  subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
  footerAbout: {
    title: branding.shortName,
    aboutText: branding.altDescription || branding.description,
    logo: branding.logo,
  },
  footerColumns: [
    {
      category: 'Services',
      subCategories: [
        {
          subCategory: 'Web Design',
          subCategoryLink: '/blog/tags/web-design',
        },
        {
          subCategory: 'Hosting and Security',
          subCategoryLink: '/blog/tags/web-design',
        },
        {
          subCategory: 'Custom Development',
          subCategoryLink: '/blog/tags/app-development',
        },
      ],
    },
    {
      category: 'Who We Are',
      subCategories: [
        {
          subCategory: 'FAQs',
          subCategoryLink: '/faq',
        },
        {
          subCategory: 'Our Blog',
          subCategoryLink: '/blog',
        },
        {
          subCategory: 'Portfolio',
          subCategoryLink: '/blog/tags/portfolio',
        },
      ],
    },
    {
      category: 'Get in touch',
      subCategories: [
        {
          subCategory: 'Quote Request',
          subCategoryLink: '/contact',
        },
        {
          subCategory: 'Contact Us',
          subCategoryLink: '/contact',
        },
        {
          subCategory: 'What We Do',
          subCategoryLink: '/why',
        },
      ],
    },
  ],
  subFooter: {
    copywriteText: '© ' + branding.name + ' - ' + new Date().getFullYear() + '.',
  },
}
