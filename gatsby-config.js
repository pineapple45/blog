module.exports = {
  siteMetadata: {
    title: "ShadedVoxels Blog",
    description:
      "Blog for topics on Machine Learning, Deep Learning , web developement and much more..",
    siteUrl: "https://shadedvoxels.com/",
    image: "./default.jpg",
    twitterUsername: "@Anmol_gomra",
    author: "pineapple45",
  },
  plugins: [
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 640,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 480, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
        urlOverrides: [
          {
            id: "youtube",
            embedURL: videoId =>
              `https://www.youtube-nocookie.com/embed/${videoId}`,
          },
        ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
        iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-images-anywhere`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: false,
              // className: `custom-class`,
              // maintainCase: true,
              // removeAccents: true,
              // isIconAfterHeader: true,
              // elements: [`h1`, `h4`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat semi-bold`,
          `Merriweather`, // you can also specify font weights and styles
          `roboto mono`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
  pathPrefix: "/",
}
