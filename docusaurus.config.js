// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ian Sotnek',
  tagline: 'AI Squared Co-Founder & Multidisciplinary Researcher',
  favicon: 'img/profilePhotos/selfImage.jpeg',

  // Set the production url of your site here
  url: 'https://isotnek.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'isotnek', // Usually your GitHub org/user name.
  projectName: 'isotnek.github.io', // Usually your repo name.
  deploymentBranch: 'production',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'projects',
          path: 'projects',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
  ],
  

  themeConfig: {
    navbar: {
      title: 'Home',
      /*
      logo: {
        alt: 'My Site Logo',
        src: 'img/profilePhotos/selfImage.jpeg',
      },
      */
      items: [
        {to: '/aboutMe', label: 'About Me', position: 'left'},
        /*
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
        */
        //{to: '/blog', label: 'Blog', position: 'left'},    
        {to: '/my-resume', label: 'Resume', position: 'left'},
        {to: '/my-cv', label: 'Academic CV', position: 'left'},
        // Right Side Navbar
        {
          to: '/contactMe',
          html: `
            <a>
              <i class="fas fa-envelope"></i>
            </a>`,
          position: 'right',
        },
        {
          href: 'https://github.com/isotnek',
          html: `
            <a href="https://github.com/isotnek" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>`,
          position: 'right'
        },
        {
          href: 'https://www.linkedin.com/in/ian-sotnek/',
          html: `
            <a href="https://www.linkedin.com/in/ian-sotnek/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in"></i>
            </a>`,
          position: 'right'
        }
      ],
    },
    
    footer: {
      /*
      style: 'dark',
      links: [
        {
          title: 'Info',
          items: [
            {label: 'Resume', to: '/resume'},
            {label: 'Academic CV', to: '/cv'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Projects',
              to: '/projects/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ]
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/isotnek',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ian-sotnek/',
            },
            {
              label: 'Contact Me',
              to: '/contactMe'
            }
          ],
        }        
      ],
      */
      copyright: `Copyright © ${new Date().getFullYear()} Ian Sotnek. Built with Docusaurus.`,
    },
    metadata: [
      //{name: 'description', content: 'Your site description'},
      //{name: 'theme-color', content: '#yourColor'},
      {rel: 'preconnect', href: 'https://cdnjs.cloudflare.com'}
    ],
  }      
};

module.exports = config;
