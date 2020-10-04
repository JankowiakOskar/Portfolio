/* eslint-disable */
const path = require('path');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Portfolio Gatsby`,
    author: `Oskar Jankowiak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-json',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lora\:400,600,700`, `merriweather\:200,400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/templates/MainTemplate.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'], failOnError: false },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/assets/svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lorem ipsum`,
        short_name: `Lorem ipsum`,
        start_url: `/`,
        background_color: '#FFD226',
        theme_color: '#FFD226',
        display: `standalone`,
        icon: `src/assets/icons/logo.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        // templates: path.join(__dirname, 'src/components/templates'),
        // sections: path.join(__dirname, 'src/components/sections'),
        assets: path.join(__dirname, 'src/assets'),
        // routes: path.join(__dirname, 'src/routes'),
        vendors: path.join(__dirname, 'src/vendors'),
        // utils: path.join(__dirname, 'src/utils'),
        contexts: path.join(__dirname, 'src/contexts'),
        // providers: path.join(__dirname, 'src/providers'),
        hooks: path.join(__dirname, 'src/hooks'),
        helpers: path.join(__dirname, 'src/helpers'),
      },
    },
  ],
};
