import type { Lang, PageKey } from './routes';

type Meta = { title: string; description: string };
type QA = { q: string; a: string };

export interface Content {
  meta: Record<PageKey, Meta>;
  nav: { approach: string; expertise: string; pricing: string; faq: string; cta: string; menuLabel: string; langLabel: string };
  common: {
    plan: string; seePricing: string; waText: string; whatsapp: string; email: string; phone: string;
    footerLegal: string; footerLinks: { privacy: string; bonaire: string; contact: string };
    example: string;
  };
  home: {
    eyebrow: string; h1a: string; h1b: string; lede: string; note: string;
    statement: string; rows: { date: string; desc: string; amount: string; status: 'ok' | 'missing' | 'review' }[];
    statusOk: string; statusMissing: string; statusReview: string;
    bandTitle: string; bandText: string;
    week: { title: string; hint: string; days: string[]; before: string[]; after: string[][]; legend: string[] };
    approachTitleA: string; approachMark: string; approachTitleB: string;
    weTag: string; weTitle: string; weItems: string[];
    youTag: string; youTitle: string; youItems: string[];
    expEyebrow: string; expTitleA: string; expMark: string; expLede: string;
    expCards: { title: string; text: string }[];
    stepsTitle: string; steps: { title: string; text: string }[];
    pricingEyebrow: string; pricingTitleA: string; pricingMark: string; pricingLede: string;
    ctaTitle: string;
  };
  pricing: {
    bundle: string; perMonth: string; included: string; extra: string; footnote: string;
    h1: string; lede: string;
    countTitle: string; countItems: string[]; countNot: string;
    exampleTitle: string; exampleText: string;
    termsTitle: string; terms: string[];
  };
  faq: { h1: string; lede: string; items: QA[] };
  bonaire: { h1: string; lede: string; points: { title: string; text: string }[]; closing: string };
  contact: { h1: string; lede: string; waTitle: string; waText: string; mailTitle: string; mailText: string; nextTitle: string; next: string[]; location: string };
  privacy: { h1: string; updated: string; sections: { title: string; text: string }[] };
}

