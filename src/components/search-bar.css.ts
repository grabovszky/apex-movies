import { style } from "@vanilla-extract/css"
import { themeVars } from "../styles.css"

export const searchBarWrapperStyle = style({
  color: themeVars.color.primary,
  marginTop: `3rem`,
  marginBottom: `6rem`,
  display: `flex`,
  justifyContent: `center`,
})

export const searchBarFormStyle = style({
    width: `clamp(380px, 80vw, 640px)`,
    padding: `0.75rem 1rem`,

    backgroundColor: `transparent`,
    transition: `all 250ms ease-in-out`,
    fontSize: `1rem`,
    lineHeight: `1.2rem`,

    color: themeVars.color.white,

    backgroundImage: `url(/search.svg)`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `1.3rem 1.3rem`,
    backgroundPosition: `95% center`,
    borderRadius: `5rem`,
    border: `1px solid #575756`,
    backfaceVisibility: `hidden`,
    transformStyle: `preserve-3d`,

    ":hover": {
        padding: `1rem 0`,
        outline: `0`,
        border: `1px solid transparent`,
        borderBottom: `1px solid #575756`,
        borderRadius: `0`,
        backgroundPosition: `100% center`,
    },
    ":focus": {
        padding: `1rem 0`,
        outline: `0`,
        border: `1px solid transparent`,
        borderBottom: `1px solid #575756`,
        borderRadius: `0`,
        backgroundPosition: `100% center`,
    }
})
