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
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.048077032585!2d-1.2533082359759727!3d54.56790437266869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eed230e8a524d%3A0xd6f8a9c06cb0ec68!2s165%20Crescent%20Road%2C%20Middlesbrough%20TS1%204QT%2C%20UK!5e0!3m2!1sen!2sph',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=165%20Crescent%20Road%2C%20Middlesbrough%2C%20TS1%204QT%2C%20United%20Kingdom',
  },
  // TODO: Replace with the confirmed Calendly URL.
  calendlyUrl: '',
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
