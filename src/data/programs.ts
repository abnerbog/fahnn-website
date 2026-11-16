// FAHNN's programs beyond the weekly farmers market, shown as photo cards in
// the home page's "More than a market" section.

import type { ImageMetadata } from 'astro';

import mobileMarket from '~/assets/images/mobile_market.png';
import wellnessWednesdays from '~/assets/images/wellness_wednesdays.png';
import workshopsAndConversations from '~/assets/images/workshop_and_conversations.png';
import communityGatherings from '~/assets/images/community_gatherings.png';

export interface Program {
  id: string;
  name: string;
  description: string;
  image: ImageMetadata;
  /** Describes the scene in the photo. */
  alt: string;
  /** CSS object-position for the card crop, when the subject isn't centered. */
  focus?: string;
}

export const PROGRAMS: Array<Program> = [
  {
    id: 'mobile-markets',
    name: 'Mobile Markets',
    description:
      'We bring fresh produce to senior residences near Valley Plaza, so older neighbors can choose and buy fresh food where they live.',
    image: mobileMarket,
    alt: 'An older woman in a knit hat and winter coat leans in to look over a table of eggs, honey, and fresh bread.',
    focus: '70% center',
  },
  {
    id: 'wellness-wednesdays',
    name: 'Wellness Wednesdays',
    description: 'Neighbors learn together about staying healthy, and everyone leaves with a bag of fresh produce.',
    image: wellnessWednesdays,
    alt: 'A woman speaks to neighbors seated around tables in a community room, beside a table piled with fresh greens.',
  },
  {
    id: 'workshops',
    name: 'Workshops & Conversations',
    description:
      'Workshops on health, nutrition, lead safety, and saving energy, plus public conversations with city officials and local leaders.',
    image: workshopsAndConversations,
    alt: 'Health students take neighbors’ blood pressure at a table in a community room.',
  },
  {
    id: 'gatherings',
    name: 'Community Gatherings',
    description:
      'A Thanksgiving drive, a community dinner, and an open house that bring the whole neighborhood together.',
    image: communityGatherings,
    alt: 'Smiling neighbors, some in Halloween costumes, wave from around a table under a hand-painted Coffee and Conversation sign.',
  },
];
