import { style } from "@vanilla-extract/css"
import { breakpoints, themeVars } from "../styles.css"

export const footerStyle = style({
  textAlign: `center`,
  marginTop: `4rem`,
  marginBottom: `2rem`,
  color: themeVars.color.grey,
})

export const mainStyle = style({
  maxWidth: `1200px`,
  minHeight: `calc(80vh - 6rem)`,
  margin: `0 auto`,
  padding: `3rem 1rem`,
  "@media": {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      padding: `4rem 2rem`,
    },
  },
})
