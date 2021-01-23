import Badge from 'components/Badge'

import * as S from './styles'

export type PaginationProps = {
  moviesPerPag: number
  totalMovies: number
  paginate: number
  currentPag: number
}

const Pagination = ({
  moviesPerPag,
  totalMovies,
  /* paginate, */
  currentPag
}: PaginationProps) => {
  const pagNumbers = []

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPag); i++) {
    pagNumbers.push(i)
  }

  return (
    <S.Wrapper>
      <S.List>
        {pagNumbers.map((page) =>
          page === currentPag ? (
            <S.Page key={page}>
              <Badge size="small">{page}</Badge>
            </S.Page>
          ) : (
            <S.Page key={page}>
              <h2>{page}</h2>
            </S.Page>
          )
        )}
      </S.List>
    </S.Wrapper>
  )
}

export default Pagination
