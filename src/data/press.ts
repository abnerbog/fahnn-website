// Independent news coverage of FAHNN, newest first. The News page and any
// other page that links to an article read from here.
//
// Rules (AGENTS.md, "Press"): always link to the original article; outlets'
// photos and video are not ours to reuse. Each `summary` is one sentence in
// our words that ties the story to our work. Keep summaries to facts the
// article itself reports.

/** The kind of outlet, so visitors can see the range of coverage at a glance. */
export type PressKind = 'newspaper' | 'tv' | 'radio' | 'campus' | 'community' | 'national';

export const PRESS_KINDS: Record<PressKind, { label: string; icon: string }> = {
  newspaper: { label: 'Newspaper', icon: 'tabler:news' },
  tv: { label: 'Local TV', icon: 'tabler:device-tv' },
  radio: { label: 'Public radio', icon: 'tabler:radio' },
  campus: { label: 'Syracuse University media', icon: 'tabler:school' },
  community: { label: 'Community', icon: 'tabler:users-group' },
  national: { label: 'National', icon: 'tabler:world' },
};

export interface PressItem {
  /** Lets a page link to one article, e.g. `pressUrl('meet-aunt-rhonda')`. */
  id: string;
  /** `YYYY-MM-DD`, or `YYYY-MM` when only the month is known. */
  date: string;
  outlet: string;
  kind: PressKind;
  /** The outlet's headline, word for word. */
  headline: string;
  /** One sentence, in our words, on what the story covers. */
  summary: string;
  url?: string;
  /** Shown large at the top of the News page. Pick three, with URLs. */
  featured?: boolean;
  /** A short line quoted in the article, shown as the News page's pull quote. */
  quote?: { text: string; by: string };
}

