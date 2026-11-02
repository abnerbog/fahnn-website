// FAHNN's official facts. Each one lives here only; pages, the header and the
// footer read from this file. See AGENTS.md ("Be FAHNN's source of truth").

const address = {
  street: '4141 S Salina St',
  city: 'Syracuse',
  region: 'NY',
  postalCode: '13205',
};

const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`;

export const ORG = {
  shortName: 'FAHNN',
  name: 'Food Access Healthy Neighborhoods Now',
  taxStatus: '501(c)(3) nonprofit',
  address,
  fullAddress,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
  email: 'fahnnsyracuse@gmail.com',
  bylawsUrl: 'https://fahnn.org/wp-content/uploads/2026/04/fahnn-by-laws_vfinal-draft.pdf',
  social: {
    instagram: 'https://www.instagram.com/healthyneighborhoodsnow/',
    facebook: 'https://www.facebook.com/fahnnsyracuse/',
  },
};

// The core facts of FAHNN's story, quoted on Our Story, Home and At a Glance.
export const STORY = {
  groceryClosedYear: 2018,
  noGroceryRadius: '2 miles',
  foundedYear: 2019,
  nonprofitSince: 'June 2026',
  groceryGrantYear: 2025,
  groceryGrantAmount: '$1.7 million',
  groceryGrantName: 'Food Access Expansion grant',
  groceryGrantee: 'Syracuse Economic Development Corporation',
  groceryStore: 'Super Imperial Market',
};

export const MARKET = {
  name: 'FAHNN Farmers Market',
  days: 'Saturdays',
  hours: '8 a.m.–2 p.m.',
  location: address.street,
  payment: 'SNAP accepted',
};
