module.exports = {
  siteMetadata: {
    title: "goriot-gatsby",
    author: "goriot",
    description: "A clothing brand based in Sydney Australia.",
    instagramUsername: "@goriot_official",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
};
