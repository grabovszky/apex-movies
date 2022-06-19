import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fetch from "node-fetch"

const BASE_URL = `https://api.themoviedb.org/3/`

export default async function searchHandler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  const query = encodeURIComponent(req.query.query)

  const URL = `${BASE_URL}search/multi?api_key=${process.env.API_KEY}&query=${query}`
  const response = await fetch(URL)

  if (response.url !== URL) {
    res.status(500).json({ error: `Couldn't load the information from the api` })
  }

  const result = await response.json()

  res.status(200).json(result)
}
 