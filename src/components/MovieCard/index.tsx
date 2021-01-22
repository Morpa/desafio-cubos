import Link from 'next/link'
import { MotionProps } from 'framer-motion'

import Badge from 'components/Badge'
import MovieTypes from 'components/MovieTypes'

import floatToPercentage from 'utils/floatToPercentage'
import formatToBR from 'utils/formatToBR'

import * as S from './styles'

export type MovieCardProps = {
  poster_path: string
  overview: string
  release_date: string
  genre_ids: number[]
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
  poster_path,
  overview,
  release_date,
  genre_ids,
  title,
  vote_average,
  layoutId
}: MovieCardProps) => (
  <S.Wrapper {...animationSpring}>
    <Link href="/" passHref>
      <S.MovieWrapper>
        <S.Cover
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={`Poster of the movie ${title}`}
          layoutId={layoutId}
        />

        <S.Content>
          <S.BadgeWrapper>
            <Badge>{floatToPercentage(vote_average)}%</Badge>
          </S.BadgeWrapper>
          <S.Header>{title}</S.Header>
          <S.InfosWrapper>
            <S.Date>{formatToBR(release_date)}</S.Date>
            <S.Overview>{overview}</S.Overview>
            <S.Categories>
              {genre_ids.map((genre) => (
                <MovieTypes key={genre} name="Suspense" />
              ))}
            </S.Categories>
          </S.InfosWrapper>
        </S.Content>
      </S.MovieWrapper>
    </Link>
  </S.Wrapper>
)

export default MovieCard
