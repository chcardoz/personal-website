module.exports = {
  siteMetadata: {
    title: "Chris Cardoza",
    description: "Personal website of Chris Cardoza",
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
  ],
};
