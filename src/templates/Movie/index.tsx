import Head from 'next/head'

import Badge from 'components/Badge'
import MovieTypes from 'components/MovieTypes'
import Base from 'templates/Base'

import floatToPercentage from 'utils/floatToPercentage'
import formatDateBR from 'utils/formatDateBR'
import minutesToHours from 'utils/minutesToHours'

import * as S from './styles'

type Language = {
  english_name: string
  iso_639_1: string
  name: string
}

type Genre = {
  id: number
  name: string
}

type Video = {
  id: string
  key: string
  name: string
}

export type MovieProps = {
  id: number
  overview: string
  release_date: string
  title: string
  vote_average: number
  poster_path: string
  genres: Genre[]
  status: string
  spoken_languages: Language[]
  runtime: number
  budget: number
  revenue: number
  videos: {
    results: Video[]
  }
  layoutId?: string
}

const Movie = ({
  overview,
  release_date,
  title,
  vote_average,
  poster_path,
  genres,
  spoken_languages,
  runtime,
  budget,
  revenue,
  videos,
  layoutId
}: MovieProps) => (
  <>
    <Head>
      <title>{title} | Movies</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Base>
      <S.MovieWrapper>
        <S.MovieDetailsWrapper>
          <S.Header>
            <h1>{title}</h1>
            <p>{formatDateBR(release_date)}</p>
          </S.Header>
          <S.MovieDetailsContent>
            <S.Details>
              <S.Overview>
                <h2>Sinopse</h2>
                <S.MovieDetailsDivider />
                <p>{overview}</p>
                <S.DetailsInfo>
                  <h2>Informações</h2>
                  <S.MovieDetailsDivider />

                  <S.InfosWrapper>
                    <S.Info>
                      <h3>Idioma</h3>
                      <p>
                        {spoken_languages.length > 0 &&
                          spoken_languages[0].name}
                      </p>
                    </S.Info>
                    <S.Info>
                      <h3>Duração</h3>
                      <p>{minutesToHours(Number(runtime))}</p>
                    </S.Info>

                    <S.Info>
                      <h3>Orçamento</h3>
                      <p>
                        {budget.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                      </p>
                    </S.Info>
                    <S.Info>
                      <h3>Receita</h3>
                      <p>
                        {revenue.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                      </p>
                    </S.Info>
                    <S.Info>
                      <h3>Lucro</h3>
                      <p>
                        {(revenue - budget).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'USD'
                        })}
                      </p>
                    </S.Info>
                  </S.InfosWrapper>
                </S.DetailsInfo>
                <S.InfosFooter>
                  <S.Categories>
                    {genres.map((genre) => (
                      <MovieTypes key={genre.id} name={genre.name} />
                    ))}
                  </S.Categories>
                  <Badge size="large">{floatToPercentage(vote_average)}%</Badge>
                </S.InfosFooter>
              </S.Overview>
            </S.Details>
            <S.MovieCover
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={`Poster of movie ${title}`}
              layoutId={layoutId}
            />
          </S.MovieDetailsContent>
        </S.MovieDetailsWrapper>
        {!!videos.results.length && (
          <S.EmbedVideo
            src={`https://www.youtube.com/embed/${videos.results[0].key}`}
          />
        )}
      </S.MovieWrapper>
    </Base>
  </>
)

export default Movie
