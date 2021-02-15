module.exports = {
  siteMetadata: {
    title: "Chris Cardoza",
    description: "Personal website of Chris Cardoza",
    author: {
      name: `Chris Cardoza`,
      email: "chcardoz@iu.edu",
    },
    social: {
      github: "chcardoz",
    },
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
  ],
};
