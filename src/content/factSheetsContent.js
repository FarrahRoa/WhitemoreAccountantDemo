export const factCategories = [
  'Capital Taxes',
  'Corporate and Business Tax',
  'Employment and Related Matters',
  'Employment Issues (Tax)',
  'General Business',
  'ICT',
  'Pensions',
  'Personal Tax',
  'Specialist Areas',
  'Starting Up in Business',
  'VAT',
];

const sharedGuidance = {
  heading: 'How Whitemore can help',
  text: 'Every situation is different. Our team can help you understand how the guidance applies to your circumstances and what information you may need to prepare.',
};

const taxAdvisoryNote = 'Tax rules can be complex and individual circumstances vary. Please speak to our team for advice tailored to your position.';
const generalAdvisoryNote = 'Business and financial needs vary between organisations. Please speak to our team for advice tailored to your position.';
const lastReviewed = 'To be confirmed';

export const factSheetContent = {
  disclaimer: 'The information provided in these fact sheets is general guidance and should not be treated as advice tailored to your circumstances. Tax rules and regulations may change. Please speak with Whitemore Accountants Ltd before making financial or business decisions.',
  lastReviewed,
  sheets: {
    'capital-taxes': {
      title: 'Capital Taxes',
      category: 'Capital Taxes',
      lastReviewed,
      introduction: 'Capital taxes may arise when assets are sold, transferred, gifted or passed on. This fact sheet explains the key considerations, the records you may need, and how careful planning can help you understand and meet your tax obligations.',
      content: [sharedGuidance],
      advisoryNote: taxAdvisoryNote,
    },
    'corporate-and-business-tax': {
      title: 'Corporate and Business Tax',
      category: 'Corporate and Business Tax',
      lastReviewed,
      introduction: 'Businesses need to understand how trading results, allowable costs and other financial decisions affect their tax position. This guide outlines the records and reporting to consider, and why planning ahead can help owners prepare for returns and payments without relying on last-minute estimates.',
      content: [sharedGuidance],
      advisoryNote: taxAdvisoryNote,
    },
    'employment-and-related-matters': {
      title: 'Employment and Related Matters',
      category: 'Employment and Related Matters',
      lastReviewed,
      introduction: 'Employing people affects budgets, payroll administration and the records a business needs to maintain. This fact sheet highlights financial considerations when bringing staff into a business or managing an existing team, so employers can organise information and seek appropriate advice when circumstances change.',
      content: [sharedGuidance],
      advisoryNote: generalAdvisoryNote,
    },
    'employment-issues-(tax)': {
      title: 'Employment Issues (Tax)',
      category: 'Employment Issues (Tax)',
      lastReviewed,
      introduction: 'Pay, benefits and work-related expenses can have tax implications for both employers and employees. This guide explains why accurate payroll information and supporting records matter, and outlines issues to consider when reviewing how employment arrangements are reported.',
      content: [sharedGuidance],
      advisoryNote: taxAdvisoryNote,
    },
    'general-business': {
      title: 'General Business',
      category: 'General Business',
      lastReviewed,
      introduction: 'Sound financial information helps business owners assess performance, plan spending and make informed decisions. This fact sheet considers the value of keeping orderly records, reviewing cash flow and preparing useful reports, whether you are managing daily operations or planning for the next stage.',
      content: [sharedGuidance],
      advisoryNote: generalAdvisoryNote,
    },
    ict: {
      title: 'ICT',
      category: 'ICT',
      lastReviewed,
      introduction: 'Information and communication technology can shape how a business captures transactions, stores records and shares financial information. This guide considers the accounting implications of choosing and using digital systems, including data quality, access controls and keeping processes suitable as the organisation changes.',
      content: [sharedGuidance],
      advisoryNote: generalAdvisoryNote,
    },
    pensions: {
      title: 'Pensions',
      category: 'Pensions',
      lastReviewed,
      introduction: 'Pension decisions can affect an individual’s longer-term financial planning and a business’s ongoing costs. This fact sheet sets out the value of understanding contribution records, payment arrangements and relevant reporting, and encourages careful consideration before acting on pension-related financial information.',
      content: [sharedGuidance],
      advisoryNote: taxAdvisoryNote,
    },
    'personal-tax': {
      title: 'Personal Tax',
      category: 'Personal Tax',
      lastReviewed,
      introduction: 'A change in income, investments or personal circumstances may affect an individual’s tax reporting and payment responsibilities. This guide outlines why complete records are useful when reviewing income, expenses and available reliefs, and why it helps to plan for filing and payment dates.',
      content: [sharedGuidance],
      advisoryNote: taxAdvisoryNote,
    },
    'specialist-areas': {
      title: 'Specialist Areas',
      category: 'Specialist Areas',
      lastReviewed,
      introduction: 'Some financial matters call for more focused information than routine bookkeeping or year-end reporting can provide. This fact sheet explains the importance of identifying the relevant records, understanding the questions that need answering and seeking suitably informed guidance before making decisions.',
      content: [sharedGuidance],
      advisoryNote: generalAdvisoryNote,
    },
    'starting-up-in-business': {
      title: 'Starting Up in Business',
      category: 'Starting Up in Business',
      lastReviewed,
      introduction: 'Starting a business involves choices about its structure, funding and the way financial records will be kept. This guide highlights the value of preparing realistic forecasts, organising registrations and establishing sound bookkeeping early, helping new owners understand the information needed to manage their venture.',
      content: [sharedGuidance],
      advisoryNote: generalAdvisoryNote,
    },
    vat: {
      title: 'VAT',
      category: 'VAT',
      lastReviewed,
      introduction: 'VAT can influence pricing, cash flow and the way sales and purchases are recorded. This fact sheet covers the importance of keeping complete transaction evidence, maintaining clear VAT records and preparing returns carefully, so a business can review its position and stay organised around its reporting responsibilities.',
      content: [sharedGuidance],
      advisoryNote: taxAdvisoryNote,
    },
  },
};