const nl: Content = {
  meta: {
    home: { title: 'Ledgerwerk — Odoo-boekhouding uitbesteden voor accountantskantoren', description: 'Ledgerwerk neemt het routinewerk in Odoo over voor accountantskantoren: inkoopfacturen coderen, banklijnen afletteren en bonnen verwerken. Vanuit Bonaire, per boeking afgerekend.' },
    pricing: { title: 'Prijzen — Ledgerwerk, Odoo-boekhouding per boeking', description: 'Bundels vanaf $120 per maand voor 100 boekingen. Het volume van al uw klanten telt samen. Maandelijks opzegbaar.' },
    faq: { title: 'Veelgestelde vragen — Ledgerwerk', description: 'Antwoorden voor accountantskantoren: hoe Ledgerwerk in de Odoo van uw klant werkt, wat als boeking telt, vertrouwelijkheid en hoe u begint.' },
    bonaire: { title: 'Odoo-boekhouding op Bonaire — Ledgerwerk', description: 'Hulp met Odoo-boekhouding op Bonaire voor administratie- en accountantskantoren. Lokaal, in dezelfde tijdzone, met kennis van ABB en BES-praktijk.' },
    contact: { title: 'Contact — Ledgerwerk', description: 'Plan een kennismaking met Ledgerwerk via WhatsApp of e-mail. Gevestigd in Kralendijk, Bonaire.' },
    privacy: { title: 'Privacyverklaring — Ledgerwerk', description: 'Hoe Ledgerwerk omgaat met persoonsgegevens van contactpersonen en met gegevens die wij in opdracht van accountantskantoren verwerken.' },
  },
  nav: { approach: 'Aanpak', expertise: 'Expertise', pricing: 'Prijzen', faq: 'Vragen', cta: 'Kennismaken', menuLabel: 'Hoofdmenu', langLabel: 'Taal' },
  common: {
    plan: 'Plan een kennismaking', seePricing: 'Bekijk de prijzen', waText: 'Hallo Ledgerwerk, ik wil graag kennismaken.',
    whatsapp: 'WhatsApp ons', email: 'E-mail', phone: 'Telefoon',
    footerLegal: 'Ledgerwerk is een handelsnaam van Nefar BV, Kralendijk, Bonaire · Geen accountantskantoor · Niet verbonden aan Odoo S.A.',
    footerLinks: { privacy: 'Privacy', bonaire: 'Odoo-boekhouding Bonaire', contact: 'Contact' },
    example: 'voorbeeld',
  },
  home: {
    eyebrow: 'Voor accountantskantoren', h1a: 'Wij boeken.', h1b: 'adviseert.',
    lede: 'Coderen, afletteren, bonnetjes zoeken: urenlang werk dat geen klant ziet. Ledgerwerk neemt het over in de Odoo-databases van uw klanten, zodat u tijd overhoudt voor wat wél telt.',
    note: 'dit doen wij',
    statement: 'Bankafschrift',
    rows: [
      { date: '14-10', desc: 'Kantoorartikelen', amount: '−86,40', status: 'ok' },
      { date: '14-10', desc: 'Ontvangst factuur 0412', amount: '1.250,00', status: 'ok' },
      { date: '13-10', desc: 'Elektriciteit september', amount: '−312,75', status: 'ok' },
      { date: '13-10', desc: 'Kaartbetaling bouwmarkt', amount: '−58,20', status: 'missing' },
      { date: '12-10', desc: 'Overboeking onbekend', amount: '−900,00', status: 'review' },
    ],
    statusOk: 'Afgeletterd', statusMissing: 'Bon ontbreekt', statusReview: 'Naar review',
    bandTitle: 'Uw uren terug.',
    bandText: 'Het werk dat uw avonden opeet, doen wij: in de Odoo-database van uw klant, met een eigen gebruiker, elke boeking herleidbaar. U doet weer waarvoor u accountant werd.',
    week: {
      title: 'Uw week', hint: 'scroll maar…', days: ['Ma', 'Di', 'Wo', 'Do', 'Vr'],
      before: ['Afletteren', 'Coderen', 'Bonnen'],
      after: [['Advies', 'Klant', 'Advies'], ['Nieuwe klant', 'Advies', 'Aangifte'], ['Advies', 'Klant', 'Advies'], ['Afsluiting', 'Nieuwe klant', 'Advies'], ['Advies', 'Strand', 'Strand']],
      legend: ['Boekhoudwerk', 'Advies', 'Klanten', 'Aangiften', 'Vrij'],
    },
    approachTitleA: 'Het routinewerk gaat de', approachMark: 'deur uit.', approachTitleB: 'De klant blijft bij u.',
    weTag: 'Wij', weTitle: 'Wat wij van uw bureau halen',
    weItems: ['Inkoopfacturen en creditnota’s coderen', 'Banklijnen afletteren', 'Onkostenbonnen verwerken', 'Uitzoeken wat er ontbreekt'],
    youTag: 'U', youTitle: 'Waar uw uren naartoe gaan',
    youItems: ['Advies aan uw klanten', 'Nieuwe klanten binnenhalen', 'Aangiften en jaarafsluiting', 'Of gewoon: het strand'],
    expEyebrow: 'Wie u inhuurt', expTitleA: 'Meer dan op ‘Afletteren’', expMark: 'klikken.',
    expLede: 'Wij zijn geen accountants. Wel mensen die Odoo en een balans door en door kennen.',
    expCards: [
      { title: 'Odoo van binnenuit', text: 'Wij richten Odoo-boekhoudingen in en repareren ze: rekeningschema, belastingcodes, afletterregels.' },
      { title: 'Financieel onderlegd', text: 'Wij lezen een balans. Zit iets scheef in de inrichting, dan hoort u het.' },
      { title: 'Automatisering', text: 'Regels en scripts via de Odoo-API. Wat een machine kan, doet geen mens.' },
      { title: 'BES-praktijk', text: 'ABB, loonbelasting en Caribische banken kennen wij van dichtbij.' },
    ],
    stepsTitle: 'Zo werkt het',
    steps: [
      { title: 'Uitnodigen', text: 'U maakt ons gebruiker in de Odoo-database van uw klant.' },
      { title: 'Inrichten', text: 'Wij leren rekeningschema, leveranciers en belastingcodes in. Eenmalig.' },
      { title: 'Verwerken', text: 'Elke werkdag. Bij twijfel kijkt een mens mee, niet de software alleen.' },
      { title: 'Melden', text: 'U krijgt één lijst met wat ontbreekt. De rest is gedaan.' },
    ],
    pricingEyebrow: 'Prijzen', pricingTitleA: 'Per boeking,', pricingMark: 'niet per uur.',
    pricingLede: 'Het volume van al uw klanten telt samen. Eén boeking is één geboekt document of één afgeletterde banklijn.',
    ctaTitle: 'Minder uren in Odoo. Meer bij uw klanten.',
  },
  pricing: {
    bundle: 'Bundel', perMonth: 'per maand', included: 'Boekingen inbegrepen', extra: 'Extra boeking',
    footnote: 'Set-up $150 per klantdatabase, eenmalig · Prijzen in USD, exclusief ABB · Maandelijks opzegbaar',
    h1: 'Per boeking, niet per uur.',
    lede: 'U betaalt voor wat er geboekt is, niet voor de tijd die het kost. Het volume van al uw klanten telt samen in één bundel per kantoor.',
    countTitle: 'Wat telt als één boeking',
    countItems: ['Eén geboekte inkoopfactuur of creditnota', 'Eén verwerkte onkostenbon', 'Eén afgeletterde banklijn'],
    countNot: 'Losse journaalregels tellen niet apart: een factuur met tien regels is één boeking.',
    exampleTitle: 'Rekenvoorbeeld',
    exampleText: 'Een kantoor met drie klanten in Odoo komt samen op 380 boekingen per maand. Met bundel M betaalt het $300 plus 80 extra boekingen à $1,20: $396 per maand.',
    termsTitle: 'Afspraken',
    terms: ['Eenmalige set-up van $150 per klantdatabase: rekeningschema, leveranciers en belastingcodes inleren.', 'Maandelijks opzegbaar, maandelijks van bundel wisselen.', 'Prijzen in USD, exclusief ABB.', 'Geheimhouding en verwerkersovereenkomst standaard inbegrepen.'],
  },
  faq: {
    h1: 'Veelgestelde vragen', lede: 'Wat accountantskantoren ons het vaakst vragen.',
    items: [
      { q: 'Is Ledgerwerk een accountantskantoor?', a: 'Nee. Wij doen het routinematige boekwerk in Odoo in opdracht van uw kantoor: inkoopfacturen coderen, banklijnen afletteren en bonnen verwerken. Aangiften, jaarafsluiting, controle en advies blijven bij u.' },
      { q: 'Werken jullie in de Odoo van onze klant?', a: 'Ja. U geeft ons een eigen gebruiker in de Odoo-database van uw klant. Zo is elke boeking die wij maken terug te vinden in de historiek, en kunt u de toegang op elk moment intrekken.' },
      { q: 'Met welke Odoo werken jullie?', a: 'Met Odoo Enterprise en Community, online of op een eigen server, zolang wij een gebruiker met boekhoudrechten krijgen. Andere boekhoudpakketten doen wij bewust niet.' },
      { q: 'Wat telt als één boeking?', a: 'Eén geboekt document (inkoopfactuur, creditnota of onkostenbon) of één afgeletterde banklijn. Losse journaalregels tellen niet apart.' },
      { q: 'Hoe gaan jullie om met vertrouwelijkheid?', a: 'Wij werken onder uw naam en tekenen geheimhouding en een verwerkersovereenkomst. Wij nemen nooit zelf contact op met uw klanten en werven hen niet: dat staat in het contract.' },
      { q: 'Wat gebeurt er als iets niet klopt of ontbreekt?', a: 'Wij boeken niet op gevoel. Twijfelgevallen gaan naar een mens, en wat ontbreekt staat op één lijst die u elke werkdag krijgt. Zit er iets scheef in de inrichting van Odoo, dan melden wij dat.' },
      { q: 'Hoe snel verwerken jullie?', a: 'Elke werkdag. Wat binnenkomt, wordt dezelfde of de volgende werkdag verwerkt.' },
      { q: 'Werken jullie alleen op Bonaire?', a: 'Wij zijn gevestigd op Bonaire en werken op afstand. Kantoren elders in het Caribisch gebied kunnen dus ook met ons werken.' },
      { q: 'Hoe beginnen we?', a: 'Stuur een WhatsApp of mail voor een kennismaking. Daarna starten we met één klantdatabase: u geeft toegang, wij richten in, en de eerste maand ziet u precies wat wij doen. Maandelijks opzegbaar.' },
    ],
  },
  bonaire: {
    h1: 'Odoo-boekhouding op Bonaire',
    lede: 'Werkt uw kantoor op Bonaire met klanten in Odoo? Ledgerwerk neemt het routinewerk over, lokaal en in uw eigen tijdzone.',
    points: [
      { title: 'Lokaal', text: 'Gevestigd in Kralendijk. Een kennismaking kan gewoon bij een kop koffie.' },
      { title: 'Kennis van de BES', text: 'ABB, loonbelasting, USD en de Caribische banken: wij kennen de praktijk van het eiland.' },
      { title: 'Capaciteit zonder werving', text: 'Personeel vinden en naar het eiland halen is lastig. Wij vangen het boekwerk op, ook in drukke perioden.' },
      { title: 'Alleen Odoo', text: 'Wij doen één pakket, en dat door en door: van afletterregels tot voorraadwaardering.' },
    ],
    closing: 'Benieuwd of het voor uw kantoor werkt? Een kennismaking is vrijblijvend.',
  },
  contact: {
    h1: 'Kennismaken', lede: 'Een kort gesprek is genoeg om te zien of Ledgerwerk bij uw kantoor past.',
    waTitle: 'WhatsApp', waText: 'De snelste weg. Eén klik en u heeft ons aan de lijn.',
    mailTitle: 'E-mail', mailText: 'Liever per mail? Wij antwoorden binnen één werkdag.',
    nextTitle: 'Wat er daarna gebeurt',
    next: ['Kennismaking: wat doet u in Odoo, waar loopt het vast?', 'Start met één klantdatabase.', 'Na een maand ziet u precies wat het oplevert.'],
    location: 'Kralendijk, Bonaire',
  },
  privacy: {
    h1: 'Privacyverklaring', updated: 'Laatst bijgewerkt: oktober 2026',
    sections: [
      { title: 'Wie wij zijn', text: 'Ledgerwerk is een handelsnaam van Nefar BV, gevestigd in Kralendijk, Bonaire. Vragen over privacy stuurt u naar office@ledgerwerk.com.' },
      { title: 'Gegevens van contactpersonen', text: 'Neemt u contact met ons op via e-mail, WhatsApp of telefoon, dan gebruiken wij uw naam, contactgegevens en bericht alleen om u te antwoorden en onze dienstverlening af te spreken. Wij bewaren deze gegevens niet langer dan nodig voor de zakelijke relatie en de wettelijke bewaartermijnen.' },
      { title: 'Gegevens die wij in opdracht verwerken', text: 'Voor accountantskantoren werken wij in de Odoo-databases van hun klanten. Daarbij zijn wij verwerker en het kantoor of zijn klant verwerkingsverantwoordelijke. Dit leggen wij vast in een verwerkersovereenkomst. Wij gebruiken deze gegevens uitsluitend voor de opdracht.' },
      { title: 'Deze website', text: 'Deze website plaatst geen trackingcookies en gebruikt geen advertentienetwerken. Lettertypen worden van onze eigen server geladen.' },
      { title: 'Uw rechten', text: 'U kunt ons vragen welke gegevens wij van u hebben, en ze laten corrigeren of verwijderen. Stuur daarvoor een mail naar office@ledgerwerk.com.' },
    ],
  },
};

