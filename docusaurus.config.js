// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'itf.certified.ninja',
  tagline: 'CompTIA IT Fundamentals+',
  url: 'https://itf.certified.ninja.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gunnaraas', // Usually your GitHub org/user name.
  projectName: 'itf.certified.ninja', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gunnaraas/itf.certified.ninja/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/itf.certified.ninja/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'itf.certified.ninja',
        logo: {
          alt: 'MNCFS Logo',
          src: 'img/mncfs-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'ch0-gettingstarted',
            position: 'right',
            label: 'Start Reading',
          },
          {
            href: 'https://github.com/gunnaraas/itf.certified.ninja',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://certified.ninja',
            label: 'certified.ninja',
            position: 'right',
          },
        ],
      },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook Sections',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Computer Hardware',
              to: 'docs/ch01-components/',
            },
            {
              label: 'Computer Software',
              to: 'docs/ch04-operatingsystems',
            },
            {
              label: 'IT Infrastructure',
              to: 'docs/ch07-databases'
            }
          ],
        },
        {
          title: 'Related Sites',
          items: [
            {
              label: 'MTFS Homepage',
              href: 'https://techforsuccess.org',
            },
            {
              label: 'CompTIA ITF+ Exam Information',
              href: 'https://www.comptia.org/certifications/it-fundamentals',
            },
            {
              label: 'certified.ninja',
              href: 'https://certified.ninja',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minnesota Tech for Success.`,
    },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
