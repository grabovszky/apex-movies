import * as React from "react"
import { Link } from "gatsby"
import { backStyle } from "./back.css"

const Back: React.FC = () => (
  <Link className={backStyle} to="/">
    Back to Home
  </Link>
)

export default Back
