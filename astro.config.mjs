import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ledgerwerk.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
