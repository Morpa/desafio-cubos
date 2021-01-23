import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Pagination from '.'

const props = {
  moviesPerPag: 5,
  totalMovies: 25,
  paginate: 1,
  currentPag: 1
}

describe('<Pagination />', () => {
  it('should render badge when current page is active', () => {
    const { container } = renderWithTheme(<Pagination {...props} />)

    expect(
      screen.queryByRole('heading', { name: /1/i })
    ).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render quantity of pages', () => {
    const { container } = renderWithTheme(<Pagination {...props} />)

    expect(container.querySelectorAll('li')).toHaveLength(5)

    expect(container.firstChild).toMatchSnapshot()
  })
})
