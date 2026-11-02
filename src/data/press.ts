// Independent news coverage of FAHNN, newest first. Always link to the
// original article; outlets' photos and video are not ours to reuse.
// These move into the News collection (`src/data/post/`) when News is built.

export interface PressItem {
  /** Lets a page link to one article, e.g. `pressUrl('meet-aunt-rhonda')`. */
  id: string;
  date: string;
  outlet: string;
  headline: string;
  url?: string;
}

export const PRESS: Array<PressItem> = [
  {
    id: 'pharmacy-health-desert',
    date: '2026-03-22',
    outlet: 'Syracuse.com',
    headline: 'Aunt Rhonda lands another win for Syracuse: a pharmacy in a health desert',
    // TODO: original article URL
  },
  {
    id: 'meet-aunt-rhonda',
    date: '2025-10-07',
    outlet: 'Syracuse.com',
    headline: 'Meet ‘Aunt Rhonda,’ whose years of persistence will bring a store to a Syracuse food desert',
    // TODO: original article URL (linked from the $1.7 million investment on the home page)
  },
  {
    id: 'wsyr-fresh-market',
    date: '2025-03-05',
    outlet: 'WSYR',
    headline: 'The woman bringing Syracuse Southside a fresh market',
    // TODO: original article URL
  },
  {
    id: 'giving-voice-winter-market',
    date: '2023-05-18',
    outlet: 'Giving Voice',
    headline: 'Winter Market Produces More than Just Produce',
    // TODO: original article URL
  },
  {
    id: 'spectrum-winter-market',
    date: '2023-03-21',
    outlet: 'Spectrum News',
    headline: 'Winter market helps address food desert in Syracuse’s Southside',
    url: 'https://spectrumlocalnews.com/nys/central-ny/news/2023/03/21/winter-market-helps-address-food-desert-in-syracuse-s-southside',
  },
];

// The original article's URL, or undefined until we have it.
export const pressUrl = (id: string) => PRESS.find((item) => item.id === id)?.url;
