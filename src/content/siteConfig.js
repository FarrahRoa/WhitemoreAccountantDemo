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
    hero: { src: '/assets/images/business-ideas-meeting.jpg', fallback: '/assets/images/whitemore-office-building.jpg', alt: 'Whitemore-branded graphic showing a team planning business ideas around a meeting table.', caption: 'Bring us your business ideas.', isPromoArt: true, objectPosition: 'center center' },
    about: { src: '/assets/images/whitemore-office-building.jpg', fallback: '/assets/images/business-ideas-meeting.jpg', alt: 'Whitemore Accountants branding on an office building in a town centre.', caption: 'A local team with practical business insight.', isPromoArt: true, objectPosition: 'center center' },
    services: { src: '/assets/images/accounting-services-banner.jpg', fallback: '/assets/images/business-ideas-meeting.jpg', alt: 'Whitemore-branded graphic promoting accounting, tax, and financial services.', caption: 'Expertise for your accounting and tax needs.', isPromoArt: true, objectPosition: 'center center' },
    development: { src: '/assets/images/compliance-growth.jpg', fallback: '/assets/images/whitemore-office-building.jpg', alt: 'Whitemore-branded graphic illustrating business growth and compliance support.', caption: 'Support for growth throughout the year.', isPromoArt: true, objectPosition: 'center center' },
    factSheets: { src: '/assets/images/tax-planning.jpg', fallback: '/assets/images/accounting-services-calculator.jpg', alt: 'Whitemore-branded tax-planning graphic with a calculator and tax-themed blocks.', caption: 'Practical guidance for tax decisions.', isPromoArt: true, objectPosition: 'center center' },
    appointment: { src: '/assets/images/financial-expertise.jpg', fallback: '/assets/images/business-ideas-meeting.jpg', alt: 'Whitemore-branded graphic showing advisers reviewing financial reports together.', caption: 'A conversation is a good place to start.', isPromoArt: true, objectPosition: 'center center' },
    quote: { src: '/assets/images/uk-business-tax-advice.jpg', fallback: '/assets/images/accounting-services-banner.jpg', alt: 'Whitemore-branded graphic about UK tax and business advice for company directors.', caption: 'Let’s discuss the support your business needs.', isPromoArt: true, objectPosition: 'center center' },
    contact: { src: '/assets/images/business-support-teamwork.jpg', fallback: '/assets/images/business-ideas-meeting.jpg', alt: 'Whitemore-branded graphic about supporting businesses and helping them grow.', caption: 'Here when you need a clear answer.', isPromoArt: true, objectPosition: 'center center' },
    servicePages: {
      'accounts-compliance': [{ src: '/assets/images/bookkeeping-support.jpg', fallback: '/assets/images/compliance-growth.jpg', alt: 'Whitemore-branded graphic about bookkeeping, VAT, payroll, and accounting requirements.', caption: 'Keep bookkeeping and compliance in order.', isPromoArt: true, objectPosition: 'center center' }],
      taxation: [
        { src: '/assets/images/vat-registration.jpg', fallback: '/assets/images/tax-planning.jpg', alt: 'Whitemore-branded graphic about assistance with VAT registration.', caption: 'Support with VAT registration.', isPromoArt: true, objectPosition: 'center center' },
        { src: '/assets/images/vat-returns.jpg', fallback: '/assets/images/tax-planning.jpg', alt: 'Whitemore-branded graphic about managing VAT returns.', caption: 'Support with VAT returns.', isPromoArt: true, objectPosition: 'center center' },
      ],
      'support-services': [{ src: '/assets/images/accounting-services-calculator.jpg', fallback: '/assets/images/accounting-services-banner.jpg', alt: 'Whitemore-branded graphic promoting customised accounting and financial services.', caption: 'Flexible accounting support for your business.', isPromoArt: true, objectPosition: 'center center' }],
      'business-process-outsourcing': [
        { src: '/assets/images/payroll-management.jpg', fallback: '/assets/images/bookkeeping-support.jpg', alt: 'Whitemore-branded graphic about managing payroll and timesheets.', caption: 'Reliable payroll support.', isPromoArt: true, objectPosition: 'center center' },
        { src: '/assets/images/accounting-administration.jpg', fallback: '/assets/images/compliance-growth.jpg', alt: 'Whitemore-branded graphic about accounting administration and changing legislation.', caption: 'Practical help with financial administration.', isPromoArt: true, objectPosition: 'center center' },
      ],
      'consultancy-systems-advice': [{ src: '/assets/images/business-consistency-quote.jpg', fallback: '/assets/images/financial-expertise.jpg', alt: 'Whitemore-branded business graphic featuring a quote about consistency.', caption: 'Consistent systems support better decisions.', isPromoArt: true, objectPosition: 'center center' }],
      'uk-visa-accounting': [{ src: '/assets/images/uk-tax-practice.jpg', fallback: '/assets/images/uk-business-tax-advice.jpg', alt: 'Whitemore-branded graphic featuring a tax professional and UK tax-practice guidance.', caption: 'Professional UK tax knowledge.', isPromoArt: true, objectPosition: 'center center' }],
    },
  },
  contact: {
    telephone: '+44 (0) 079 8444 4899',
    email: 'info@whitemoreaccountants.co.uk',
    address: ['165 Crescent Road', 'Middlesbrough, TS1 4QT', 'United Kingdom'],
    openingHours: 'Mon–Sat, 9:00 AM–6:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.048077032585!2d-1.2533082359759727!3d54.56790437266869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eed230e8a524d%3A0xd6f8a9c06cb0ec68!2s165%20Crescent%20Road%2C%20Middlesbrough%20TS1%204QT%2C%20UK!5e0!3m2!1sen!2sph',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=165%20Crescent%20Road%2C%20Middlesbrough%2C%20TS1%204QT%2C%20United%20Kingdom',
  },
  calendlyUrl: 'https://calendly.com/whitemoreaccountants-info/new-meeting',
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
