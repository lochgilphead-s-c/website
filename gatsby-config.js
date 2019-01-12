module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://lochgilpheadsoccercentre.club`,
    title: "Lochgilphead Soccer Centre and Lochgilphead Red Star YFC"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116472402-1"
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/logo/lsc-logo.fw.png",
        // WebApp Manifest Configuration
        appName: `Lochgilphead Soccer Centre`, // Inferred with your package.json
        appDescription: null,
        developerName: `Patrick Grey`,
        developerURL: `https://patrickgrey.co.uk`,
        dir: "auto",
        lang: "en-GB",
        background: "#fff",
        theme_color: "#6599ff",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/blog/*", "/contact/*", "/tags/*", "/contact", "/tags"]
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-purgecss", // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
