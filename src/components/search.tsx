import * as React from "react"
import SearchResults from "./search-results"
import SearchBar from "./search-bar"

const { search } = window.location;
const query = new URLSearchParams(search).get('query');

const Search: React.FC = () => {
  return(
    <div>
      <SearchBar queryText={query || 'Search for a movie'} />
      {query && <SearchResults query={query} />}
    </div>
  )
}

export default Search
