import * as React from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
import { themeVars } from "../styles.css"
import { loadingStyle } from "./loading.css"

const Loading: React.FC = () => {
  return (
    <div className={loadingStyle}>
        <PropagateLoader color={themeVars.color.primary} loading={true} size={24} speedMultiplier={0.9} />
    </div>
  )
}

export default Loading
