/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,  // This loads the right .env file based on the environment
});

module.exports = {
  siteMetadata: {
    title: `hansinimirchandani`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-netlify',  // Make sure this line is included
  ],
}
