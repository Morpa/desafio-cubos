import { GetServerSideProps } from 'next'

import tmdbApi from 'services/tmdbApi'
import Movie, { MovieProps } from 'templates/Movie'

type MovieDetailsProps = {
  movie: MovieProps
}

export default function Index({ movie }: MovieDetailsProps) {
  return <Movie {...movie} />
}

export const getServerSideProps: GetServerSideProps<MovieDetailsProps> = async (
  context
) => {
  const response = await tmdbApi.get(
    `movie/${context.params!.id}?api_key=${
      process.env.NEXT_PUBLIC_TMDB_API_KEY
    }&language=pt-BR&append_to_response=videos`
  )

  return {
    props: {
      movie: response.data
    }
  }
}
