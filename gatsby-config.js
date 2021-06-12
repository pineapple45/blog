module.exports = {
  siteMetadata: {
    title: "ShadedVoxels Blog",
    description:
      "Blog for topics on Machine Learning, Deep Learning , web developement and much more..",
    url: "https://github.com/pineapple45",
    image: "./default.jpg",
    twitterUsername: "@Anmol_gomra",
    author: "pineapple45",
  },
  plugins: [
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
  ],
  pathPrefix: "/blog",
}
