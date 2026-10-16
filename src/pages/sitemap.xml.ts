import { langs, pages, pathFor } from '../i18n/routes';

const site = 'https://ledgerwerk.com';

export function GET() {
  const urls = pages.flatMap((page) =>
    langs.map((lang) => {
      const alts = langs
        .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${site}${pathFor(page, l)}"/>`)
        .join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${site}${pathFor(page, 'nl')}"/>`;
      return `<url><loc>${site}${pathFor(page, lang)}</loc>${alts}</url>`;
    })
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
