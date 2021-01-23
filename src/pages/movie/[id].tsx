import Movie, { MovieProps } from 'templates/Movie'

import item from 'templates/Movie/mock'

type MovieDetailsProps = {
  movie: MovieProps
}

export default function Index({ movie }: MovieDetailsProps) {
  return <Movie {...movie} />
}

export const getServerSideProps = async () => {
  return {
    props: {
      movie: item
    }
  }
}
