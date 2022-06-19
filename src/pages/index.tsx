import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Search from "../components/search"
import { primaryColorStyle, titleStyle } from "../index.css"
import Provider from "../utils/provider"

const Index: React.FC<PageProps<DataProps>> = ({
  location,
}) => {
  return (
    <Provider>
      <Layout location={location}>
        <a href="/" className={titleStyle}>
          <h1>Apex<span className={primaryColorStyle}>.</span>Movies</h1>
        </a>
        <Search />
      </Layout>
    </Provider>
  )
}

export default Index
