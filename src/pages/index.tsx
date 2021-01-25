import { FormEvent, useState } from 'react'
import { Search } from '@styled-icons/material-outlined'

import tmdbApi from 'services/tmdbApi'

import Base from 'templates/Base'

import TextField from 'components/TextField'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'

import * as S from 'components/Home/styles'

type Movie = {
  id: string
  title: string
  poster_path: string
  vote_average: number
  release_date: string
  overview: string
  genre_ids: number[]
}

export type Genre = {
  id: number
  name: string
}

const Home = () => {
  const [search, setSearch] = useState('')
  const [inputError, setInputError] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPag] = useState(5)

  const indexOfLastMovie = currentPage * moviesPerPag
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPag
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const response = await tmdbApi.get(
      `search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&query=${search}`
    )
    const genres = await tmdbApi.get(
      `genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`
    )

    setMovies(response.data.results)
    setGenres(genres.data.genres)
    setInputError('')

    if (response.data.results.length == false) {
      setInputError('Filme ou gênero não encontrado')
    }
  }

  function formatGenre(id: number) {
    const result = genres.find((genre) => genre.id === id)

    if (result) return result.name
  }

  function paginate(pagNumber: number) {
    return setCurrentPage(pagNumber)
  }

  return (
    <Base>
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <TextField
            name="search"
            placeholder="Busque um filme pelo nome..."
            initialValue=""
            icon={<Search />}
            value={search}
            onInput={(value: string) => {
              setSearch(value)
            }}
          />
        </form>

        {inputError}

        {!!currentMovies &&
          currentMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              layoutId={`${movie.title}-card`}
              genres={movie.genre_ids.map((genre_id) => formatGenre(genre_id))}
              {...movie}
            />
          ))}

        {!!movies && (
          <Pagination
            moviesPerPag={moviesPerPag}
            totalMovies={movies.length}
            currentPag={currentPage}
            paginate={paginate}
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Home
