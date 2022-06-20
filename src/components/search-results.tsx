import * as React from "react"
import { useQuery } from "react-query"
import { searchTmdb } from "../utils/search-tmdb"
import Card from "../components/card"
import { TabPanel, Tabs } from "../components/tab-overview"
import { primaryColorStyle } from "../index.css"
import Loading from "./loading"

const IMAGE_URL = `https://image.tmdb.org/t/p/`

const filterSearchResults = (results) => {
  return results.results.filter(result => result.media_type === "movie" || result.media_type === "tv")
}

const SearchResults: React.FC<{ query: string }> = ({ query }) => {
  const { status, data, error } = useQuery([`search`, query], async () => searchTmdb({ query }))

  if (status === `loading`) {
    return <Loading />
  }

  if (status === `error` && error instanceof Error) {
    return <p>Error: {error.message}</p>
  }

  const results = filterSearchResults(data)

  if (results.length > 0) {
    return (
      <Tabs forceRenderTabPanel>
        <TabPanel>
        {
          results.map((element) => {
              if(element.media_type === "movie"){
                  console.log(element)
                  return (
                      <Card
                          key={element.id}
                          cover={IMAGE_URL+'w500'+element.poster_path}
                          link={`/movie/${element.id}`}
                          name={element.title}
                          rating={element.vote_average}
                          release={element.release_date}
                      />
                  )
              } else {
                  let airDate
                  if (element.next_episode_to_air) {
                    airDate = element.next_episode_to_air.air_date
                  }
  
                  console.log(element)
  
                  return (
                    <Card
                      key={element.id}
                      name={element.name}
                      link={`/tv/${element.id}`}
                      cover={IMAGE_URL+'w500'+element.poster_path}
                      rating={element.vote_average}
                      release={element.first_air_date}
                    />
                  )
              }
          })
         }
        </TabPanel>
        </Tabs>
    )
  } else {
    return <p>No results found for <span className={primaryColorStyle}>{query}</span></p>
  }
}

export default SearchResults
