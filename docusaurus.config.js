module.exports = {
  title: 'itf.certified.ninja',
  tagline: 'CompTIA IT Fundamentals+',
  url: 'https://itf.certified.ninja',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gunnaraas', // Usually your GitHub org/user name.
  projectName: 'itf.certified.ninja', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CompTIA IT Fundamentals+',
      logo: {
        alt: 'MNCFS Logo',
        src: 'img/mncfs-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'ch0-gettingstarted',
          label: 'Start Reading',
          position: 'right',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/itf.certified.ninja/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/itf.certified.ninja',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
