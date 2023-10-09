import httpClient from './httpClient'
import type { Movie } from './models/movie.models'

const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await httpClient.get<Movie[]>('/api/movies/popular')
  return response.data
}

export { getPopularMovies }
