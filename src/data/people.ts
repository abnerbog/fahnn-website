import type { ImageMetadata } from 'astro';

// FAHNN's staff and Board of Directors, shown on Our People.
//
// Headshots are found automatically: every `src/assets/images/headshot_*` file
// appears on the page. The filename says who the person is and where they
// serve:
//
//   headshot_<group>_<role>_<first>_<last>.png
//   headshot_board_vice_president_audrey_haskell.png
//   headshot_staff_executive_director_rhonda_vesey.png
//
// `<group>` is `board` or `staff`; `<role>` is one of the keys in ROLES below.
// The name is read from the rest of the filename ("strange-cobb" →
// "Strange-Cobb"). To fix a name's spelling, add a bio, or adjust how a photo
// is cropped, add an entry to DETAILS.

export type Group = 'board' | 'staff';

interface Role {
  title: string;
  /** Lower comes first. Officers lead the board in this order. */
  rank: number;
}

const ROLES: Record<string, Role> = {
  executive_director: { title: 'Executive Director', rank: 0 },
  president: { title: 'President', rank: 1 },
  vice_president: { title: 'Vice President', rank: 2 },
  secretary: { title: 'Secretary', rank: 3 },
  treasurer: { title: 'Treasurer', rank: 4 },
  member: { title: 'Board Member', rank: 10 },
};

interface PersonDetails {
  /** Overrides the name read from the filename. */
  name?: string;
  /** A short bio, 2–3 sentences. Shown under the name once added. */
  bio?: string;
  /** Describes the photo. Defaults to "Portrait of <name>." */
  alt?: string;
  /** CSS object-position for the crop, when the face isn't centred. */
  focus?: string;
}

// Keyed by the person's slug: the part of the filename after the role.
const DETAILS: Record<string, PersonDetails> = {
  chris_travis: { focus: 'center 20%' },
  jessi_lyons: { focus: 'center 70%' },
  rhonda_vesey: {
    alt: 'Rhonda Vesey, in a dark hat and yellow scarf, holds up an old black-and-white photo of a shopping plaza parking lot.',
  },
};

export interface Person extends PersonDetails {
  slug: string;
  name: string;
  group: Group;
  role: string;
  rank: number;
  image: ImageMetadata;
  alt: string;
}

const headshots = import.meta.glob<ImageMetadata>('~/assets/images/headshot_*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

// Longest role keys first, so `vice_president` wins over `president`.
const roleKeys = Object.keys(ROLES).sort((a, b) => b.length - a.length);
const FILENAME = new RegExp(`headshot_(board|staff)_(${roleKeys.join('|')})_(.+)\\.\\w+$`);

const nameFromSlug = (slug: string) =>
  slug
    .split('_')
    .map((word) =>
      word
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-')
    )
    .join(' ');

const lastName = (name: string) => name.split(' ').at(-1) ?? name;

const PEOPLE: Array<Person> = Object.entries(headshots)
  .flatMap(([path, image]) => {
    const match = path.match(FILENAME);
    if (!match) return [];
    const [, group, roleKey, slug] = match;
    const role = ROLES[roleKey];
    const details = DETAILS[slug] ?? {};
    const name = details.name ?? nameFromSlug(slug);
    return [
      {
        slug,
        group: group as Group,
        role: role.title,
        rank: role.rank,
        image,
        ...details,
        name,
        alt: details.alt ?? `Portrait of ${name}.`,
      },
    ];
  })
  .sort((a, b) => a.rank - b.rank || lastName(a.name).localeCompare(lastName(b.name), 'en'));

export const STAFF = PEOPLE.filter((person) => person.group === 'staff');
export const BOARD = PEOPLE.filter((person) => person.group === 'board');
