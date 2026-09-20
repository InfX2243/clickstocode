export const chapters = 14;
export const ENTRY_START = 0.006;
export const ENTRY_END = 0.032;
export const STORY_START = 0.008;
export const STORY_HANDOFF_END = 0.055;
export const STORY_END = 0.975;

export const MEETUP_STATUS = 'RSVP FOR THE EVENT';
export const MEETUP_EVENT_URL =
  import.meta.env?.VITE_MEETUP_EVENT_URL ||
  'https://www.meetup.com/aws-sbg-at-m-h-saboo-siddik-college-of-engineering/events/316594304/';
export const EVENT_DATE = '24 September 2026';
export const EVENT_TIME = '9:30 AM – 12:00 PM';
export const VENUE = '3rd Floor, Seminar Hall, MHSSCE';
export const CHECKIN_LOCATION = 'Ground Floor · Near the Staff Lift';
export const LEARNER_LAB_GUIDE_URL = 'https://d3fzag6u5cy19y.cloudfront.net/enrollment-guide';
export const SPONSOR_EMAIL = 'awssbg@mhssce.ac.in';
export const SPONSOR_MAILTO =
  'mailto:' +
  SPONSOR_EMAIL +
  '?subject=' +
  encodeURIComponent('Sponsor / Partnership Enquiry — AWS From Clicks to Code') +
  '&body=' +
  encodeURIComponent(
    'Hello AWS Student Builder Group at MHSSCE,\n\nI am [YOUR NAME] from [ORGANIZATION / COMMUNITY].\n\nI would like to discuss [YOUR SPONSORSHIP / PARTNERSHIP IDEA].\n\nYou can reach me at [YOUR EMAIL / PHONE].\n\nThank you,\n[YOUR NAME]'
  );

export const SITE_URL =
  import.meta.env?.VITE_SITE_URL || 'https://clickstocode.awssbg-mhssce.in';
export const PARENT_ORG_URL =
  import.meta.env?.VITE_PARENT_ORG_URL || 'https://awssbg-mhssce.in';
export const COLLEGE_URL = 'https://mhssce.ac.in/';
export const OG_IMAGE_URL = `${SITE_URL}/images/og-image.png`;
export const EVENT_NAME = 'AWS From Clicks to Code';
export const ORGANIZER_NAME =
  'AWS Student Builder Group at M.H. Saboo Siddik College of Engineering';

export const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' +
  encodeURIComponent('AWS From Clicks to Code') +
  '&dates=20260924T040000Z/20260924T063000Z' +
  '&details=' +
  encodeURIComponent(
    'Join us for AWS From Clicks to Code — a hands-on session exploring how ideas can move from simple clicks to real-world code with AWS. Discover practical cloud concepts, developer tools, and workflows while learning how AWS can help you build and bring applications to life.'
  ) +
  '&location=' +
  encodeURIComponent('3rd Floor, Seminar Hall, MHSSCE, Byculla, Mumbai') +
  '&ctz=Asia%2FKolkata';


