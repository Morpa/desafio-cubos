import Badge from 'components/Badge'

import * as S from './styles'

export type PaginationProps = {
  moviesPerPage: number
  totalMovies: number
  paginate: (value: number) => void
  currentPage: number
}

const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage
}: PaginationProps) => {
  const pagNumbers = []

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pagNumbers.push(i)
  }

  return (
    <S.Wrapper>
      <S.List>
        {pagNumbers.map((page) =>
          page === currentPage ? (
            <S.Page key={page}>
              <Badge size="small">{page}</Badge>
            </S.Page>
          ) : (
            <S.Page key={page} onClick={() => paginate(page)}>
              <h2>{page}</h2>
            </S.Page>
          )
        )}
      </S.List>
    </S.Wrapper>
  )
}

export default Pagination
