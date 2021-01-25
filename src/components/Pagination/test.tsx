import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Pagination from '.'

const props = {
  moviesPerPage: 5,
  totalMovies: 25,
  paginate: jest.fn(),
  currentPage: 1
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

  it('should navigate to next page', () => {
    const paginate = jest.fn()

    renderWithTheme(<Pagination {...props} paginate={paginate} />)

    fireEvent.click(screen.getByRole('heading', { name: /2/i }))

    expect(paginate).toBeCalled()
  })

  it('should navigate to previous page', () => {
    const paginate = jest.fn()

    renderWithTheme(
      <Pagination {...props} currentPage={3} paginate={paginate} />
    )

    fireEvent.click(screen.getByRole('heading', { name: /2/i }))

    expect(paginate).toBeCalled()
  })
})
