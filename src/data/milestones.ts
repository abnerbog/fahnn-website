import type { TimelineItem } from '~/types';
import { ORG, STORY } from './site';

// FAHNN's timeline, from the store closing to what comes next. Used on the
// home page (Our Story); the last entry is a goal, not a date, so it is `ghost`.
export const MILESTONES: Array<TimelineItem> = [
  {
    date: String(STORY.groceryClosedYear),
    title: 'The grocery store closes',
    description: `Tops at Valley Plaza shuts its doors. No full-service grocery store is left within ${STORY.noGroceryRadius}.`,
    icon: 'tabler:building-store',
  },
  {
    date: String(STORY.foundedYear),
    title: 'Neighbors start FAHNN',
    description:
      'Longtime residents open a weekly farmers market in the Plaza parking lot and start pressing city officials to bring a grocery store back.',
    icon: 'tabler:plant-2',
    image: {
      src: '~/assets/images/valley_plaza_protest.png',
      alt: 'Neighbors in the Valley Plaza parking lot hold a FAHNN banner that asks, “Where’s Our Grocery Store?”',
    },
  },
  {
    date: String(STORY.groceryGrantYear),
    title: 'A grocery store is on the way',
    description: `The ${STORY.groceryGrantee} receives a ${STORY.groceryGrantAmount} ${STORY.groceryGrantName} to renovate the empty store and open ${STORY.groceryStore}. FAHNN was a catalyst for this partnership.`,
    icon: 'tabler:shopping-cart',
    logo: { src: '~/assets/images/logo_super_imperial_market.png', alt: STORY.groceryStore },
    highlight: true,
  },
  {
    date: 'March 2026',
    title: 'A pharmacy is on the way',
    description:
      'McKesson is opening an independent pharmacy at the Plaza, bringing health care closer to home. FAHNN’s advocacy helped bring McKesson to the Plaza.',
    icon: 'tabler:first-aid-kit',
    logo: { src: '~/assets/images/logo_mckesson.png', alt: 'McKesson' },
  },
  {
    date: STORY.nonprofitSince,
    title: 'FAHNN becomes a nonprofit',
    description: `We adopt <a href="${ORG.bylawsUrl}" target="_blank" rel="noopener noreferrer" class="text-link underline underline-offset-4">bylaws<span class="sr-only"> (PDF, opens in a new tab)</span></a> and a Board of Directors, so this work lasts for years to come.`,
    icon: 'tabler:users-group',
  },
  {
    date: 'Next',
    title: 'A community-owned hub',
    description: 'A place in the Valley/Southside for food, health, and services, owned by neighbors.',
    icon: 'tabler:home-heart',
    ghost: true,
  },
];
