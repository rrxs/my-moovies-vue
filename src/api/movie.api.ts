import httpClient from './httpClient'
import type { Movie } from './models/movie.models'

const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await httpClient.get<Movie[]>('/api/movies/popular')
  return response.data
}

const markMovieWatched = async (idMovie: number): Promise<boolean> => {
  const response = await httpClient.post('/api/movies/mark-watched', { idMovie })
  return response.status === 200
}

const markMovieUnWatched = async (idMovie: number): Promise<boolean> => {
  const response = await httpClient.post('/api/movies/mark-unwatched', { idMovie })
  return response.status === 200
}

export { getPopularMovies, markMovieWatched, markMovieUnWatched }
