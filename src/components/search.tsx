import * as React from "react"
import SearchResults from "./search-results"
import SearchBar from "./search-bar"

const Search: React.FC = () => {
  if (typeof window !== `undefined`){
    const { search } = window.location;
    const query = new URLSearchParams(search).get('query');
  
    return(
      <div>
        <SearchBar queryText={query || 'Search for a movie'} />
        {query && <SearchResults query={query} />}
      </div>
    )
  } else {
    return(
      <div>
        <SearchBar queryText={'Search for a movie'} />
      </div>
    )
  }
}

export default Search