const en: Content = {
  meta: {
    home: { title: 'Ledgerwerk — Outsourced Odoo bookkeeping for accounting firms', description: 'Ledgerwerk takes routine Odoo work off accounting firms: coding vendor bills, reconciling bank lines and processing receipts. Based in Bonaire, billed per entry.' },
    pricing: { title: 'Pricing — Ledgerwerk, Odoo bookkeeping per entry', description: 'Bundles from $120 per month for 100 entries. Volume across all your clients counts together. Cancel monthly.' },
    faq: { title: 'FAQ — Ledgerwerk', description: 'Answers for accounting firms: how Ledgerwerk works inside your client’s Odoo, what counts as an entry, confidentiality and how to start.' },
    bonaire: { title: 'Odoo bookkeeping in Bonaire — Ledgerwerk', description: 'Odoo bookkeeping support in Bonaire for accounting and administration firms. Local, same time zone, familiar with ABB and BES practice.' },
    contact: { title: 'Contact — Ledgerwerk', description: 'Book an introduction with Ledgerwerk via WhatsApp or email. Based in Kralendijk, Bonaire.' },
    privacy: { title: 'Privacy statement — Ledgerwerk', description: 'How Ledgerwerk handles personal data of contacts and data we process on behalf of accounting firms.' },
  },
  nav: { approach: 'Approach', expertise: 'Expertise', pricing: 'Pricing', faq: 'FAQ', cta: 'Get in touch', menuLabel: 'Main menu', langLabel: 'Language' },
  common: {
    plan: 'Book an introduction', seePricing: 'See pricing', waText: 'Hello Ledgerwerk, I would like to get acquainted.',
    whatsapp: 'WhatsApp us', email: 'Email', phone: 'Phone',
    footerLegal: 'Ledgerwerk is a trade name of Nefar BV, Kralendijk, Bonaire · Not an accounting firm · Not affiliated with Odoo S.A.',
    footerLinks: { privacy: 'Privacy', bonaire: 'Odoo bookkeeping Bonaire', contact: 'Contact' },
    example: 'example',
  },
  home: {
    eyebrow: 'For accounting firms', h1a: 'We book.', h1b: 'advise.',
    lede: 'Coding, reconciling, chasing receipts: hours of work no client ever sees. Ledgerwerk takes it over inside your clients’ Odoo databases, so you have time for what actually matters.',
    note: 'this is what we do',
    statement: 'Bank statement',
    rows: [
      { date: '10/14', desc: 'Office supplies', amount: '−86.40', status: 'ok' },
      { date: '10/14', desc: 'Invoice 0412 received', amount: '1,250.00', status: 'ok' },
      { date: '10/13', desc: 'Electricity September', amount: '−312.75', status: 'ok' },
      { date: '10/13', desc: 'Card payment hardware store', amount: '−58.20', status: 'missing' },
      { date: '10/12', desc: 'Unknown transfer', amount: '−900.00', status: 'review' },
    ],
    statusOk: 'Reconciled', statusMissing: 'Receipt missing', statusReview: 'To review',
    bandTitle: 'Your hours back.',
    bandText: 'The work that eats your evenings, we do: inside your client’s Odoo database, with our own user, every entry traceable. You get back to why you became an accountant.',
    week: {
      title: 'Your week', hint: 'keep scrolling…', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      before: ['Reconcile', 'Coding', 'Receipts'],
      after: [['Advice', 'Client', 'Advice'], ['New client', 'Advice', 'Tax return'], ['Advice', 'Client', 'Advice'], ['Year-end', 'New client', 'Advice'], ['Advice', 'Beach', 'Beach']],
      legend: ['Bookkeeping', 'Advice', 'Clients', 'Tax returns', 'Free'],
    },
    approachTitleA: 'The routine work goes', approachMark: 'out the door.', approachTitleB: 'The client stays with you.',
    weTag: 'We', weTitle: 'What we take off your desk',
    weItems: ['Coding vendor bills and credit notes', 'Reconciling bank lines', 'Processing expense receipts', 'Tracking down what’s missing'],
    youTag: 'You', youTitle: 'Where your hours go instead',
    youItems: ['Advising your clients', 'Winning new clients', 'Tax returns and year-end', 'Or simply: the beach'],
    expEyebrow: 'Who you hire', expTitleA: 'More than clicking', expMark: '‘Reconcile’.',
    expLede: 'We are not accountants. We are people who know Odoo and a balance sheet inside out.',
    expCards: [
      { title: 'Odoo from the inside', text: 'We set up and repair Odoo accounting: chart of accounts, tax codes, reconciliation models.' },
      { title: 'Financially literate', text: 'We read a balance sheet. If something in the setup is off, you’ll hear about it.' },
      { title: 'Automation', text: 'Rules and scripts through the Odoo API. What a machine can do, no human does.' },
      { title: 'BES practice', text: 'ABB, payroll tax and Caribbean banks are familiar ground.' },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Invite', text: 'You add us as a user in your client’s Odoo database.' },
      { title: 'Set up', text: 'We learn the chart of accounts, vendors and tax codes. Once.' },
      { title: 'Process', text: 'Every working day. When in doubt, a human checks, not just the software.' },
      { title: 'Report', text: 'You get one list of what’s missing. The rest is done.' },
    ],
    pricingEyebrow: 'Pricing', pricingTitleA: 'Per entry,', pricingMark: 'not per hour.',
    pricingLede: 'Volume across all your clients counts together. One entry is one posted document or one reconciled bank line.',
    ctaTitle: 'Fewer hours in Odoo. More time with your clients.',
  },
  pricing: {
    bundle: 'Bundle', perMonth: 'per month', included: 'Entries included', extra: 'Extra entry',
    footnote: 'Set-up $150 per client database, one-off · Prices in USD, excluding ABB · Cancel monthly',
    h1: 'Per entry, not per hour.',
    lede: 'You pay for what gets booked, not for the time it takes. Volume across all your clients adds up in one bundle per firm.',
    countTitle: 'What counts as one entry',
    countItems: ['One posted vendor bill or credit note', 'One processed expense receipt', 'One reconciled bank line'],
    countNot: 'Individual journal lines don’t count separately: a bill with ten lines is one entry.',
    exampleTitle: 'Example',
    exampleText: 'A firm with three clients in Odoo totals 380 entries a month. On bundle M it pays $300 plus 80 extra entries at $1.20: $396 a month.',
    termsTitle: 'Terms',
    terms: ['One-off set-up of $150 per client database: learning the chart of accounts, vendors and tax codes.', 'Cancel monthly, switch bundles monthly.', 'Prices in USD, excluding ABB.', 'Confidentiality and a data processing agreement included as standard.'],
  },
  faq: {
    h1: 'Frequently asked questions', lede: 'What accounting firms ask us most.',
    items: [
      { q: 'Is Ledgerwerk an accounting firm?', a: 'No. We do routine bookkeeping in Odoo on behalf of your firm: coding vendor bills, reconciling bank lines and processing receipts. Tax returns, year-end, assurance and advice stay with you.' },
      { q: 'Do you work inside our client’s Odoo?', a: 'Yes. You give us our own user in your client’s Odoo database. Every entry we make is traceable in the history, and you can revoke access at any time.' },
      { q: 'Which Odoo do you work with?', a: 'Odoo Enterprise and Community, online or self-hosted, as long as we get a user with accounting rights. We deliberately don’t do other accounting software.' },
      { q: 'What counts as one entry?', a: 'One posted document (vendor bill, credit note or expense receipt) or one reconciled bank line. Individual journal lines don’t count separately.' },
      { q: 'How do you handle confidentiality?', a: 'We work under your name and sign confidentiality and a data processing agreement. We never contact or solicit your clients ourselves: that is in the contract.' },
      { q: 'What happens when something is wrong or missing?', a: 'We don’t book on a hunch. Doubtful cases go to a human, and anything missing is on one list you receive every working day. If something in the Odoo setup is off, we flag it.' },
      { q: 'How fast do you process?', a: 'Every working day. What comes in is processed the same or the next working day.' },
      { q: 'Do you only work in Bonaire?', a: 'We are based in Bonaire and work remotely, so firms elsewhere in the Caribbean can work with us too.' },
      { q: 'How do we start?', a: 'Send a WhatsApp or email to get acquainted. We then start with one client database: you grant access, we set up, and in the first month you see exactly what we do. Cancel monthly.' },
    ],
  },
  bonaire: {
    h1: 'Odoo bookkeeping in Bonaire',
    lede: 'Does your Bonaire firm have clients on Odoo? Ledgerwerk takes over the routine work, locally and in your own time zone.',
    points: [
      { title: 'Local', text: 'Based in Kralendijk. An introduction can simply be over coffee.' },
      { title: 'BES know-how', text: 'ABB, payroll tax, USD and the Caribbean banks: we know how things work on the island.' },
      { title: 'Capacity without hiring', text: 'Finding staff and bringing them to the island is hard. We absorb the bookkeeping, also in busy periods.' },
      { title: 'Only Odoo', text: 'One system, known inside out: from reconciliation models to inventory valuation.' },
    ],
    closing: 'Curious whether it works for your firm? An introduction is free of obligation.',
  },
  contact: {
    h1: 'Get acquainted', lede: 'A short conversation is enough to see whether Ledgerwerk fits your firm.',
    waTitle: 'WhatsApp', waText: 'The quickest route. One click and you’re talking to us.',
    mailTitle: 'Email', mailText: 'Prefer email? We reply within one working day.',
    nextTitle: 'What happens next',
    next: ['Introduction: what do you do in Odoo, where does it get stuck?', 'Start with one client database.', 'After a month you see exactly what it delivers.'],
    location: 'Kralendijk, Bonaire',
  },
  privacy: {
    h1: 'Privacy statement', updated: 'Last updated: October 2026',
    sections: [
      { title: 'Who we are', text: 'Ledgerwerk is a trade name of Nefar BV, based in Kralendijk, Bonaire. Privacy questions can be sent to office@ledgerwerk.com.' },
      { title: 'Data of contacts', text: 'If you contact us by email, WhatsApp or phone, we use your name, contact details and message only to reply and to agree on our services. We keep this data no longer than needed for the business relationship and legal retention periods.' },
      { title: 'Data we process on behalf of others', text: 'For accounting firms we work inside their clients’ Odoo databases. In doing so we are the processor and the firm or its client is the controller. We record this in a data processing agreement and use the data solely for the assignment.' },
      { title: 'This website', text: 'This website sets no tracking cookies and uses no advertising networks. Fonts are loaded from our own server.' },
      { title: 'Your rights', text: 'You can ask us which data we hold about you, and have it corrected or deleted. Email office@ledgerwerk.com.' },
    ],
  },
};

