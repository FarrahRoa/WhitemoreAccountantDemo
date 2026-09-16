export const siteConfig = {
  companyName: 'Whitemore Accountants Ltd',
  tagline: 'Accurate. Reliable. Trusted.',
  logo: {
    full: '/assets/whitemore-accountants-transparent-logo.png',
    lockup: '/assets/whitemore-accountants-transparent-logo.png',
    favicon: '/assets/whitemore-wa-green-favicon.png',
    alt: 'Whitemore Accountants Ltd – Accurate, Reliable, Trusted.',
  },
  images: {
    hero: { src: '/assets/images/home-team-meeting.jpg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Business advisers reviewing financial information together at a meeting table.', caption: 'Clear advice starts with a clear conversation.', objectPosition: 'center center' },
    about: { src: '/assets/images/about-financial-consultation.jpeg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Accountant reviewing financial documents at a consultation desk.', caption: 'Practical support for the decisions ahead.', objectPosition: 'center center' },
    services: { src: '/assets/images/services-document-review.jpeg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Professional reviewing a document with financial charts and a calculator nearby.', caption: 'Expertise that works at every stage.', objectPosition: 'center center' },
    development: { src: '/assets/images/business-growth.jpg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Business growth represented through financial planning and measurable progress.', caption: 'Make informed decisions with confidence.', objectPosition: 'center center' },
    factSheets: { src: '/assets/images/financial-planning-desk.jpeg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Financial planning documents and charts arranged on an accountant\'s desk.', caption: 'Useful guidance for better-informed decisions.', objectPosition: 'center center' },
    appointment: { src: '/assets/images/about-financial-consultation.jpeg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Accountant discussing financial information during a professional consultation.', caption: 'A conversation is a good place to start.', objectPosition: 'center 38%' },
    quote: { src: '/assets/images/euro-cash-flow.jpeg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Euro notes and coins representing a clear view of business finances.', caption: 'A clearer picture starts with the right questions.', objectPosition: 'center center' },
    contact: { src: '/assets/images/financial-planning-desk.jpeg', fallback: '/assets/images/hero-accounting-consultation.jpg', alt: 'Accountant reviewing financial reports with a pen, charts, and a laptop.', caption: 'Here when you need a clear answer.', objectPosition: 'center center' },
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
