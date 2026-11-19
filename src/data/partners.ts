import type { ImageMetadata } from 'astro';

// Partner logos are found automatically: every `src/assets/images/logo_partner_*`
// file appears in the home page carousel. To add a partner, drop in its logo
// and add its name below.
//
// Order: a number after the prefix sets a logo's position, so
// `logo_partner_01_city_of_syracuse.png` comes first. Numbered logos come
// before unnumbered ones, which follow alphabetically by name.

interface PartnerDetails {
  /** The partner's name, used as the logo's alt text. */
  name: string;
  /** The partner's website, once confirmed. */
  href?: string;
}

// Keyed by the logo's slug: the filename without `logo_partner_`, the order
// number, or the extension. Renumbering a logo doesn't change its slug. A logo
// with no entry still appears, named from its slug ("brady_farm" → "Brady Farm").
const DETAILS: Record<string, PartnerDetails> = {
  brady_farm: { name: 'Brady Farm' },
  city_of_syracuse: { name: 'City of Syracuse' },
  energy_smart_cny: { name: 'EnergySmart CNY' },
  food_bank: { name: 'Food Bank of Central New York' },
  hopeprint: { name: 'HopePrint' },
  one_hundred_black_men_of_syracuse: { name: '100 Black Men of Syracuse' },
  plum_and_mule: { name: 'Plum & Mule Community Market' },
  syracuse_city_school_district: { name: 'Syracuse City School District' },
  the_environmental_action_lab: { name: 'The Environmental Action Lab' },
};

export interface Partner extends PartnerDetails {
  slug: string;
  logo: ImageMetadata;
  /** Position from the filename's number, if it has one. */
  order?: number;
}

const logos = import.meta.glob<ImageMetadata>('~/assets/images/logo_partner_*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

const FILENAME = /logo_partner_(?:(\d+)_)?(.+)\.\w+$/;

const nameFromSlug = (slug: string) =>
  slug
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const PARTNERS: Array<Partner> = Object.entries(logos)
  .flatMap(([path, logo]) => {
    const match = path.match(FILENAME);
    if (!match) return [];
    const [, number, slug] = match;
    const details = DETAILS[slug] ?? { name: nameFromSlug(slug) };
    return [{ slug, logo, order: number ? Number(number) : undefined, ...details }];
  })
  .sort(
    (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.name.localeCompare(b.name, 'en', { numeric: true })
  );