const es: Content = {
  meta: {
    home: { title: 'Ledgerwerk — Contabilidad en Odoo externalizada para despachos contables', description: 'Ledgerwerk asume el trabajo rutinario en Odoo para despachos contables: codificar facturas de proveedores, conciliar líneas bancarias y procesar tickets. Desde Bonaire, por asiento.' },
    pricing: { title: 'Precios — Ledgerwerk, contabilidad en Odoo por asiento', description: 'Paquetes desde $120 al mes por 100 asientos. El volumen de todos sus clientes suma junto. Cancelable mensualmente.' },
    faq: { title: 'Preguntas frecuentes — Ledgerwerk', description: 'Respuestas para despachos contables: cómo trabaja Ledgerwerk en el Odoo de su cliente, qué cuenta como asiento, confidencialidad y cómo empezar.' },
    bonaire: { title: 'Contabilidad en Odoo en Bonaire — Ledgerwerk', description: 'Apoyo con la contabilidad en Odoo en Bonaire para despachos contables y administrativos. Local, misma zona horaria, con conocimiento del ABB y la práctica BES.' },
    contact: { title: 'Contacto — Ledgerwerk', description: 'Agende una presentación con Ledgerwerk por WhatsApp o correo. Con sede en Kralendijk, Bonaire.' },
    privacy: { title: 'Declaración de privacidad — Ledgerwerk', description: 'Cómo trata Ledgerwerk los datos personales de contactos y los datos que procesamos por encargo de despachos contables.' },
  },
  nav: { approach: 'Enfoque', expertise: 'Experiencia', pricing: 'Precios', faq: 'Preguntas', cta: 'Contactar', menuLabel: 'Menú principal', langLabel: 'Idioma' },
  common: {
    plan: 'Agende una presentación', seePricing: 'Ver precios', waText: 'Hola Ledgerwerk, me gustaría conocerles.',
    whatsapp: 'Escríbanos por WhatsApp', email: 'Correo', phone: 'Teléfono',
    footerLegal: 'Ledgerwerk es un nombre comercial de Nefar BV, Kralendijk, Bonaire · No es un despacho contable · Sin vínculo con Odoo S.A.',
    footerLinks: { privacy: 'Privacidad', bonaire: 'Contabilidad Odoo Bonaire', contact: 'Contacto' },
    example: 'ejemplo',
  },
  home: {
    eyebrow: 'Para despachos contables', h1a: 'Nosotros contabilizamos.', h1b: 'asesora.',
    lede: 'Codificar, conciliar, buscar tickets: horas de trabajo que ningún cliente ve. Ledgerwerk lo asume en las bases de datos de Odoo de sus clientes, para que usted tenga tiempo para lo que de verdad importa.',
    note: 'esto hacemos',
    statement: 'Extracto bancario',
    rows: [
      { date: '14-10', desc: 'Material de oficina', amount: '−86,40', status: 'ok' },
      { date: '14-10', desc: 'Cobro factura 0412', amount: '1.250,00', status: 'ok' },
      { date: '13-10', desc: 'Electricidad septiembre', amount: '−312,75', status: 'ok' },
      { date: '13-10', desc: 'Pago con tarjeta ferretería', amount: '−58,20', status: 'missing' },
      { date: '12-10', desc: 'Transferencia desconocida', amount: '−900,00', status: 'review' },
    ],
    statusOk: 'Conciliado', statusMissing: 'Falta ticket', statusReview: 'A revisar',
    bandTitle: 'Recupere sus horas.',
    bandText: 'El trabajo que le roba las noches lo hacemos nosotros: en la base de datos de Odoo de su cliente, con nuestro propio usuario, cada asiento trazable. Usted vuelve a lo que le hizo ser contador.',
    week: {
      title: 'Su semana', hint: 'siga bajando…', days: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi'],
      before: ['Conciliar', 'Codificar', 'Tickets'],
      after: [['Asesoría', 'Cliente', 'Asesoría'], ['Cliente nuevo', 'Asesoría', 'Impuestos'], ['Asesoría', 'Cliente', 'Asesoría'], ['Cierre', 'Cliente nuevo', 'Asesoría'], ['Asesoría', 'Playa', 'Playa']],
      legend: ['Contabilidad', 'Asesoría', 'Clientes', 'Impuestos', 'Libre'],
    },
    approachTitleA: 'El trabajo rutinario', approachMark: 'sale de su oficina.', approachTitleB: 'El cliente se queda con usted.',
    weTag: 'Nosotros', weTitle: 'Lo que le quitamos de encima',
    weItems: ['Codificar facturas y notas de crédito', 'Conciliar líneas bancarias', 'Procesar tickets de gastos', 'Averiguar lo que falta'],
    youTag: 'Usted', youTitle: 'A dónde van sus horas',
    youItems: ['Asesorar a sus clientes', 'Captar clientes nuevos', 'Impuestos y cierre anual', 'O simplemente: la playa'],
    expEyebrow: 'A quién contrata', expTitleA: 'Más que hacer clic en', expMark: '‘Conciliar’.',
    expLede: 'No somos contadores. Somos personas que conocen Odoo y un balance a fondo.',
    expCards: [
      { title: 'Odoo por dentro', text: 'Configuramos y reparamos contabilidades en Odoo: plan de cuentas, códigos de impuestos, reglas de conciliación.' },
      { title: 'Base financiera', text: 'Sabemos leer un balance. Si algo en la configuración no cuadra, se lo decimos.' },
      { title: 'Automatización', text: 'Reglas y scripts con la API de Odoo. Lo que puede hacer una máquina no lo hace una persona.' },
      { title: 'Práctica BES', text: 'ABB, impuesto sobre salarios y bancos caribeños: terreno conocido.' },
    ],
    stepsTitle: 'Cómo funciona',
    steps: [
      { title: 'Invitar', text: 'Nos crea un usuario en la base de datos de Odoo de su cliente.' },
      { title: 'Configurar', text: 'Aprendemos el plan de cuentas, los proveedores y los impuestos. Una sola vez.' },
      { title: 'Procesar', text: 'Cada día laborable. Ante la duda revisa una persona, no solo el software.' },
      { title: 'Informar', text: 'Recibe una lista con lo que falta. Lo demás está hecho.' },
    ],
    pricingEyebrow: 'Precios', pricingTitleA: 'Por asiento,', pricingMark: 'no por hora.',
    pricingLede: 'El volumen de todos sus clientes suma junto. Un asiento es un documento contabilizado o una línea bancaria conciliada.',
    ctaTitle: 'Menos horas en Odoo. Más tiempo con sus clientes.',
  },
  pricing: {
    bundle: 'Paquete', perMonth: 'al mes', included: 'Asientos incluidos', extra: 'Asiento adicional',
    footnote: 'Configuración $150 por base de datos, pago único · Precios en USD, sin ABB · Cancelable mensualmente',
    h1: 'Por asiento, no por hora.',
    lede: 'Paga por lo contabilizado, no por el tiempo que lleva. El volumen de todos sus clientes suma en un paquete por despacho.',
    countTitle: 'Qué cuenta como un asiento',
    countItems: ['Una factura de proveedor o nota de crédito contabilizada', 'Un ticket de gastos procesado', 'Una línea bancaria conciliada'],
    countNot: 'Las líneas de diario no cuentan por separado: una factura con diez líneas es un asiento.',
    exampleTitle: 'Ejemplo',
    exampleText: 'Un despacho con tres clientes en Odoo suma 380 asientos al mes. Con el paquete M paga $300 más 80 asientos adicionales a $1,20: $396 al mes.',
    termsTitle: 'Condiciones',
    terms: ['Configuración única de $150 por base de datos: aprender plan de cuentas, proveedores e impuestos.', 'Cancelable y cambiable de paquete mensualmente.', 'Precios en USD, sin ABB.', 'Confidencialidad y acuerdo de tratamiento de datos incluidos.'],
  },
  faq: {
    h1: 'Preguntas frecuentes', lede: 'Lo que más nos preguntan los despachos contables.',
    items: [
      { q: '¿Ledgerwerk es un despacho contable?', a: 'No. Hacemos la contabilidad rutinaria en Odoo por encargo de su despacho: codificar facturas, conciliar líneas bancarias y procesar tickets. Impuestos, cierre anual, auditoría y asesoría siguen con usted.' },
      { q: '¿Trabajan en el Odoo de nuestro cliente?', a: 'Sí. Nos da un usuario propio en la base de datos de Odoo de su cliente. Cada asiento que hacemos queda en el historial, y puede retirar el acceso cuando quiera.' },
      { q: '¿Con qué Odoo trabajan?', a: 'Con Odoo Enterprise y Community, en línea o en servidor propio, siempre que tengamos un usuario con permisos contables. Otros programas contables no los hacemos, a propósito.' },
      { q: '¿Qué cuenta como un asiento?', a: 'Un documento contabilizado (factura de proveedor, nota de crédito o ticket) o una línea bancaria conciliada. Las líneas de diario no cuentan por separado.' },
      { q: '¿Cómo tratan la confidencialidad?', a: 'Trabajamos bajo su nombre y firmamos confidencialidad y un acuerdo de tratamiento de datos. Nunca contactamos ni captamos a sus clientes: así consta en el contrato.' },
      { q: '¿Qué pasa si algo no cuadra o falta?', a: 'No contabilizamos a ojo. Los casos dudosos los revisa una persona, y lo que falta aparece en una lista que recibe cada día laborable. Si algo en la configuración de Odoo no cuadra, lo señalamos.' },
      { q: '¿Con qué rapidez procesan?', a: 'Cada día laborable. Lo que entra se procesa el mismo día o el siguiente día laborable.' },
      { q: '¿Solo trabajan en Bonaire?', a: 'Tenemos sede en Bonaire y trabajamos a distancia, así que despachos de otras partes del Caribe también pueden trabajar con nosotros.' },
      { q: '¿Cómo empezamos?', a: 'Escríbanos por WhatsApp o correo para conocernos. Empezamos con una base de datos: usted da acceso, nosotros configuramos, y el primer mes ve exactamente lo que hacemos. Cancelable mensualmente.' },
    ],
  },
  bonaire: {
    h1: 'Contabilidad en Odoo en Bonaire',
    lede: '¿Su despacho en Bonaire tiene clientes en Odoo? Ledgerwerk asume el trabajo rutinario, de forma local y en su misma zona horaria.',
    points: [
      { title: 'Local', text: 'Con sede en Kralendijk. Una presentación puede ser simplemente con un café.' },
      { title: 'Conocimiento BES', text: 'ABB, impuesto sobre salarios, USD y los bancos caribeños: conocemos la práctica de la isla.' },
      { title: 'Capacidad sin contratar', text: 'Encontrar personal y traerlo a la isla es difícil. Absorbemos la contabilidad, también en épocas de mucho trabajo.' },
      { title: 'Solo Odoo', text: 'Un único sistema, conocido a fondo: de reglas de conciliación a valoración de inventario.' },
    ],
    closing: '¿Quiere saber si funciona para su despacho? La presentación es sin compromiso.',
  },
  contact: {
    h1: 'Conozcámonos', lede: 'Una breve conversación basta para ver si Ledgerwerk encaja con su despacho.',
    waTitle: 'WhatsApp', waText: 'La vía más rápida. Un clic y está hablando con nosotros.',
    mailTitle: 'Correo', mailText: '¿Prefiere el correo? Respondemos en un día laborable.',
    nextTitle: 'Qué pasa después',
    next: ['Presentación: ¿qué hace en Odoo y dónde se atasca?', 'Empezamos con una base de datos de un cliente.', 'Tras un mes ve exactamente lo que aporta.'],
    location: 'Kralendijk, Bonaire',
  },
  privacy: {
    h1: 'Declaración de privacidad', updated: 'Última actualización: octubre de 2026',
    sections: [
      { title: 'Quiénes somos', text: 'Ledgerwerk es un nombre comercial de Nefar BV, con sede en Kralendijk, Bonaire. Las preguntas sobre privacidad pueden enviarse a office@ledgerwerk.com.' },
      { title: 'Datos de contactos', text: 'Si nos contacta por correo, WhatsApp o teléfono, usamos su nombre, sus datos de contacto y su mensaje solo para responderle y acordar nuestros servicios. No conservamos estos datos más tiempo del necesario para la relación comercial y los plazos legales.' },
      { title: 'Datos que tratamos por encargo', text: 'Para despachos contables trabajamos en las bases de datos de Odoo de sus clientes. Somos encargados del tratamiento y el despacho o su cliente es el responsable. Lo establecemos en un acuerdo de tratamiento de datos y usamos los datos solo para el encargo.' },
      { title: 'Este sitio web', text: 'Este sitio no coloca cookies de seguimiento ni usa redes publicitarias. Las fuentes se cargan desde nuestro propio servidor.' },
      { title: 'Sus derechos', text: 'Puede preguntarnos qué datos tenemos sobre usted y pedir que se corrijan o eliminen. Escriba a office@ledgerwerk.com.' },
    ],
  },
};

export const content: Record<Lang, Content> = { nl, en, es };

export const bundles = [
  { key: 'S', price: 120, included: 100, extra: '1,40', extraEn: '1.40', tone: 'mint' },
  { key: 'M', price: 300, included: 300, extra: '1,20', extraEn: '1.20', tone: 'lilac' },
  { key: 'L', price: 850, included: 1000, extra: '1,00', extraEn: '1.00', tone: 'dark' },
] as const;
