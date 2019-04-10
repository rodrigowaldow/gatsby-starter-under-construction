module.exports = {
  siteMetadata: {
    title: "Hi, looking for a software developer? 🔎",
    message: "I’m Rodrigo. Nice to meet you. \n I started learning programming by myself, I went to college and I still learn new tricks every day. I have worked on several projects and collaborated with other skilled people to create and develop websites, collaborative sites and information systems.",
    pattern: "Japanese cube",
    color: "#4c4c4c",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: ["https://github.com/robinmetral/gatsby-starter-under-construction", "https://twitter.com/robinmetral"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}
