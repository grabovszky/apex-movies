export const searchTmdb = async ({ query }) => {
  const URL = `/api/search-tmdb?query=${query}`
  const res = await fetch(URL)
  return res.json()
}
  