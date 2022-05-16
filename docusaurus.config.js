// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Royalton Lions Club',
  tagline: 'We Serve',
  url: 'https://www.royaltonmnlions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/LCI_emblem_2color_web.png',
  organizationName: 'cgosiak', // Usually your GitHub org/user name.
  projectName: 'lions-public-site', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/bass-fishing-tournament/welcome',
            from: ['/lions-bass-tourny'],
          },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cgosiak/lions-public-site/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cgosiak/lions-public-site/tree/main/blog',
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
        title: 'Royalton Lions Club',
        logo: {
          alt: 'Lions Club Logo',
          src: 'img/LCI_emblem_black.png',
          srcDark: 'img/LCI_emblem_white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'bass-fishing-tournament/welcome',
            position: 'left',
            label: 'Bass Tournament',
          },
          {
            to: '/contact',
            position: 'left',
            label: 'Contact',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.facebook.com/RoyaltonMNLions',
            label: 'Facebook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Royalton MN Lions`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
