import * as React from "react"
import * as styles from "./search-bar.css"

const SearchBar: React.FC<{ queryText: string }> = ({ queryText }) => {
  return(
    <div className={styles.searchBarWrapperStyle}>
      <form action="/" method="get">
        <input
            type="text"
            id="movie-search"
            placeholder={queryText}
            name="query" 
            className={styles.searchBarFormStyle}
        />
    </form>
    </div>
  )
}

export default SearchBar
