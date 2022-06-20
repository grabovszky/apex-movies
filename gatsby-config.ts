import type { GatsbyConfig, PluginRef } from "gatsby"
import type { TMDBPluginOptions } from "gatsby-source-tmdb"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    title: process.env.TITLE || `Apex Movies`,
    description: process.env.DESC || `A simple movie and tv show search site made with gatsby, backed by the TMBD API.`,
    siteUrl: process.env.URL || `https://apex-movies.netlify.app`,
    logo: `/logo.png`,
  },
  plugins: [
    {
      resolve: `gatsby-source-tmdb`,
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
      } as TMDBPluginOptions,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-vanilla-extract`,
  ] as PluginRef[],
}

export default config
