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
  /** Sign-up page for FAHNN's email list. */
  newsletterUrl: 'https://eepurl.com/FMel2fvjMe',
};

// FAHNN's Zeffy donation form. Every link to /donate opens it as a popup
// (src/components/common/ZeffyModal.astro).
export const DONATE = {
  zeffyFormUrl: 'https://www.zeffy.com/embed/donation-form/the-valley-southside-breathes-again',
};

// FAHNN's public Google Calendar of markets and events, embedded on Get Involved.
const calendarId = 'eb2786cfa9f46c80ec5bdd311d0c6c9c3434fd76f53743ef002f395f797999a7@group.calendar.google.com';
const calendarEmbed = (mode: 'MONTH' | 'AGENDA') =>
  `https://calendar.google.com/calendar/embed?${new URLSearchParams({
    src: calendarId,
    ctz: 'America/New_York',
    mode,
    showTitle: '0',
    showPrint: '0',
    showTabs: '0',
    showCalendars: '0',
  })}`;

export const CALENDAR = {
  /** Month grid, for wider screens. */
  embedMonthUrl: calendarEmbed('MONTH'),
  /** A simple list of upcoming events, easier to read on a phone. */
  embedAgendaUrl: calendarEmbed('AGENDA'),
  /** The full calendar in its own tab. */
  viewUrl: `https://calendar.google.com/calendar/embed?${new URLSearchParams({ src: calendarId, ctz: 'America/New_York' })}`,
  /** Adds the calendar to a visitor's own Google Calendar. */
  subscribeUrl: `https://calendar.google.com/calendar/render?${new URLSearchParams({ cid: calendarId })}`,
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
  /**
   * The City of Syracuse's Valley Plaza Grocery Store project page: monthly
   * project updates, a fact sheet, and community meeting slides. It is the
   * source of truth for project news until FAHNN takes it over; when that
   * happens, change this one URL and every link on the site follows.
   */
  groceryUpdatesUrl:
    'https://www.syr.gov/Projects/Active-Projects/NBD-Projects/Commercial-Projects/Valley-Plaza-Grocery-Store',
};

export const MARKET = {
  name: 'FAHNN Farmers Market',
  days: 'Saturdays',
  hours: '8 a.m.–2 p.m.',
  location: address.street,
  payment: 'SNAP accepted at participating vendors',
};
