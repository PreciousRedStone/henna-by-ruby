const {
  IS_PRODUCTION,
  WORDPRESS_HOST,
  WORDPRESS_PROTOCOL
} = require('./config');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: WORDPRESS_HOST,
        hostingWPCOM: false,
        protocol: WORDPRESS_PROTOCOL,
        useACF: true,
        verboseOutput: !IS_PRODUCTION
      },
    }
  ],
};