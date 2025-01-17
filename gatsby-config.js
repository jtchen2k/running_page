module.exports = {
  pathPrefix: `/`, // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: "Juntong's Running Page",
    siteUrl: 'https://run.jtchen.io',
    logo: 'https://billc.oss-cn-shanghai.aliyuncs.com/img/2021-10-01-6ogioj.jpg',
    description: "Don't stop running.",
    navLinks: [
      {
        name: 'About',
        url: 'https://jtchen.io/life',
      },
      {
        name: 'Strava',
        url: 'https://www.strava.com/athletes/93342826',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/jtchen2k',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          'gatsby-remark-widows',
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'header-link',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['./src'],
          precision: 6,
        }
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
