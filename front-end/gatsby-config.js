const {
  IS_PRODUCTION,
  WORDPRESS_HOST,
  WORDPRESS_PROTOCOL
} = require('./config');

module.exports = {
  siteMetadata: {
    title: 'Henna and Face Paint by Ruby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        useACF: true,
        hostingWPCOM: false,
        baseUrl: WORDPRESS_HOST,
        protocol: WORDPRESS_PROTOCOL,
        verboseOutput: !IS_PRODUCTION,
        excludedRoutes: [
          // "!/acf/v3/**",
          // "!/wp/v2/**"
        ]
      },
    }
  ],
};