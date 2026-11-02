// FAHNN's programs beyond the weekly farmers market. Used on the home page;
// `id` becomes the anchor on What We Do (e.g. /what-we-do#wellness-wednesdays).
// TODO: add a photo to each program once FAHNN has one.

export interface Program {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const PROGRAMS: Array<Program> = [
  {
    id: 'mobile-markets',
    name: 'Mobile Markets',
    description:
      'We bring fresh produce to senior residences near Valley Plaza, so older neighbors can choose and buy fresh food where they live.',
    icon: 'tabler:truck-delivery',
  },
  {
    id: 'wellness-wednesdays',
    name: 'Wellness Wednesdays',
    description: 'Neighbors learn together about staying healthy, and everyone leaves with a bag of fresh produce.',
    icon: 'tabler:heart-handshake',
  },
  {
    id: 'workshops',
    name: 'Workshops & Conversations',
    description:
      'Workshops on health, nutrition, lead safety, and saving energy, plus public conversations with city officials and local leaders.',
    icon: 'tabler:messages',
  },
  {
    id: 'gatherings',
    name: 'Community Gatherings',
    description:
      'A Thanksgiving drive, a community dinner, and an open house that bring the whole neighborhood together.',
    icon: 'tabler:tools-kitchen-2',
  },
];
