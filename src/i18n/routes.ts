export const langs = ['nl', 'en', 'es'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'nl';

export const pages = ['home', 'pricing', 'faq', 'bonaire', 'contact', 'privacy'] as const;
export type PageKey = (typeof pages)[number];

export const slugs: Record<PageKey, Record<Lang, string>> = {
  home: { nl: '', en: '', es: '' },
  pricing: { nl: 'prijzen', en: 'pricing', es: 'precios' },
  faq: { nl: 'veelgestelde-vragen', en: 'faq', es: 'preguntas-frecuentes' },
  bonaire: { nl: 'odoo-boekhouding-bonaire', en: 'odoo-bookkeeping-bonaire', es: 'contabilidad-odoo-bonaire' },
  contact: { nl: 'contact', en: 'contact', es: 'contacto' },
  privacy: { nl: 'privacy', en: 'privacy', es: 'privacidad' },
};

export function pathFor(page: PageKey, lang: Lang): string {
  const s = slugs[page][lang];
  return s ? `/${lang}/${s}/` : `/${lang}/`;
}

export const htmlLang: Record<Lang, string> = { nl: 'nl', en: 'en', es: 'es' };
export const ogLocale: Record<Lang, string> = { nl: 'nl_NL', en: 'en_US', es: 'es_ES' };
export const langLabel: Record<Lang, string> = { nl: 'NL', en: 'EN', es: 'ES' };
export const langName: Record<Lang, string> = { nl: 'Nederlands', en: 'English', es: 'Español' };

export const contact = {
  phoneDisplay: '+599 785 1502',
  phoneE164: '+5997851502',
  waBase: 'https://wa.me/5997851502',
  email: 'office@ledgerwerk.com',
};
