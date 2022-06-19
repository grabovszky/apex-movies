import * as React from "react"
import { PageProps } from "gatsby"
import SEO from "./seo"
import Link from "./link"
import { IconMother } from "./icon"
import Back from "./back"
import * as styles from "./layout.css"

const Layout: React.FC<{ location?: PageProps["location"] }> = ({ children, location }) => {
  const isHome = location?.pathname === `/`

  return (
    <>
      <SEO />
      {!isHome && <Back />}
      <main className={styles.mainStyle}>{children}</main>
      <footer className={styles.footerStyle}>
        <p>
          Made by <Link to="https://www.gaborkristof.com/?utm_source=apex-moveis">grabovszky</Link>
        </p>
      </footer>
      <IconMother />
    </>
  )
}

export default Layout
