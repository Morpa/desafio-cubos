import Link from 'next/link'
import { MotionProps } from 'framer-motion'

import Badge from 'components/Badge'
import MovieTypes from 'components/MovieTypes'

import floatToPercentage from 'utils/floatToPercentage'
import formatDateBR from 'utils/formatDateBR'

import * as S from './styles'

export type MovieCardProps = {
  id: string
  poster_path: string
  overview: string
  release_date: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  genres: any
  title: string
  vote_average: number
  layoutId?: string
}

const animationSpring: MotionProps = {
  whileHover: { y: -4 },
  whileTap: {
    y: 0
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 14
  }
}

const MovieCard = ({
  id,
  poster_path,
  overview,
  release_date,
  genres,
  title,
  vote_average
}: MovieCardProps) => (
  <S.Wrapper {...animationSpring}>
    <Link href={`/movie/${id}`} passHref>
      <S.MovieWrapper layoutId={`${title}-card`}>
        <S.Cover
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={`Poster of the movie ${title}`}
        />

        <S.Content>
          <S.BadgeWrapper>
            <Badge>{floatToPercentage(vote_average)}%</Badge>
          </S.BadgeWrapper>
          <S.Header>{title}</S.Header>
          <S.InfosWrapper>
            <S.Date>{release_date && formatDateBR(release_date)}</S.Date>
            <S.Overview>{overview}</S.Overview>
            <S.Categories>
              {!!genres &&
                genres.map((genre: string) => (
                  <MovieTypes key={genre} name={genre} />
                ))}
            </S.Categories>
          </S.InfosWrapper>
        </S.Content>
      </S.MovieWrapper>
    </Link>
  </S.Wrapper>
)

export default MovieCard
