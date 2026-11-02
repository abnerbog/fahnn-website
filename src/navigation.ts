import { getHomePermalink, getPermalink } from './utils/permalinks';
import { ORG } from './data/site';

// The five main pages, in the order a first-time visitor needs them: who we
// are, what we do, who we are together, what's new, and how to join in.
// Our Story is the home page; /our-story redirects there (astro.config.ts).
const mainPages = [
  { text: 'Our Story', href: getHomePermalink() },
  { text: 'What We Do', href: getPermalink('/what-we-do') },
  { text: 'Our People', href: getPermalink('/our-people') },
  { text: 'News', href: getPermalink('/news') },
  { text: 'Get Involved', href: getPermalink('/get-involved') },
];

export const headerData = {
  links: mainPages,
  actions: [{ text: 'Donate', href: getPermalink('/donate'), variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: mainPages,
    },
    {
      title: 'Connect',
      links: [
        { text: 'Donate', href: getPermalink('/donate') },
        { text: 'Contact us', href: getPermalink('/contact') },
        {
          text: 'Directions to FAHNN',
          href: ORG.mapUrl,
          target: '_blank',
          ariaLabel: 'Directions to FAHNN (opens Google Maps in a new tab)',
        },
        { text: 'Get our newsletter', href: getPermalink('/get-involved#newsletter') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'FAHNN on Instagram', icon: 'tabler:brand-instagram', href: ORG.social.instagram },
    { ariaLabel: 'FAHNN on Facebook', icon: 'tabler:brand-facebook', href: ORG.social.facebook },
  ],
  footNote: `${ORG.name} is a ${ORG.taxStatus}.`,
};
