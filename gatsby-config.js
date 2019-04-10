module.exports = {
  siteMetadata: {
    title: "Hi, looking for a software developer? 🔎",
    message: "I’m Rodrigo. Nice to meet you. \n I started learning programming by myself, I went to college and I still learn new tricks every day. I have worked on several projects and collaborated with other skilled people to create and develop websites, collaborative sites and information systems.",
    pattern: "Starry Night",
    color: "#6840a9",
    titleFont: "Righteous",
    messageFont: "'europa',sans-serif",
    social: ["https://www.linkedin.com/in/rodrigo-waldow/", "https://twitter.com/rodrigowaldow", "emailto:waldowrodrigo@gmail.com"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "rodrigo-waldow-onepage-personal-site",
        short_name: "Rodrigo Waldow",
        start_url: "/",
        background_color: "#6840a9",
        theme_color: "#6840a9",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}