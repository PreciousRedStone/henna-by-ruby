module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: (process.env.NODE_ENV === 'production'),
  WORDPRESS_PROTOCOL: process.env.WORDPRESS_PROTOCOL || 'http',
  WORDPRESS_HOST: process.env.WORDPRESS_HOST || '127.0.0.1:8080'
};