export const PRESS: Array<PressItem> = [
  {
    id: 'pharmacy-health-desert',
    date: '2026-03-22',
    outlet: 'Syracuse.com',
    kind: 'newspaper',
    headline: 'Aunt Rhonda lands another win for Syracuse: a pharmacy in a health desert',
    summary:
      'Food and health go together. Our story moved a national health care company to help bring a pharmacy to the Valley Plaza.',
    url: 'https://www.syracuse.com/business/2026/03/aunt-rhondas-story-inspires-national-healthcare-firm-to-fix-a-syracuse-pharmacy-desert.html',
    featured: true,
  },
  {
    id: 'ncc-two-residents',
    date: '2025-10-31',
    outlet: 'NCC News',
    kind: 'campus',
    headline: 'Two residents of South Syracuse fight to combat food insecurity',
    summary:
      'Newhouse School students profile two South Side neighbors, including our work to bring fresh food back to the Valley Plaza.',
    url: 'https://nccnewsonline.com/two-residents-of-south-syracuse-fight-to-combat-food-insecurity/',
  },
  {
    id: 'citrustv-grocery-meeting',
    date: '2025-10-28',
    outlet: 'CitrusTV',
    kind: 'campus',
    headline: 'The Division of Business Development Held a Meeting to Discuss Opening New Super Market',
    summary:
      'Syracuse University’s student TV station covers the community meeting where neighbors met the new grocer and shared what they want in the store.',
    url: 'https://www.citrustv.com/news/newslive/articles/the-division-of-business-development-held-a-meeting-to-discuss-opening-new-super-market/',
  },
  {
    id: 'wsyr-grocery-to-open',
    date: '2025-10-18',
    outlet: 'WSYR',
    kind: 'tv',
    headline: 'After years without fresh food, new grocery store to open in Syracuse’s Valley neighborhood',
    summary: 'A new grocery store is coming to the Valley Plaza, after years of neighbors asking for one.',
    // WSYR's story as republished on Yahoo News.
    // TODO: swap in the original localsyr.com URL when we have it.
    url: 'https://www.yahoo.com/news/articles/years-without-fresh-food-grocery-090000506.html',
  },
  {
    id: 'black-enterprise-aunt-rhonda',
    date: '2025-10-15',
    outlet: 'Black Enterprise',
    kind: 'national',
    headline: 'Meet ‘Aunt Rhonda:’ The Woman Who Stopped At Nothing To Bring Fresh Food Options To A Syracuse Desert',
    summary: 'Our story reaches readers across the country, building on Syracuse.com’s reporting.',
    url: 'https://www.blackenterprise.com/aunt-rhonda-solving-the-food-desert-issue/',
  },
  {
    id: 'meet-aunt-rhonda',
    date: '2025-10-07',
    outlet: 'Syracuse.com',
    kind: 'newspaper',
    headline: 'Meet ‘Aunt Rhonda,’ whose years of persistence will bring a store to a Syracuse food desert',
    summary:
      'Years of phone calls, emails, and showing up every week helped bring a grocer to the empty store at the Valley Plaza.',
    // Also linked from the $1.7 million investment on the home page.
    url: 'https://www.syracuse.com/business/2025/10/meet-aunt-rhonda-whose-years-of-heartfelt-nagging-will-bring-a-store-to-a-syracuse-food-desert.html',
    quote: {
      text: 'This project would not have been possible without Rhonda.',
      by: 'A.K. Kaid, owner of Super Imperial Market',
    },
  },
  {
    id: 'wsyr-fresh-market',
    date: '2025-03-05',
    outlet: 'WSYR',
    kind: 'tv',
    headline: 'The woman bringing Syracuse Southside a fresh market',
    summary: 'WSYR’s Remarkable Women series visits our market and the neighbors who keep it going.',
    url: 'https://www.localsyr.com/community/remarkable-women/remarkable-woman-rhonda-vesey/',
    featured: true,
  },
  {
    id: 'daily-orange-voter-workshop',
    date: '2024-10',
    outlet: 'The Daily Orange',
    kind: 'campus',
    headline: 'Food Access Healthy Neighborhoods Now hosts voter education workshop',
    summary: 'We hosted a workshop to help neighbors get ready to vote, and to ask leaders the right questions.',
    url: 'https://dailyorange.com/2024/10/food-access-healthy-neighborhoods-now-voting-workshop/',
  },
  {
    id: 'newshouse-beyond-legislation',
    date: '2024-03-26',
    outlet: 'The NewsHouse',
    kind: 'campus',
    headline: 'Addressing food insecurity in Syracuse: Advocates push beyond legislation',
    summary: 'Our “Where’s Our Grocery Store?” banner, and why neighbors kept pushing while new laws were debated.',
    url: 'https://thenewshouse.com/off-campus/addressing-food-insecurity-in-syracuse-advocates-push-beyond-legislation/',
  },
  {
    id: 'waer-gillibrand-visit',
    date: '2024-01-22',
    outlet: 'WAER',
    kind: 'radio',
    headline: 'Sen. Gillibrand proposes measure to end food deserts at Syracuse visit',
    summary:
      'U.S. Sen. Kirsten Gillibrand came to our market at the Valley Plaza to announce a bill to help grocery stores open in neighborhoods without one.',
    url: 'https://www.waer.org/news/2024-01-22/sen-gillibrand-proposes-measure-to-end-food-deserts-at-syracuse-visit',
  },
  {
    id: 'giving-voice-winter-market',
    date: '2023-05-10',
    outlet: 'CNY Community Foundation',
    kind: 'community',
    headline: 'Winter Market Produces More than Just Produce: Food Access Healthy Neighborhoods Now',
    summary:
      'The cover story of the foundation’s Giving Voice magazine: our winter market, and the friendships it grows.',
    url: 'https://cnycf.org/winter-market-produces-more-than-just-produce-food-access-healthy-neighborhoods-now/',
  },
  {
    id: 'spectrum-winter-market',
    date: '2023-03-21',
    outlet: 'Spectrum News',
    kind: 'tv',
    headline: 'Winter market helps address food desert in Syracuse’s Southside',
    summary: 'Our winter market kept fresh food coming to the Southside through the cold months.',
    url: 'https://spectrumlocalnews.com/nys/central-ny/news/2023/03/21/winter-market-helps-address-food-desert-in-syracuse-s-southside',
    featured: true,
  },
];

// The original article's URL, or undefined until we have it.
export const pressUrl = (id: string) => PRESS.find((item) => item.id === id)?.url;

/** "March 22, 2026", or "October 2024" when only the month is known. */
export const formatPressDate = (date: string) => {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day ?? 1)).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    ...(day ? { day: 'numeric' } : {}),
  });
};
