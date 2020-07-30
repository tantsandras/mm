module.exports = {
  siteMetadata: {
    title: `Midweek Murders`,
    keywords: `best, podcasts, uk, crime, comedy, podcast, true crime, podcast, Midweek Murders,`,
    description: `A true crime comedy podcast`,
    author: `Sandra Grahl`,
    siteUrl: `https://www.midweekmurders.netlify.app`,
    image: "/images/mmlogo.png",
    twitterUsername: "@midweekmurders",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/content/podcastEpisodesFolder`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- Prune -->`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        webpQuality: 95,
        jpegQuality: 95,
        pngQuality: 95,
        defaultQuality: 95,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Oswald"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Midweek Murders`,
        short_name: `Midweek Murders`,
        start_url: `/`,
        lang: `en`,
        background_color: `#1e1c3c`,
        theme_color: `#1e1c3c`,
        display: `minimal-ui`,
        icon: `src/images/favicon2.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
