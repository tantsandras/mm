module.exports = {
  siteMetadata: {
    title: `Midweek Murders`,
    keyword: `True Crime, True Crime Comedy Podcast, UK podcast, UK true crime comedy podcast, Midweek Murders`,
    description: `A true crime comedy podcast`,
    author: `Sandra Grahl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Midweek Murders`,
        short_name: `Midweek Murders`,
        start_url: `/`,
        lang: `en`,
        background_color: `#100b2b`,
        theme_color: `#7b9c95`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
