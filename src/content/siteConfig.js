export const siteConfig = {
  companyName: 'Whitemore Accountants Ltd',
  tagline: 'Accurate. Reliable. Trusted.',
  logo: {
    full: '/assets/whitemore-accountants-transparent-logo.png',
    lockup: '/assets/whitemore-accountants-transparent-logo.png',
    favicon: '/assets/whitemore-wa-green-favicon.png',
    alt: 'Whitemore Accountants Ltd – Accurate, Reliable, Trusted.',
  },
  contact: {
    telephone: '+44 (0) 1642 919 040',
    email: 'info@whitemoreaccountants.co.uk',
    address: ['165 Crescent Road', 'Middlesbrough, TS1 4QT', 'United Kingdom'],
    openingHours: 'Mon–Sat, 9:00 AM–6:00 PM',
  },
  // TODO: Replace with the confirmed Calendly URL.
  calendlyUrl: '',
  // TODO: Replace with the confirmed Google Maps embed URL.
  googleMapsUrl: '',
  // TODO: Replace with the confirmed online-payment URL.
  onlinePaymentUrl: '',
  socialLinks: [
    // TODO: Replace # with confirmed social profile URLs.
    { label: 'Facebook', href: '#' },
    { label: 'X / Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  navigation: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Our Services', dropdown: true },
    { to: '/fact-sheets', label: 'Fact Sheets' },
    { to: '/appointment', label: 'Appointment', outline: true },
    { to: '/get-a-quote', label: 'Get a Quote', primary: true },
    { to: '/contact', label: 'Contact Us' },
  ],
};
