import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Better DMS Service',
  description: 'New version of DMS Service using Bun, Nitro, and Drizzle',
  base: '/better-dms-service/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/.vitepress/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { text: 'Features', link: '/features' },
      { text: 'API', link: '/api' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Get Started', link: '/get-started' },
        ],
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Features', link: '/features' },
          { text: 'API Reference', link: '/api' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/xcvzmoon/better-dms-service' }],
  },
});
